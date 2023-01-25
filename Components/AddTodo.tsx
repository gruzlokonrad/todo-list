import React from 'react'

const AddTodo = () => {
  return (
    <div className="mb-4">
      <h1 className="text-grey-darkest">Todo List</h1>
      <div className="flex mt-4">
        <input className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker bg-gray-200" placeholder="Add Todo" />
        <button className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal">Add</button>
      </div>
    </div>
  )
}

export default AddTodo