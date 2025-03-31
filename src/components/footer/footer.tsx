export default function Footer() {
  return (
    <div
      id="footer"
      className="h-fit font-sans mt-24  max-w-7xl mx-auto rounded-md flex flex-col antialiased p-4 dark:bg-grid-white/[0.05] items-center justify-center  overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center  py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white">
          Footer
        </h2>
        <p className="text-neutral-300 text-sm md:text-base ">
          Here goes a nice footer
        </p>
      </div>
      <div id="education">TODO</div>
    </div>
  );
}
