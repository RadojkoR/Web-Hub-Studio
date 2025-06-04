import { useTranslation } from "react-i18next";
import { SecondaryHeader } from "../Components/Layout";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import MetaTags from "../Components/SEO/MetaTags";

function WebDevelopment() {
  const location = useLocation();
  useEffect(() => {
    if(location.hash) {
      const element = document.getElementById(
        location.hash.slice(1)
      );
      if(element) {
        element.scrollIntoView({behavior:"smooth"})
      }
    }
  },[location])
  const { t } = useTranslation("services");
  const servicesHeader = [
    {
      headerBgClass: "servicesHeader ",
      headerSloganBold: t("services.webDevelopment.headerSloganBold"),
      headerSloganRegular: t("services.webDevelopment.headerSloganRegular"),
    },
  ];
  return (
    <>
      <MetaTags />
      <SecondaryHeader headerInfo={servicesHeader} />
      <section className="webDevelopment bg-slate-100">
        <div className="md:container-80 px-5 md:px-0 py-10">
          <article className="pt-20 border-gray-300 border-b-2 mb-20">
            <h2 className="border-l-4 border-brandColor h-fit text-5xl text-gray-700 font-bold mb-12 ps-5">
              {t("services.webDevelopment.title")}
            </h2>
            <p className="text-xl sm:text-2xl text-gray-700 font-semibold pb-5">
              {t("services.webDevelopment.paraOne")}
            </p>
            <p className="text-xl sm:text-2xl text-gray-700 font-semibold pb-8">
              {t("services.webDevelopment.paraTwo")}
            </p>
            <ul
              id="customWebDevelopment"
              className="mb-14 flex flex-col gap-2 text-amber-500 font-semibold"
            >
              <li className="list-disc list-inside marker:text-brandColor">
                <Link to="#customWebDevelopment">
                  {t("services.webDevelopment.liElTwoTitle")}
                </Link>
              </li>
              <li className="list-disc list-inside marker:text-brandColor">
                <Link to="#wordPressDevelopment">
                  {t("services.webDevelopment.liElOneTitle")}
                </Link>
              </li>
            </ul>
          </article>
          <article id="wordPressDevelopment">
            <h4 className="text-3xl font-semibold text-gray-700 mt-5 border-b-4 border-cyan-500 pb-2 w-fit">
              {t("services.webDevelopment.liElTwoTitle")}
            </h4>
            <p className="text-lg sm:text-xl text-gray-700 mt-5 mb-10">
              {t("services.webDevelopment.liElTwo")}
            </p>
          </article>
          <article>
            <h4 className="text-3xl font-semibold text-gray-700 mt-5 border-b-4 border-cyan-500 pb-2 w-fit">
              {t("services.webDevelopment.liElOneTitle")}
            </h4>
            <p className="text-lg sm:text-xl text-gray-700 mt-5">
              {t("services.webDevelopment.liElOne")}
            </p>
          </article>

          <p className="text-lg sm:text-xl text-gray-700 pt-10  font-bold border-b-2 pb-2 w-fit border-brandColorTwo mb-10">
            {t("services.webDevelopment.lastPara")}
          </p>
        </div>
      </section>
      <Outlet />
    </>
  );
}

export default WebDevelopment