import Content from "./components/Content";
import Main from "./components/Main";
import NavButton from "./components/NavButton";
import Profile from "./components/Profile";
import Navigation from "./components/Navigation";
import HamburgerMenu from "./components/HamburgerMenu";
import { useApp } from "./hooks/useApp";
import ContentPage from "./components/ContentPage";
import Resume from "./components/Resume";

const App = () => {
  const { handleChangePage, handleToggleHamburgerMenu, page, showMenu, getCurrentYear } = useApp();

  return (
    <Main>
      <Content isSide={true}>
        <div>
          <Profile />
          <Navigation>
            <Resume />
            <NavButton
              label="About"
              isActive={page === "about"}
              onClick={() => handleChangePage({ page: "about" })}
            />
            <NavButton
              label="Experiences"
              isActive={page === "experiences"}
              onClick={() => handleChangePage({ page: "experiences" })}
            />
            <NavButton
              label="Projects"
              isActive={page === "projects"}
              onClick={() => handleChangePage({ page: "projects" })}
            />
            <NavButton
              label="Technical Skills"
              isActive={page === "technology"}
              onClick={() => handleChangePage({ page: "technology" })}
            />
          </Navigation>
          <HamburgerMenu isShow={showMenu} onHandleShowMenu={handleToggleHamburgerMenu}>
            <a
              href="/me/nickobalboa-resume.pdf"
              className="bg-primary text-background block text-center w-full p-4 py-2 rounded-lg"
            >
              Resume
            </a>
            <NavButton
              label="About"
              isActive={page === "about"}
              onClick={() => handleChangePage({ page: "about", isToggleMenu: true })}
            />
            <NavButton
              label="Experiences"
              isActive={page === "experiences"}
              onClick={() => handleChangePage({ page: "experiences", isToggleMenu: true })}
            />
            <NavButton
              label="Projects"
              isActive={page === "projects"}
              onClick={() => handleChangePage({ page: "projects", isToggleMenu: true })}
            />
            <NavButton
              label="Technical Skills"
              isActive={page === "technology"}
              onClick={() => handleChangePage({ page: "technology", isToggleMenu: true })}
            />
          </HamburgerMenu>
        </div>
      </Content>
      <Content>
        <ContentPage page={page} />
        <div className="absolute right-0 -bottom-10">
          <p className="text-foreground text-xs text-center">© {getCurrentYear()} Nicko Balboa</p>
          <p className="text-foreground text-xs text-center">All rights reserved.</p>
        </div>
      </Content>
    </Main>
  );
};

export default App;
