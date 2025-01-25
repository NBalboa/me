import React from "react";

const Items = ({ children }: { children: React.ReactNode }) => {
  return <ul className="flex  flex-wrap gap-2">{children}</ul>;
};

export default Items;
