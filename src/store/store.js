import { makeObservable, observable, action } from 'mobx';
// Added store

class Store {
    todosList
    filter

    constructor(){
        this.todosList = []
        this.filter = 'All'
        makeObservable(this, {
            todosList: observable,
            filter: observable,
            changeToDoStatus: action,
            removeToDo: action,
            addToDo: action,
            getRandomKey: action,
            changeFilter: action
        })
    }

    addToDo (title) {
        if (title.length > 0){
            this.todosList = [{
                _id: this.getRandomKey(),
                title,
                status: 'Not done'
            }, ...this.todosList]
        }
    }

    changeToDoStatus(id, status) {
        const copy = [...this.todosList]
        const current = copy.find(t => t._id === id)
        current.status === 'Done' ? current.status = 'Not done' : current.status = 'Done'
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

    changeFilter(filter = 'All'){
        this.filter = filter
    }

    getFilteredToDos(){
        const filteredList = this.todosList.filter(todo => {
            if (todo.status === this.filter || this.filter === 'All') return true
            else return false})        
        return filteredList
    }
}

export default Store