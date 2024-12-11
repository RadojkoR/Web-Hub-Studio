import { useTranslation } from "react-i18next";

function SeoOptimization() {
    const { t } = useTranslation("services")
  return (
    <section className="seoOptimization px-4 md:px-0 text-gray-700 mb-10 py-10">
      <div className="md:container-80">
        <h3 className="text-4xl font-bold ">
          {t("services.seoOptimization.title")}
        </h3>
        <p className="text-xl mt-5">
          {t("services.seoOptimization.para")}
        </p>

        <h4 className="text-2xl font-semibold mt-5 border-b-4 border-cyan-500 pb-2 w-fit">
          {t("services.seoOptimization.liElOneTitle")}
        </h4>
        <p className="text-xl mt-5 mb-10">
          {t("services.seoOptimization.liElOne")}
        </p>

        <h4 className="text-2xl font-semibold mt-5 border-b-4 border-cyan-500 pb-2 w-fit">
          {t("services.seoOptimization.liElTwoTitle")}
        </h4>
        <p className="text-xl mt-5 mb-10">
          {t("services.seoOptimization.liElTwo")}
        </p>

        <h4 className="text-2xl font-semibold mt-5 border-b-4 border-cyan-500 pb-2 w-fit">
          {t("services.seoOptimization.liElThreeTitle")}
        </h4>
        <p className="text-xl mt-5 mb-10">
          {t("services.seoOptimization.liElThree")}
        </p>

        <h4 className="text-2xl font-semibold mt-5 border-b-4 border-cyan-500 pb-2 w-fit">
          {t("services.seoOptimization.liElFourTitle")}
        </h4>
        <p className="text-xl mt-5 mb-10">
          {t("services.seoOptimization.liElFour")}
        </p>

        <h4 className="text-2xl font-semiboldmt-5 border-b-4 border-cyan-500 pb-2 w-fit">
          {t("services.seoOptimization.titleTwo")}
        </h4>
        <p className="text-xl mt-5 mb-10 font-bold">
          {t("services.seoOptimization.lastPara")}
        </p>
      </div>
    </section>
  );
}

export default SeoOptimization