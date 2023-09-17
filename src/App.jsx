import { useEffect, useRef, useState } from "react";
import { Footer } from "./components/Footer";
import { Navigation } from "./components/Navigation";
import { ScrollLocation } from "./components/ScrollLocation";
import { DisplayImage } from "./components/DisplayImage";
import { DynamicBackground } from "./components/DynamicBackground";
import { BintsProvider } from "./function";
import { sections } from "./config";

function App() {
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const handleScroll = () => {
      const scrollTop = scrollContainer.scrollTop;
      const scrollHeight = scrollContainer.scrollHeight;
      const clientHeight = scrollContainer.clientHeight;

      const newIndex = Math.min(
        sections.length - 1,
        Math.floor(
          (scrollTop / (scrollHeight - clientHeight)) * sections.length
        )
      );

      if (newIndex !== activeSectionIndex) {
        setActiveSectionIndex(newIndex);
      }
    };

    scrollContainer.addEventListener("scroll", handleScroll);

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, [activeSectionIndex]);

  return (
    <BintsProvider>
      <main className="flex flex-col items-center justify-center h-screen">
        <Navigation activeSection={activeSectionIndex} />
        <Footer activeSection={activeSectionIndex} />
        <ScrollLocation activeSection={activeSectionIndex} />
        <div
          ref={scrollContainerRef}
          className="flex flex-col w-full h-screen overflow-y-scroll snap-y snap-mandatory relative"
        >
          {sections.map((section) => {
            return <DisplayImage key={section.id} activeSection={section} />;
          })}
        </div>
        <DynamicBackground activeSection={activeSectionIndex} />
      </main>
    </BintsProvider>
  );
}

export default App;
