import { Icon as ICON_TYPE } from "../types/icon";
import Icon from "./Icon";

type TechStackProps = {
  name: string;
  icon: ICON_TYPE | null;
  isHover?: boolean;
};

const TechStack = ({ name, icon, isHover = true }: TechStackProps) => {
  return (
    <div className="flex gap-2 items-center bg-accent text-accent-foreground px-2 py-1 group rounded-lg transition-all ease-in duration-700">
      <span className="text-2xl text-primary font-bold text-accent-foreground">
        {icon ? <Icon icon={icon} /> : name}
      </span>
      <p
        className={`hidden ${isHover ? "group-hover:block" : null
          }  font-bold text-md transition-all ease-in duration-700`}
      >
        {name}
      </p>
    </div>
  );
};

export default TechStack;
