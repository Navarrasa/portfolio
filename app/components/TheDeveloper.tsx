export default function TheDeveloper() {
  return (
    <section
      className="
        flex 
        h-full 
        w-full 
        flex-col 
        items-center 
        justify-center 
        p-8
        mt-6
        md:mb-16
      "
    >
      <div className="flex max-w-7xl flex-col gap-12 md:gap-20">
        {/* Título + Descrição agrupados */}
        <div
          className="
            flex 
            flex-col 
            md:flex-row 
            justify-between 
            items-center 
            md:items-start
            gap-10 
            md:gap-20
            text-center 
            md:text-left
            max-w-7xl
          "
        >
          {/* Backend + descrição */}
          <div className="flex flex-col items-center md:items-start gap-4 max-w-xl">
            <p className="rubik text-4xl md:text-[4rem] xl:text-[5rem]">
              Backend
            </p>
            <p className="sm:text-lg w-11/12">
              I am a backend developer with a passion for building scalable APIs and working with databases.
            </p>
          </div>

          {/* Developer + descrição */}
          <div className="flex flex-col items-center md:items-start gap-4 max-w-xl">
            <p className="rubik text-4xl md:text-[4rem] xl:text-[5rem]">
              Developer
            </p>
            <p className="sm:text-lg">
              My tech stack includes Python, Django, FastAPI, SQLite, MySQL, NextJS, Typescript and more!.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
