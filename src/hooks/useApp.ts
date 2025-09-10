import { useState } from "react";
import { Page } from "../types/page";


export const useApp = () => {
  const [page, setPage] = useState<Page>("about");
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleChangePage = ({ page, isToggleMenu }: { page: Page, isToggleMenu?: boolean }) => {
    setPage(page)
    if (isToggleMenu) {
      handleToggleHamburgerMenu()
    }
  }

  const getCurrentYear = (): number => {
    return new Date().getFullYear()
  }

  const handleToggleHamburgerMenu = () => setShowMenu(prev => !prev)

  return {
    page,
    handleChangePage,
    showMenu,
    handleToggleHamburgerMenu,
    getCurrentYear
  }
}

