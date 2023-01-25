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
      className={`${className} bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full`}>
      {children}
    </button>
  )
}

export default Button