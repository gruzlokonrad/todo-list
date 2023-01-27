'use client'

/* eslint-disable @next/next/no-html-link-for-pages */
import { AiOutlineArrowRight } from 'react-icons/ai'
import { useUser } from '@auth0/nextjs-auth0/client';
import Todo from '@/Components/Todo';
import Button from '@/Components/Button';

export default function Home() {
  const { user, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (user) return <Todo />

  return (
    <main className='flex flex-1 items-center justify-center'>
      <div className="max-w-sm text-center p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Todo App
        </h5>
        <p className="my-6 font-normal text-gray-700 dark:text-gray-400">
          The best web app for your tasks! <br />
          {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. */}
          Check on your own.
        </p>
        <a
          href="/api/auth/login"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <Button>
            Login
          </Button>
          <AiOutlineArrowRight className='ml-2' />
        </a>
      </div>
    </main>
  )
}
