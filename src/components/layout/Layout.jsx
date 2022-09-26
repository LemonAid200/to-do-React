import React from 'react'

const Layout = ({children}) => {
  return (
    <div className="py-10 bg-slate-900 min-h-screen h-full text-white">{children}</div>
  )
}

export default Layout