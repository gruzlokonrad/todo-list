import Link from 'next/link'
import React from 'react'
import Container from './Container'
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav>
      <Container className='px-10 py-3 bg-gray-800 text-white flex justify-between items-center'>
        <section>
          Todo App
        </section>
        <section>
          <button>
            <Link href='/login'>
              <FaUserCircle size={40} />
            </Link>
          </button>
        </section>
      </Container>
    </nav>
  )
}

export default Navbar