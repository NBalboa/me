import { useState } from "react";
import ME from "./assets/images/me.jpg";
import Content from "./components/Content";
import Main from "./components/Main";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Technology from "./Pages/Techology";
import { GiHamburgerMenu } from "react-icons/gi";
import NavButton from "./components/NavButton";

const App = () => {
  const [page, setPage] = useState<string>("projects");
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const getPage = (page: string): JSX.Element => {
    if (page === "about") {
      return <About />;
    } else if (page === "projects") {
      return <Projects />;
    } else if (page === "techstacks") {
      return <Technology />;
    } else {
      return <About />;
    }
  };

  return (
    <div>
      <Main>
        <Content isSide={true}>
          <div>
            <div className="space-y-2">
              <div className="w-full">
                <img
                  src={ME}
                  className="max-w-sx h-[200px] mx-auto rounded-lg border-2 border-white"
                />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl text-center font-bold">
                  Nicko Balboa
                </h1>
                <p className="text-sm text-center font-semibold">
                  Software Developer, Philippines
                </p>
              </div>
              <div>
                <h2 className="font-medium text-lg font-bold mb-2 text-center md:text-left">
                  Contacts
                </h2>
                <p className="text-center md:text-left text-md">
                  nickojek2x@gmail.com
                </p>
                <p className="text-center md:text-left text-md">
                  +63 962 492 2544
                </p>
              </div>
              <div>
                <h2 className="font-medium text-lg font-bold mb-2 text-center md:text-left">
                  Socials
                </h2>
                <div className="flex flex-col items-center md:items-left md:flex-row gap-2">
                  <div className="flex gap-2 items-center">
                    <span className="text-2xl">
                      <FaLinkedin />
                    </span>
                    <a
                      href="https://www.linkedin.com/in/nicko-balboa-5251581ba/"
                      target="_blank"
                      className="text-md font-bold"
                    >
                      LinkedIn
                    </a>
                  </div>
                  <div className="flex gap-2 items-center">
                    <span className="text-2xl">
                      <FaGithub />
                    </span>
                    <a
                      href="https://github.com/NBalboa"
                      className="text-md font-bold"
                      target="_blank"
                    >
                      Github
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <nav className="hidden md:flex mt-2 flex flex-col gap-2">
              <a
                href="/me/nickobalboa-resume.pdf"
                className="w-full border-2 border-white p-4 py-2 rounded-lg text-center hover:text-black hover:bg-white"
              >
                Resume
              </a>
              <NavButton
                label="About"
                isActive={page === "about"}
                onClick={() => setPage("about")}
              />
              <NavButton
                label="Projects"
                isActive={page === "projects"}
                onClick={() => setPage("projects")}
              />
              <NavButton
                label="Technical Skills"
                isActive={page === "techstacks"}
                onClick={() => setPage("techstacks")}
              />
            </nav>

            <div
              className={`fixed z-50  ${
                showMenu
                  ? "bg-black w-full left-0 top-0 rounded-b-md"
                  : "left-1 top-1 bg-white text-black rounded-lg"
              } p-3  mx-auto  md:hidden transition-all ease-in `}
            >
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="flex gap-2 items-center text-2xl group transition-all ease-in"
              >
                <GiHamburgerMenu />
                <span
                  className={`transition-all ease-in ${
                    showMenu ? "block" : "hidden"
                  }  group-hover:block`}
                >
                  Menu
                </span>
              </button>
              <nav
                className={`space-y-2 mt-2 ${showMenu ? "block" : "hidden"}`}
              >
                <a
                  href="/me/nickobalboa-resume.pdf"
                  className="hover:text-black hover:bg-white block text-center w-full border-2 border-white p-4 py-2 rounded-lg"
                >
                  Resume
                </a>
                <NavButton
                  label="About"
                  isActive={page === "about"}
                  onClick={() => {
                    setShowMenu(false);
                    setPage("about");
                  }}
                />
                <NavButton
                  label="Projects"
                  isActive={page === "projects"}
                  onClick={() => {
                    setShowMenu(false);
                    setPage("projects");
                  }}
                />
                <NavButton
                  label="Technical Skills"
                  isActive={page === "techstacks"}
                  onClick={() => {
                    setShowMenu(false);
                    setPage("techstacks");
                  }}
                />
              </nav>
            </div>
          </div>
        </Content>
        <Content>{getPage(page)}</Content>
      </Main>
    </div>
  );
};

export default App;
