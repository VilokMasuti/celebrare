/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion } from "framer-motion";

const RightChange = ({
  onTextChange,
  onFontChange,
  onFontFamily,
  onFontColor,
}) => {
  const [text, setText] = useState("");
  const [fontsize, setFontSize] = useState(16);
  const [fontfamily, setFontFamily] = useState("system-ui");
  const [fontColor, setFontColor] = useState("#fff");

  const handleInputChange = e => {
    setText(e.target.value);
    onTextChange(e.target.value); // Notify parent component about the text change
  };
  const handleFontSizeChange = e => {
    const newSize = parseInt(e.target.value, 10);
    setFontSize(newSize);
    onFontChange(newSize);
  };
  const handleFontFamilyChange = e => {
    setFontFamily(e.target.value);
    setFontFamily(onFontFamily);
    onFontChange(onFontFamily);
  };
  const handleFontColorChange = e => {
    const newFontColor = e.target.value;
    setFontColor(newFontColor);
    onFontColor(newFontColor);
  };
  return (
    <>
      <motion.div
        animate
        className="w-[40%] h-[50vh] mt-10 p-6  bg-red-950 rounded-md shadow-md"
      >
        <div className="">
          <input
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            type="Teaxt"
            // type="text"
            value={text}
            onChange={handleInputChange}
            // style={{ fontSize: `${fontsize}px` }}
          />
        </div>
        <div className=" flex-col mt-3">
          <label className="block text-white text-sm font-bold mb-2">
            Font Size: {fontsize}px
          </label>
          <input
            className=" w-full  mt-3 p-2 border border-black rounded-md focus:outline-none focus:border-blue-500"
            type="range"
            min="10"
            max="100"
            value={fontsize}
            onChange={handleFontSizeChange}
          ></input>
        </div>
        <div className=" mt-3">
          <label className="block text-white text-sm font-bold mb-2">
            Font Family:
          </label>
          <select
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            value={fontfamily}
            onChange={handleFontFamilyChange}
          >
            <option value="system-ui">system-ui</option>
            <option value="Verdana"> Verdana</option>
            <option value="fantasy"> fantasy</option>
            <option value="Arial"> Arial</option>
          </select>
        </div>
        <div className=" mt-5">
          <label className="block  text-white text-[20px] font-bold mb-2">
            Font Color: {fontColor}
          </label>
          <input
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            type="color"
            value={fontColor}
            onChange={handleFontColorChange}
          />
        </div>
      </motion.div>
    </>
  );
};

export default RightChange;
