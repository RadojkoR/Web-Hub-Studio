import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface serviceHero {
    title: string,
    para: string
}

interface HeroProps {
  heroT: serviceHero[];
}

function Hero({ heroT }: HeroProps) {
  const { t } = useTranslation("heroHome");
  const heroTitle = heroT[0].title;
  const heroPara = heroT[0].para
  console.log(heroT);

  return (
    <section className="heroHome">
      <article className="md:container-80 px-4 md:px-0 xl:w-4/5 pt-14 flex flex-col">
        <h2 className="text-center text-gray-50 text-2xl xxs:text-3xl sm:text-4xl font-bold uppercase tracking-wide">
          {heroTitle}
        </h2>
        <p className="text-center text-gray-50 tracking-wide text-2xl font-semibold pt-5">{heroPara}</p>
        <div className="mx-auto mt-10 mb-10">
          
          <Link
            to={"/contact"}
            className=" bg-cyan-300 
            hover:bg-cyan-700 
            focus:bg-cyan-700 
            hover:text-gray-200 
            focus:text-gray-200 
            transition-all
            duration-300
            ease-in-out
            w-36 
            text-lg 
            font-bold 
            text-gray-700 
            px-5 
            py-2 
            me-5"
          >
            {t("heroHome.contactUsBtn")}
          </Link>
        </div>
      </article>
    </section>
  );
}

export default Hero