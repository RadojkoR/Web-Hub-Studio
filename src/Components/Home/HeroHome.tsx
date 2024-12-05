import { useTranslation } from "react-i18next";

function HeroHome() {
    const {t} = useTranslation("heroHome")
  return (
    <section className="heroHome">
      <article className="container xl:w-4/5 pt-14 flex flex-col">
        <h2 className="text-center text-gray-50 text-4xl font-bold uppercase tracking-wide">
          {t("heroHome.heading")}
        </h2>
        <p className="text-center text-gray-50 tracking-wide text-xl font-semibold pt-5">
          <span className="font-bold">Web Hub Studio</span>
          {t("heroHome.para")}
        </p>
        <div className="cta-buttons mx-auto mt-10 mb-10">
          <button className="bg-cyan-300 w-36 text-lg font-bold text-gray-700 px-5 py-2 me-5">
            {t("heroHome.servicesBtn")}
          </button>
          <button className="bg-cyan-300 w-36 text-lg font-bold text-gray-700 px-5 py-2">
            {t("heroHome.contactUsBtn")}
          </button>
        </div>
      </article>
    </section>
  );
}

export default HeroHome