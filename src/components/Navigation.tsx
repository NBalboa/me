import React from "react"


type NavigationProps = {
  children: React.ReactNode
}
const Navigation = ({ children }: NavigationProps) => {
  return (
    <nav className="hidden md:flex mt-2 flex flex-col gap-2">
      {children}
    </nav>
  )
}

export default Navigation