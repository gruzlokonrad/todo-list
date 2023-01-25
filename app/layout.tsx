import Navbar from '@/Components/Navbar'
import './globals.css'
import { Poppins } from '@next/font/google'
import Container from '@/Components/Container'

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='bg-neutral-100 min-h-screen bg-yellow-400'>
        <Navbar />
        <h1 className={`${poppins.className} text-center text-3xl p-10`}>Todo App</h1>
        {children}
      </body>
    </html>
  )
}
