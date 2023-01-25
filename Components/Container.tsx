import clsx from 'clsx'
import React from 'react'

interface IContainer {
  children: JSX.Element|JSX.Element[]|React.ReactNode,
  className?: string,
}

const Container = ({
  children,
  className,
}: IContainer) => {
  return (
    <section className={clsx(className)}>
      {children}
    </section>
    )
}

export default Container