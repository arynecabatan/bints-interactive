import { FiX } from "react-icons/fi";
import { BintsContext, useBintsContext } from "../function";
import { sections } from "../config";

export const NavigationMenu = () => {
  const { isMenuOpen, setIsMenuOpen } = useBintsContext(BintsContext);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`fixed h-full w-full bg-azure/90 z-[90] ${
        !isMenuOpen
          ? "hidden"
          : "flex flex-col justify-center items-center gap-16"
      }`}
    >
      <div className="text-2xl font-semibold gap-4 flex flex-col text-center">
        {sections.map((item) => {
          return (
            <a key={item.id} href={`#${item.id}`} onClick={handleClick}>
              <p>{item.title}</p>
            </a>
          );
        })}
      </div>
      <button
        onClick={handleClick}
        className="text-xl border-[1px] border-raisinblack/50 h-12 w-12 grid place-items-center rounded-full hover:animate-pulse"
      >
        <FiX />
      </button>
    </div>
  );
};
