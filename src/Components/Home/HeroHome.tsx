import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function HeroHome() {
    const {t} = useTranslation("heroHome")
  return (
    <section className="heroHome">
      <article className="md:container-80 px-4 md:px-0 xl:w-4/5 pt-14 flex flex-col">
        <h2 className="text-center text-gray-50 text-2xl xxs:text-3xl sm:text-4xl font-bold uppercase tracking-wide">
          {t("heroHome.heading")}
        </h2>
        <p className="text-center text-gray-50 tracking-wide text-xl font-semibold pt-5">
          <span className="font-bold">Web Hub Studio</span>
          {t("heroHome.para")}
        </p>
        <div className="mx-auto mt-10 mb-10">
          <Link
            to={"/services"}
            className="
            bg-cyan-300 
            hover:bg-cyan-700 
            focus:bg-cyan-700 
            hover:text-gray-200 
            focus:text-gray-200 
            transition-all
            duration-300
            ease-in-out
            w-36 
            text-sm
            xxs:text-lg 
            font-bold 
            text-gray-700 
            px-5 
            py-2 
            me-5"
          >
            {t("heroHome.servicesBtn")}
          </Link>
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
            text-sm
            xxs:text-lg 
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

export default HeroHome