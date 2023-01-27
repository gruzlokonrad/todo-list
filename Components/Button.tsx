import React from 'react'

interface IButton {
  children: JSX.Element | JSX.Element[] | string,
  className?: string,
}

const Button = ({
  children, className
}: IButton) => {
  return (
    <button
      className={`${className} inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
    // className={`${className} bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full`}
    >
      {children}
    </button>
  )
}

export default Button