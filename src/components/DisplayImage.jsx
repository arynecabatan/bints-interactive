export const DisplayImage = ({ activeSection }) => {
  return (
    <section
      id={activeSection.id}
      className="min-h-screen flex items-center justify-center snap-start relative"
    >
      <div className="h-screen w-screen grid place-items-center">
        <div className="z-20 p-12 max-w-[640px] md:p-24">
          <img src={activeSection.image} className="rounded-md shadow-xl" />
        </div>
      </div>
    </section>
  );
};
