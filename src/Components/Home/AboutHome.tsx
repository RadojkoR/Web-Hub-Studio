import { useTranslation } from "react-i18next"

function AboutHome() {
    const { t } = useTranslation("home")
  return (
    <section className="bg-slate-200 py-20">
      <article className="container">
        <h1 className="text-4xl text-center font-bold text-cyan-800 uppercase">
          Web Hub Studio
        </h1>
        <h2 className="text-2xl font-semibold text-gray-700 mt-10 mb-5 ">
          {t("home.aboutTitle")}
        </h2>
        <p className="text-xl text-gray-700 md:text-left text-center">{t("home.aboutTxt")}</p>
      </article>
    </section>
  );
}

export default AboutHome