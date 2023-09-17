import { contrastColor, extractDominantColor, getActive } from "../function";
import { ScrollIndicator } from "./ScrollIndicator";

export const ScrollLocation = ({ activeSection }) => {
  const activeProp = getActive(activeSection);
  const dominantColor = extractDominantColor(activeProp.image);

  return (
    <div className="fixed left-0 bottom-0 flex gap-3 items-center z-50 px-3 py-4 md:p-12 lg:p-20 cursor-pointer">
      <div className="w-12 h-12 rounded-full z-20 text-white relative md:w-16 md:h-16 lg:w-20 lg:h-20">
        <div
          style={{
            backgroundColor: dominantColor,
          }}
          className="w-full h-full absolute rounded-full z-10 animate-ping"
        />
        <p
          style={{
            backgroundColor: dominantColor,
            color: contrastColor(dominantColor),
          }}
          className="transition-all duration-1000 delay-300 border-2 italic font-bold w-full h-full z-30 rounded-full grid place-items-center absolute md:text-xl lg:text-2xl"
        >
          {`0${activeProp.id + 1}`}
        </p>
      </div>
      <ScrollIndicator activeSection={activeSection} />
    </div>
  );
};
