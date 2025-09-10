import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'


type HamburgerMenuProps = {
  children: React.ReactNode,
  isShow: boolean,
  onHandleShowMenu: () => void
}

const HamburgerMenu = ({ children, isShow, onHandleShowMenu }: HamburgerMenuProps) => {
  return (
    <div
      className={`fixed z-50  ${isShow
        ? "bg-card w-full left-0 top-0 rounded-b-md"
        : "left-1 top-1 bg-white text-black rounded-lg"
        } p-3  mx-auto  md:hidden transition-all ease-in border-2 border-accent`}
    >
      <button
        onClick={onHandleShowMenu}
        className="flex gap-2 items-center text-2xl group transition-all ease-in text-foreground"
      >
        <GiHamburgerMenu />
        <span
          className={`transition-all ease-in ${isShow ? "block" : "hidden"
            }  group-hover:block`}
        >
          Menu
        </span>
      </button>
      <nav className={`space-y-2 mt-2 ${isShow ? "block" : "hidden"}`}>
        {children}
      </nav>
    </div>
  )
}

export default HamburgerMenu