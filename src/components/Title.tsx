type TitleProps = {
  label: string;
};
const Title = ({ label }: TitleProps) => {
  return (
    <h2 className="text-2xl text-gray-200 font-bold border-b-2">{label}</h2>
  );
};

export default Title;
