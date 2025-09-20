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

        mt-8
        md:mb-10
      "
    >
      <div
        className="
          flex
          max-w-7xl 
          flex-col 
          gap-4 
        
          md:mt-16
        "
      >
        {/* Título */}
        <div
          className="
            flex 
            w-full 
            justify-around 

            md:gap-20 
            xl:gap-16
          "
        >
          <p
            className="
              rubik 
              text-3xl 
              md:text-[4rem] 
              xl:text-[7rem]
            "
          >
            Backend
          </p>
          <p
            className="
              rubik 
              text-3xl 
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
            gap-14
          "
        >
          <p
            className="
              md:w-[300px] 
              xl:w-[450px]
            "
          >
            I am a backend developer with a passion for building scalable APIs and working with databases.
          </p>
          <p
            className="
              md:w-[300px] 
              xl:w-96
            "
          >
            My tech stack includes Python, Django, and PostgreSQL.
          </p>
        </div>
      </div>
    </section>
  );
}
