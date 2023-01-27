import Navbar from '@/Components/Navbar'
import './globals.css'
import { Poppins } from '@next/font/google'
import { UserProvider } from '@auth0/nextjs-auth0/client';

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
      <body className={`${poppins.className}`}>
        <UserProvider>
          <Navbar />
          {children}
        </UserProvider>
      </body>
    </html>
  )
}
