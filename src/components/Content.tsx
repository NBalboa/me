import React, { memo } from "react";
import Circle from "./Circle";

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
        <>
          <div className="bg-black rounded-lg p-4 relative">{children}</div>
          <a href="mailto:nickojek2x@gmail.com">
            <div>
              <div className="relative group left-6 -bottom-12 flex items-center justify-center hover:bg-black hover:text-white bg-white text-black font-bold w-[72px] h-[72px] rounded-full translate-all ease-in duration-800">
                <p className="inline-block py-2 text-sm z-50">Hire Me</p>
                <div className="absolute group-hover:animate-spin group-hover:animate-spin-slow">
                  <Circle />
                </div>
              </div>
            </div>
          </a>
        </>
      )}
    </div>
  );
};

export default memo(Content);
