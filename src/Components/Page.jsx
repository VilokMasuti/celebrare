import { useState } from "react";
import RightChange from "./RightChange";
import {
  motion,
  useDragControls,
  useMotionValue,
  useTransform,
} from "framer-motion";

const Page = () => {
  const [displayText, setDisplayText] = useState("");
  const [fontsize, setFontSize] = useState("");
  const [fontfamily, setFontFamily] = useState("system-ui");
  const [fontColor, setFontColor] = useState("#fff");

  const handleTextChange = text => {
    setDisplayText(text);
  };

  const handleFontSizeChange = size => {
    setFontSize(size);
  };

  const handleFontFamilyChange = family => {
    setFontFamily(family);
  };

  const handleFontColorChange = color => {
    setFontColor(color);
  };

  const controls = useDragControls();
  const x = useMotionValue(0);
  const background = useTransform(
    x,
    [-100, 0, 100],
    ["#000", "#eb0e0e", "#000"]
  );

  return (
    <div className="flex">
      <div className="w-[50%] h-[100vh] relative overflow-hidden">
        <motion.div
          drag
          dragControls={controls}
          dragConstraints={{ top: -50, left: -50, right: 50, bottom: 50 }} // Adjust as needed
          whileDrag={{ scale: 1.3 }}
          dragElastic={0.4}
          style={{ x, background }}
          className="ml-7 w-[30%] h-[40%] rounded-lg bg-slate-700 absolute draggable-div"
        >
          <h1
            className="text-white text-sm mt-5 font-semibold whitespace-normal break-words"
            style={{
              fontSize: `${fontsize}px`,
              fontFamily: fontfamily,
              color: fontColor,
            }}
          >
            {displayText}
          </h1>
        </motion.div>
      </div>
      <RightChange
        onTextChange={handleTextChange}
        onFontChange={handleFontSizeChange}
        onFontFamily={handleFontFamilyChange}
        onFontColor={handleFontColorChange}
      />
    </div>
  );
};

export default Page;
