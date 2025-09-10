type TitleProps = {
  label: string;
};
const Title = ({ label }: TitleProps) => {
  return (
    <h2 className="text-2xl text-primary font-bold border-b-2 border-accent">{label}</h2>
  );
};

export default Title;
