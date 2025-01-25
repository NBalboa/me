import React from "react";

type MainProps = {
  children: React.ReactNode;
};
const Main = ({ children }: MainProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto p-5 text-white">
      {children}
    </div>
  );
};

export default Main;
