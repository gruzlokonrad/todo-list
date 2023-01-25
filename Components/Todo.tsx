import React from 'react'
import AddTodo from './AddTodo'
import Container from './Container'
import TodoList from './TodoList'

const Todo = () => {
  return (
    <Container className='p-10'>
      <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <AddTodo />
          <TodoList />
        </div>
      </div>
    </Container>
  )
}

export default Todo