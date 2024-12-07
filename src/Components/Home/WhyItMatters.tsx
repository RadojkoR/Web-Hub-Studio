import { useTranslation } from "react-i18next";

function WhyItMatters() {
    const { t } = useTranslation("whyItMatters");
  return (
    <section className="bg-slate-200 py-20">
      <div className="container">
        <h2 className="text-center text-5xl font-bold text-cyan-800 mb-12">
          {t("whyItMatters.title")}
        </h2>
        <p className="text-2xl text-gray-700 font-semibold">
          {t("whyItMatters.para")}
        </p>
        <p className="text-2xl font-bold text-blue-900 mt-6">
          {t("whyItMatters.titleTwo")}
        </p>
        <ul>
          <li className="text-xl text-gray-700 mt-3">
            <span className="font-bold">
              {t("whyItMatters.firstImpressions")}
            </span>
            {t("whyItMatters.liElOne")}
          </li>
          <li className="text-xl text-gray-700 mt-3">
            <span className="font-bold">
              {t("whyItMatters.buildsCredibility")}
            </span>
            {t("whyItMatters.liElTwo")}
          </li>
          <li className="text-xl text-gray-700 mt-3">
            <span className="font-bold">
              {t("whyItMatters.customerExperience")}
            </span>
            {t("whyItMatters.liElThree")}
          </li>
          <li className="text-xl text-gray-700 mt-3">
            <span className="font-bold">
              {t("whyItMatters.searchEngineVisibility")}
            </span>
            {t("whyItMatters.liElFour")}
          </li>
          <li className="text-xl text-gray-700 mt-3">
            <span className="font-bold">
              {t("whyItMatters.increasesConversions")}
            </span>
            {t("whyItMatters.liElFive")}
          </li>
        </ul>
        <p className="mt-5 text-2xl font-bold text-cyan-700">{t("whyItMatters.lastPara")}</p>
      </div>
    </section>
  );
}

export default WhyItMatters