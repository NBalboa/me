const NavButton = ({
  label,
  isActive = false,
  onClick,
}: {
  label: string;
  onClick: () => void;
  isActive: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-full border-2 border-white p-4 py-2 rounded-lg ${
        isActive ? "bg-white text-black" : "hover:bg-white hover:text-black"
      }`}
    >
      {label}
    </button>
  );
};

export default NavButton;
