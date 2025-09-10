import ME from "../assets/images/me.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="space-y-2">
      <div className="w-full">
        <img
          src={ME}
          className="max-w-sx h-[200px] mx-auto rounded-lg border-2 border-accent"
        />
      </div>
      <div>
        <h1 className="text-2xl md:text-3xl text-center font-bold text-primary">
          Nicko Balboa
        </h1>
        <p className="text-sm text-center font-semibold text-foreground">
          Software Developer, Philippines
        </p>
      </div>
      <div>
        <h2 className="font-medium text-lg font-bold mb-2 text-center md:text-left text-foreground">
          Contacts
        </h2>
        <p className="text-center md:text-left text-md text-primary">
          nickojek2x@gmail.com
        </p>
        <p className="text-center md:text-left text-md text-primary">
          +63 962 492 2544
        </p>
      </div>
      <div>
        <h2 className="font-medium text-lg font-bold mb-2 text-center md:text-left text-foreground ">
          Socials
        </h2>
        <div className="flex flex-col items-center md:items-left md:flex-row gap-2 text-primary">
          <div className="flex gap-2 items-center justify-items-center">
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
  )
}

export default Profile
