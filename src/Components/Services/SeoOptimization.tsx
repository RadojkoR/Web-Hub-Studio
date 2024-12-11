import { useTranslation } from "react-i18next";

function SeoOptimization() {
    const { t } = useTranslation("services")
  return (
    <section className="seoOptimization px-4 md:px-0 text-gray-700 py-10 mb-10">
      <div className="px-10">
        <h3 className="text-3xl xxs:text-4xl font-bold ">
          {t("services.seoOptimization.title")}
        </h3>
        <p className="text-lg sm:text-xl mt-5">
          {t("services.seoOptimization.para")}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <article className="p-5 bg-blue-100 shadow-lg rounded-lg mt-5">
            <h4 className="text-2xl font-semibold mt-5 border-b-4 border-cyan-500 pb-2 w-fit">
              {t("services.seoOptimization.liElOneTitle")}
            </h4>
            <p className="text-lg sm:text-xl mt-5 mb-10">
              {t("services.seoOptimization.liElOne")}
            </p>
          </article>

          <article className="p-5 bg-yellow-100 shadow-lg rounded-lg mt-5">
            <h4 className="text-2xl font-semibold mt-5 border-b-4 border-cyan-500 pb-2 w-fit">
              {t("services.seoOptimization.liElTwoTitle")}
            </h4>
            <p className="text-lg sm:text-xl mt-5 mb-10">
              {t("services.seoOptimization.liElTwo")}
            </p>
          </article>
         
          <article className="p-5 bg-orange-100 shadow-lg rounded-lg mt-5">
            <h4 className="text-2xl font-semibold mt-5 border-b-4 border-cyan-500 pb-2 w-fit">
              {t("services.seoOptimization.liElThreeTitle")}
            </h4>
            <p className="text-lg sm:text-xl mt-5 mb-10">
              {t("services.seoOptimization.liElThree")}
            </p>
          </article>
          <article className="p-5 bg-purple-100 shadow-lg rounded-lg mt-5">
            <h4 className="text-2xl font-semibold mt-5 border-b-4 border-cyan-500 pb-2 w-fit">
              {t("services.seoOptimization.liElFourTitle")}
            </h4>
            <p className="text-lg sm:text-xl mt-5 mb-10">
              {t("services.seoOptimization.liElFour")}
            </p>
          </article>
        </div>

        <h4 className="text-2xl font-semiboldmt-5 border-b-4 border-cyan-500 pb-2 w-fit mt-8">
          {t("services.seoOptimization.titleTwo")}
        </h4>
        <p className="text-lg sm:text-xl mt-5 mb-10 font-bold">
          {t("services.seoOptimization.lastPara")}
        </p>
      </div>
    </section>
  );
}

export default SeoOptimization