import { useTranslation } from "react-i18next";
import { SecondaryHeader } from "../Components/Layout";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";
import { MetaProps } from "../types/interfaces";

function SeoOptimization({ metaTitle, metaDescription }: MetaProps) {
  const { t } = useTranslation("services");

  const servicesHeader = [
    {
      headerBgClass: "servicesHeader ",
      headerSloganBold: t("services.seoOptimization.headerSloganBold"),
      headerSloganRegular: t("services.seoOptimization.headerSloganRegular"),
    },
  ];
  return (
    <>
      <Helmet>
        <title>Web Hub Studio - {metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Helmet>
      <SecondaryHeader headerInfo={servicesHeader} />
      <section className="seoOptimization bg-slate-100">
        <div className="md:container-80 px-5 md:px-0 py-10">
          <article className=" pt-20">
            <h2 className="border-l-4 border-brandColor h-fit text-5xl text-gray-700 font-bold mb-12 ps-5">
              {t("services.seoOptimization.title")}
            </h2>
            <p className="text-xl sm:text-2xl text-gray-700 font-semibold pb-5">
              {t("services.seoOptimization.para")}
            </p>
          </article>
          <article>
            <h4 className="text-3xl font-semibold text-gray-700 mt-5 border-b-4 border-cyan-500 pb-2 w-fit">
              {t("services.seoOptimization.liElOneTitle")}
            </h4>
            <p className="text-lg sm:text-xl text-gray-700 mt-5 mb-10">
              {t("services.seoOptimization.liElOne")}
            </p>
          </article>
          <article>
            <h4 className="text-3xl font-semibold text-gray-700 mt-5 border-b-4 border-cyan-500 pb-2 w-fit">
              {t("services.seoOptimization.liElTwoTitle")}
            </h4>
            <p className="text-lg sm:text-xl text-gray-700 mt-5">
              {t("services.seoOptimization.liElTwo")}
            </p>
          </article>
          <article>
            <h4 className="text-3xl font-semibold text-gray-700 mt-5 border-b-4 border-cyan-500 pb-2 w-fit">
              {t("services.seoOptimization.liElThreeTitle")}
            </h4>
            <p className="text-lg sm:text-xl text-gray-700 mt-5">
              {t("services.seoOptimization.liElThree")}
            </p>
          </article>

          <article>
            <h4 className="text-3xl font-semibold text-gray-700 mt-5 border-b-4 border-cyan-500 pb-2 w-fit">
              {t("services.seoOptimization.liElFourTitle")}
            </h4>
            <p className="text-lg sm:text-xl text-gray-700 mt-5">
              {t("services.seoOptimization.liElFour")}
            </p>
          </article>

          <h4 className="text-2xl font-semiboldmt-5 border-b-4 border-cyan-500 pb-2 w-fit mt-8 font-bold">
            {t("services.seoOptimization.titleTwo")}
          </h4>
          <p className="text-lg sm:text-xl mt-5 mb-10 font-bold">
            {t("services.seoOptimization.lastPara")}
          </p>
        </div>
      </section>
      <Outlet />
    </>
  );
}

export default SeoOptimization