import { makeObservable, observable, action } from 'mobx';

class Store {
    todosList = []
    filter = null
    constructor(todosList, filter){
        this.todosList = todosList
        this.filter = filter
        makeObservable(this, {
            todosList: observable,
            filter: observable,
            changeToDo: action,
            removeToDo: action,
            addToDo: action,
            getRandomKey: action,
            changeFilter: action
        })
    }
    changeToDo(id) {
        const copy = [...this.todosList]
        const current = copy.find(t => t._id === id)
        current.isCompleted = !current.isCompleted
        this.todosList = copy
    }

    getRandomKey() {
        var uuid = require("uuid");
        var id = uuid.v4();
        return id
    }

    removeToDo(id) {
        this.todosList = [...this.todosList].filter(t => t._id !== id)
    }

    addToDo (title) {
        if (title.length > 0){
            this.todosList = [{
                _id: this.getRandomKey(),
                title,
                isCompleted: false
            }, ...this.todosList]
        }
    }

    changeFilter(filter = ''){
        this.filter = filter
    }
}

export default Store