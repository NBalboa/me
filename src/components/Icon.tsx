import { FaBootstrap, FaHtml5, FaLaravel } from "react-icons/fa";
import { DiJqueryLogo, DiMysql } from "react-icons/di";
import { MdJavascript } from "react-icons/md";
import { RiTailwindCssFill } from "react-icons/ri";
import { GrReactjs } from "react-icons/gr";
import { SiTypescript } from "react-icons/si";
import { Icon as ICON_TYPE } from "../types/icon";

export type IconProps = {
  icon: ICON_TYPE | string
}

const Icon = ({ icon }: IconProps) => {
  switch (icon) {
    case "bootstrap":
      return <FaBootstrap />
    case "html":
      return <FaHtml5 />
    case "laravel":
      return <FaLaravel />
    case "jquery":
      return <DiJqueryLogo />
    case "mysql":
      return <DiMysql />
    case "tailwindcss":
      return <RiTailwindCssFill />
    case "reactjs":
      return <GrReactjs />
    case "typescript":
      return <SiTypescript />
    case "javascript":
      return <MdJavascript />
    default:
      return null
  }
}

export default Icon