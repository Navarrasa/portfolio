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
        px-4 py-8
        mt-8
        md:mb-10
      "
    >
      <div
        className="
          flex
          max-w-7xl 
          flex-col 
          gap-8
          md:mt-16
        "
      >
        {/* Título */}
        <div
          className="
            flex 
            w-full 
            flex-col items-center
            md:flex-row 
            justify-around 
            text-center
            gap-4
            md:gap-20 
            xl:gap-16
          "
        >
          <p
            className="
              rubik 
              text-4xl 
              md:text-[4rem] 
              xl:text-[7rem]
            "
          >
            Backend
          </p>
          <p
            className="
              rubik 
              text-4xl 
              md:text-[4rem] 
              xl:text-[7rem]
            "
          >
            Developer
          </p>
        </div>

        {/* Descrição */}
        <div
          className="
            flex 
            w-full 
            flex-col 
            gap-4
            md:flex-row 
            md:gap-14
            text-center
            md:text-start
            xl:text-start
          "
        >
          <p className="text-sm max-w-md md:max-w-xs xl:max-w-sm">
            I am a backend developer with a passion for building scalable APIs and working with databases.
          </p>
          <p className="text-sm max-w-md md:max-w-xs xl:max-w-sm">
            My tech stack includes Python, Django, and PostgreSQL.
          </p>
        </div>
      </div>
    </section>
  );
}
