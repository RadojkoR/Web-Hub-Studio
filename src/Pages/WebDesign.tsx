import { useTranslation } from "react-i18next";
import { SecondaryHeader } from "../Components/Layout";
import { MetaProps } from "../types/interfaces";
import { Helmet } from "react-helmet";

function WebDesign({metaTitle, metaDescription}: MetaProps) {
    const { t } = useTranslation("services");

    const servicesHeader = [
      {
        headerBgClass: "servicesHeader ",
        headerSloganBold:t("services.webDesign.headerSloganBold"),
        headerSloganRegular:t("services.webDesign.headerSloganRegular"),
      },
    ];
  return (
    <>
      <Helmet>
        <title>Web Hub Studio - {metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Helmet>
      <SecondaryHeader headerInfo={servicesHeader} />
      <section className="webDesign bg-slate-100">
        <div className="md:container-80 px-5 md:px-0 py-10">
          <article className=" pt-20">
            <h2 className="border-l-4 border-brandColor h-fit text-5xl text-gray-700 font-bold mb-12 ps-5">
              {t("services.webDesign.title")}
            </h2>
            <p className="text-xl sm:text-2xl text-gray-700 font-semibold pb-5">
              {t("services.webDesign.para")}
            </p>
          </article>
          <article>
            <h4 className="text-3xl font-semibold text-gray-700 mt-5 border-b-4 border-cyan-500 pb-2 w-fit">
              {t("services.webDesign.liElOneTitle")}
            </h4>
            <p className="text-lg sm:text-xl text-gray-700 mt-5 mb-10">
              {t("services.webDesign.liElOne")}
            </p>
          </article>
          <article>
            <h4 className="text-3xl font-semibold text-gray-700 mt-5 border-b-4 border-cyan-500 pb-2 w-fit">
              {t("services.webDesign.liElTwoTitle")}
            </h4>
            <p className="text-lg sm:text-xl text-gray-700 mt-5">
              {t("services.webDesign.liElTwo")}
            </p>
          </article>
          <article>
            <h4 className="text-3xl font-semibold text-gray-700 mt-5 border-b-4 border-cyan-500 pb-2 w-fit">
              {t("services.webDesign.liElThreeTitle")}
            </h4>
            <p className="text-lg sm:text-xl text-gray-700 mt-5">
              {t("services.webDesign.liElThree")}
            </p>
          </article>

          <article>
            <h4 className="text-3xl font-semibold text-gray-700 mt-5 border-b-4 border-cyan-500 pb-2 w-fit">
              {t("services.webDesign.liElFourTitle")}
            </h4>
            <p className="text-lg sm:text-xl text-gray-700 mt-5">
              {t("services.webDesign.liElFour")}
            </p>
          </article>

          <p className="text-lg text-gray-800 sm:text-2xl mt-10 mb-10 font-bold">
            {t("services.webDesign.lastPara")}
          </p>
        </div>
      </section>
    </>
  );
}

export default WebDesign;
