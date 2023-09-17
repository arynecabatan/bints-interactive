import { sections } from "../config";
import { contrastColor, extractDominantColor, getActive } from "../function";
import chroma from "chroma-js";

export const ScrollIndicator = ({ activeSection }) => {
  const SLIDERWIDTH = 160;
  const currentActiveSection = activeSection + 1;
  const progressWidth = (SLIDERWIDTH / sections.length) * currentActiveSection;

  const activeProp = getActive(activeSection);
  const dominantColor = extractDominantColor(activeProp.image);
  const titleColor = contrastColor(chroma(dominantColor).luminance(0.09));

  const customStyle = {
    backgroundColor: "white",
    width: `${progressWidth}px`,
  };

  return (
    <div className="flex gap-2 flex-col">
      <p
        className="text-sm italic w-40 line-clamp-1"
        style={{ color: titleColor }}
      >
        {activeProp.title}
      </p>
      <div className="h-1 w-40 relative">
        <div className="w-full h-full bg-raisinblack/10 rounded-full absolute" />
        <div
          style={customStyle}
          className="h-full absolute rounded-full transition-all ease-in-out duration-500"
        />
      </div>
    </div>
  );
};
