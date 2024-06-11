import React from 'react'
import Header from './Header'
import AddComponent from './AddComponent'
import Items from './Items'

const TodoPro = () => {
  return (
    <div className='w-[400px] h-[500px] mx-auto border-2 border-red-500'>
        <Header/>
        <AddComponent />
        <Items/>
    </div>
  )
}

export default TodoPro