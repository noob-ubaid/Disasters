import React from 'react'
import { cn } from './index'
const Button = ({children, className}) => {
  return (
    <button className={cn("bg-primary text-white py-2 px-6 rounded-md font-onest text-[12px] sm:font-bold font-semibold",className)}>{children}</button>
  )
}

export default Button