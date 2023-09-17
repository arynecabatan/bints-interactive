import { createContext, useContext, useEffect, useState } from "react";

import ColorThief from "colorthief";
import { sections } from "./config";
import chroma from "chroma-js";

export const getActive = (idno) => {
  const fetchData = sections.filter((item) => item.id === idno);
  return fetchData[0];
};

export const BintsContext = createContext();

export const BintsProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <BintsContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      {children}
    </BintsContext.Provider>
  );
};

export const useBintsContext = () => {
  return useContext(BintsContext);
};

export const rgbToHex = (rgbArray) => {
  if (rgbArray.length !== 3) {
    throw new Error("RGB array must contain exactly 3 values.");
  }
  const hexArray = rgbArray.map((value) => {
    const hex = value.toString(16).toUpperCase();
    return hex.length === 1 ? `0${hex}` : hex;
  });
  const hexColor = `#${hexArray.join("")}`;
  return hexColor;
};

export const extractDominantColor = (imageUrl) => {
  const [dominantColor, setDominantColor] = useState("#ffffff");
  useEffect(() => {
    const colorThief = new ColorThief();
    const img = new Image();

    if (imageUrl) {
      img.crossOrigin = "Anonymous";
      img.onload = () => {
        setDominantColor(rgbToHex(colorThief.getColor(img)));
        // const adjustedColor = chroma(dominantColor).luminance(0.2);
      };
      img.onerror = (error) => {
        console.error("Error:", error);
      };
      img.src = imageUrl;
    }
  }, [imageUrl]);

  //console.log(dominantColor);

  return dominantColor;
};

export const contrastColor = (hexColor) => {
  const contrastColor = chroma.contrast("#ffffff", hexColor);
  if (contrastColor > 4.5) {
    return "white";
  } else {
    return "black";
  }
};
