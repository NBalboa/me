const Item = ({ label }: { label: string }) => {
  return (
    <li className="text-sm px-4 py-2 text-black bg-white font-bold rounded-lg">
      {label}
    </li>
  );
};

export default Item;
