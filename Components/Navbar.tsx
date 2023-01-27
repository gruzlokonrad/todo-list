/* eslint-disable @next/next/no-html-link-for-pages */
'use client'
import Link from 'next/link'
import React from 'react'
import Container from './Container'
import { FaUserCircle } from 'react-icons/fa';
import { useUser } from '@auth0/nextjs-auth0/client';
import Button from './Button';


const Navbar = () => {
  const { user, error, isLoading } = useUser();

  const renderLoginPanel = () => {
    return (
      <div className='flex gap-x-2 items-center'>
        <p>
          Welcome {user?.name}!
        </p>
        <a href="/api/auth/logout">
          <Button>
            Logout
          </Button>
        </a>
      </div>
    )
  }

  const renderLogoutPanel = () => {
    return (
      <div className='flex items-center'>
        <button
          className="inline-flex items-center mx-3 py-2 px-1 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <a href='/api/auth/login'>
            <p className='px-3'>Login</p>
          </a>
        </button>
        <FaUserCircle size={40} />
      </div>
    )
  }

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <nav>
      <Container className='px-10 py-3 h-16 bg-gray-800 text-white flex justify-between items-center'>
        <section>
          Todo App
        </section>
        <section>
          {user
            ? renderLoginPanel()
            : renderLogoutPanel()
          }
        </section>
      </Container>
    </nav>
  )
}

export default Navbar