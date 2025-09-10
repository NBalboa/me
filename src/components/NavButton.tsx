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
      className={`w-full p-4 py-2 rounded-lg text-foreground border-2 ${isActive ? "text-accent-foreground bg-accent border-none" : "hover:bg-accent hover:text-accent-foreground"
        }`}
    >
      {label}
    </button>
  );
};

export default NavButton;
