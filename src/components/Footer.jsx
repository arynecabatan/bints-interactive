import { SiFacebook, SiTwitter, SiInstagram } from "react-icons/si";
import { contrastColor, extractDominantColor, getActive } from "../function";
import chroma from "chroma-js";

export const Footer = ({ activeSection }) => {
  const activeProp = getActive(activeSection);
  const dominantColor = extractDominantColor(activeProp.image);
  const titleColor = contrastColor(chroma(dominantColor).luminance(0.09));
  return (
    <footer
      style={{ color: titleColor }}
      className="text-raisinblack fixed bottom-0 right-0 flex flex-col text-lg gap-4 px-4 py-8 z-50 md:p-12 lg:p-20 md:gap-8"
    >
      <SiTwitter className="-rotate-90" />
      <SiInstagram className="-rotate-90" />
      <SiFacebook className="-rotate-90" />
    </footer>
  );
};
