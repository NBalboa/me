import React from "react";

type ContentProps = {
  isSide?: boolean;
  children: React.ReactNode;
};

const Content = ({ isSide = false, children }: ContentProps) => {
  return (
    <div className={`rounded-lg col-span-1 ${isSide ? null : "md:col-span-2"}`}>
      {isSide ? (
        <div className="bg-black p-4 rounded-lg">{children}</div>
      ) : (
        <div className="bg-black rounded-lg p-4">{children}</div>
      )}
    </div>
  );
};

export default Content;
