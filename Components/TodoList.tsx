'use client'
import clsx from 'clsx';
import { Key, useEffect, useState } from 'react';
import useSWR from 'swr'

interface ITodo {
  id: Object,
  title: string,
  completed: boolean,
}

const fetcher = (path: string) => fetch(`http://localhost:3000/api/${path}`, { cache: 'no-store' }).then(res => res.json())
const update = (path: string, task: any,) => {
  fetch(`http://localhost:3000/api/${path}`, {
    method: 'POST',
    mode: 'no-cors',
    body: JSON.stringify(task)
  });
}

const TodoList = () => {
  const { data } = useSWR(`todo`, fetcher)

  return (
    <>
      {
        data?.allTodo.map((task: ITodo, index: Key) => (
          <div className="flex mb-4 items-center" key={index}>
            <p className={clsx(task.completed && `line-through`, `w-full text-green`)}>{task.title}</p>
            <button
              className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-grey border-grey hover:bg-grey"
              onClick={() => {update(`todo/${task.id}`, task)}}
            >
              Not Done
            </button>
            <button
              className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red"
            >
              Remove
            </button>
          </div>
        ))
      }
    </>
  )
}

export default TodoList
