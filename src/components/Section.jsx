import React from "react";
import { getActive } from "../function";

const Section = ({ activeSection }) => {
  const activeProp = getActive(activeSection);
  return (
    <section
      className={`snap-center w-full grid place-items-center z-10 transition-all ease-in duration-500 relative`}
    >
      <div className="z-20">
        <activeProp.content />
      </div>
    </section>
  );
};

export default Section;
