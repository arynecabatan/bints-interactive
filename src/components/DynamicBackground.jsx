import chroma from "chroma-js";
import { extractDominantColor, getActive } from "../function";

export const DynamicBackground = ({ activeSection }) => {
  const fetchActiveSection = getActive(activeSection);
  const dominantColor = extractDominantColor(fetchActiveSection.image);
  const mutedBackground = chroma(dominantColor).luminance(0.05);

  return (
    <div
      style={{ backgroundColor: mutedBackground }}
      className="absolute -z-50 w-screen h-screen bg-transparent overflow-hidden transition-all duration-1000 delay-30"
    >
      <img
        src={fetchActiveSection.image}
        className="object-cover scale-150 w-full h-full bg-transparent blur-sm opacity-10"
      />
    </div>
  );
};
