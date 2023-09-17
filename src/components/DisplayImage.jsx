export const DisplayImage = ({ activeSection }) => {
  return (
    <section
      id={activeSection.id}
      className="min-h-screen flex items-center justify-center snap-start relative"
    >
      <div className="h-screen w-screen grid place-items-center">
        <div className="z-20 w-fullh-full grid place-items-center">
          <img
            src={activeSection.image}
            className="rounded-md shadow-xl max-h-[280px]"
          />
        </div>
      </div>
    </section>
  );
};
