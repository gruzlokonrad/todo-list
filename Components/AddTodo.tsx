import React, { useState } from 'react'

async function addTodo(title: String) {
  fetch(`http://localhost:3000/api/todo`, {
    method: 'POST',
    // mode: 'no-cors',
    body: JSON.stringify(title)
  })
}

const AddTodo = () => {
  const [title, setTitle] = useState('');

  return (
    <div className="mb-4">
      <div className="flex mt-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker bg-gray-200"
          placeholder="Add Todo"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <button
          className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal"
          onClick={() => {
            addTodo(title)
            setTitle('')
          }}
        >
          Add
        </button>
      </div>
    </div>
  )
}

export default AddTodo