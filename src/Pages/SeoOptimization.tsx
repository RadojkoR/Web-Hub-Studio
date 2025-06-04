import { useTranslation } from "react-i18next";
import { SecondaryHeader } from "../Components/Layout";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import MetaTags from "../Components/SEO/MetaTags";

function SeoOptimization() {
  const { t } = useTranslation("services");
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const servicesHeader = [
    {
      headerBgClass: "servicesHeader ",
      headerSloganBold: t("services.seoOptimization.headerSloganBold"),
      headerSloganRegular: t("services.seoOptimization.headerSloganRegular"),
    },
  ];
  return (
    <>
      <MetaTags />
      <SecondaryHeader headerInfo={servicesHeader} />
      <section className="seoOptimization bg-slate-100">
        <div className="md:container-80 px-5 md:px-0 py-10">
          <article className="pt-20">
            <h2 className="border-l-4 border-brandColor h-fit text-5xl text-gray-700 font-bold mb-12 ps-5">
              {t("services.seoOptimization.title")}
            </h2>
            <p className="text-xl sm:text-2xl text-gray-700 font-semibold pb-5">
              {t("services.seoOptimization.para")}
            </p>
            <ul className="mb-14 flex flex-col gap-2 text-amber-500 font-semibold">
              <li className="list-disc list-inside marker:text-brandColor">
                <Link to="#onPage">
                  {t("services.seoOptimization.liElOneTitle")}
                </Link>
              </li>
              <li className="list-disc list-inside marker:text-brandColor">
                <Link to="#technicalSEO">
                  {t("services.seoOptimization.liElTwoTitle")}
                </Link>
              </li>
              <li className="list-disc list-inside marker:text-brandColor">
                <Link to="#SEOAnalytics">
                  {t("services.seoOptimization.liElThreeTitle")}
                </Link>
              </li>
              <li
                id="onPage"
                className="list-disc list-inside marker:text-brandColor"
              >
                <Link to="#googleMaps">
                  {t("services.seoOptimization.liElFourTitle")}
                </Link>
              </li>
              <li className="list-disc list-inside marker:text-brandColor">
                <Link to="#whyIsImportant">
                  {t("services.seoOptimization.titleTwo")}
                </Link>
              </li>
            </ul>
          </article>
          {/* On-page SEO Optimization */}
          <article id="technicalSEO">
            <h4 className="text-3xl font-semibold text-gray-700 mt-5 border-b-4 border-cyan-500 pb-2 w-fit">
              {t("services.seoOptimization.liElOneTitle")}
            </h4>
            <p className="text-lg sm:text-xl text-gray-700 mt-5 mb-10">
              {t("services.seoOptimization.liElOne")}
            </p>
          </article>
          {/* Technical SEO Optimization */}
          <article id="SEOAnalytics">
            <h4 className="text-3xl font-semibold text-gray-700 mt-5 border-b-4 border-cyan-500 pb-2 w-fit">
              {t("services.seoOptimization.liElTwoTitle")}
            </h4>
            <p className="text-lg sm:text-xl text-gray-700 mt-5">
              {t("services.seoOptimization.liElTwo")}
            </p>
          </article>
          {/* SEO Analytics */}
          <article id="googleMaps">
            <h4 className="text-3xl font-semibold text-gray-700 mt-5 border-b-4 border-cyan-500 pb-2 w-fit">
              {t("services.seoOptimization.liElThreeTitle")}
            </h4>
            <p className="text-lg sm:text-xl text-gray-700 mt-5">
              {t("services.seoOptimization.liElThree")}
            </p>
          </article>
          {/* Google Maps and Other Service Integrations */}
          <article id="whyIsImportant">
            <h4 className="text-3xl font-semibold text-gray-700 mt-5 border-b-4 border-cyan-500 pb-2 w-fit">
              {t("services.seoOptimization.liElFourTitle")}
            </h4>
            <p className="text-lg sm:text-xl text-gray-700 mt-5">
              {t("services.seoOptimization.liElFour")}
            </p>
          </article>
          {/* Why is SEO important? */}
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