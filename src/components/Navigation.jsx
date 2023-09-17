import { Logo } from "../Svg";
import { FiMenu, FiSearch } from "react-icons/fi";
import { NavigationMenu } from "./NavigationMenu";
import {
  BintsContext,
  contrastColor,
  extractDominantColor,
  getActive,
  useBintsContext,
} from "../function";
import chroma from "chroma-js";

export const Navigation = ({ activeSection }) => {
  const activeProp = getActive(activeSection);
  const dominantColor = extractDominantColor(activeProp.image);
  const titleColor = contrastColor(chroma(dominantColor).luminance(0.09));
  const { isMenuOpen, setIsMenuOpen } = useBintsContext(BintsContext);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav
        style={{ color: titleColor }}
        className="fixed w-full h-12 flex items-center justify-between z-50 p-2 md:p-12 lg:p-20 top-0"
      >
        <div className="flex  items-center gap-4 font-semibold italic text-xl">
          <Logo width="28" height="28" bigCircle={titleColor} />
          <p className="hidden md:block">BINTS.CO</p>
        </div>
        <div className="text-2xl flex gap-4 md:gap-8 lg:gap-12">
          <FiSearch />
          <button onClick={handleClick}>
            <FiMenu />
          </button>
        </div>
      </nav>
      <NavigationMenu />
    </>
  );
};
