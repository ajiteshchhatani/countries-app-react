import { useContext } from "react";
import { ThemeContext } from "../providers/ThemeProvider";

const SkeletonBox = () => {
  const theme = useContext(ThemeContext);
  const containers = Array(10).fill(1);
  return (
    <div
      className={`flex flex-col md:flex-row flex-wrap justify-between gap-4 p-2 md:p-4 overflow-x-hidden`}
    >
      {containers.map((c, index) => (
        <div
          key={index}
          className={`flex flex-col gap-2 md:w-[22%] rounded-md h-[350px] ${
            theme.themeMode === "dark"
              ? `bg-card-body-dark`
              : `bg-card-border-light`
          }`}
        >
          <div className={`h-[60%]`}>
            <div className={`skel-card rounded-t-md`}></div>

            <div className={`p-4`}>
              <div className={`w-3/4 h-[20px] bg-gray-500 mb-2 skel-card`}></div>
              <div className={`w-1/2 h-[15px]  bg-gray-500 mb-2 skel-card`}></div>
              <div className={`w-1/2 h-[15px] bg-gray-500 mb-2 skel-card`}></div>
              <div className={`w-1/2 h-[15px] bg-gray-500 skel-card`}></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonBox;
