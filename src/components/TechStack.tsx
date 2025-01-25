type TechStackProps = {
  name: string;
  icon: JSX.Element | string;
  isHover?: boolean;
};

const TechStack = ({ name, icon, isHover = true }: TechStackProps) => {
  return (
    <div className="flex gap-2 items-center bg-white text-gray-600 px-2 py-1 group rounded-lg transition-all ease-in duration-700">
      <span className="text-2xl text-black font-bold">{icon}</span>
      <p
        className={`hidden ${
          isHover ? "group-hover:block" : null
        }  font-bold text-md transition-all ease-in duration-700`}
      >
        {name}
      </p>
    </div>
  );
};

export default TechStack;
