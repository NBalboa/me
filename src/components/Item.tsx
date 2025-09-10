const Item = ({ label }: { label: string }) => {
  return (
    <li className="text-sm px-4 py-2 text-accent-foreground bg-accent font-bold rounded-lg">
      {label}
    </li>
  );
};

export default Item;
