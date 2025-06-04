import { Link, Outlet, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { SecondaryHeader } from "../Components/Layout";
import { HostingCardType } from "../types/interfaces";
import { HostingCard } from "../Components/Cards";
import { useEffect } from "react";
import MetaTags from "../Components/SEO/MetaTags";


function WebHosting() {
  const {t} = useTranslation("services");
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  const hostingPackages = t("services.hostingCard", {
    returnObjects: true,
  }) as HostingCardType[];

  const servicesHeader = [
    {
      headerBgClass: "servicesHeader ",
      headerSloganBold: t("services.webHosting.headerSloganBold"),
      headerSloganRegular: t("services.webHosting.headerSloganRegular"),
    },
  ];
  return (
    <>
      <MetaTags />
      <SecondaryHeader headerInfo={servicesHeader} />
      <section className="seoOptimization bg-slate-100">
        <div className="md:container-80 px-5 md:px-0 py-10">
          <article className=" pt-20">
            <h2 className="border-l-4 border-brandColor h-fit text-5xl text-gray-700 font-bold mb-12 ps-5">
              {t("services.webHosting.title")}
            </h2>
            <p className="text-xl sm:text-2xl text-gray-700 font-semibold pb-5">
              {t("services.webHosting.para")}
            </p>
            <ul className="mb-14 flex flex-col gap-2 text-brandColor font-semibold">
              <li className="list-disc list-inside marker:text-neutral-600">
                <Link to="#whatIsWebHosting">
                  {t("services.webHosting.liElOneTitle")}
                </Link>
              </li>
              <li
                id="whatIsWebHosting"
                className="list-disc list-inside marker:text-neutral-600"
              >
                <Link to="#ourWebHosting">
                  {t("services.webHosting.liElTwoTitle")}
                </Link>
              </li>
              <li
                id="responsiveDesign"
                className="list-disc list-inside marker:text-neutral-600"
              >
                <Link to="#securePlatform">
                  {t("services.webHosting.liElThreeTitle")}
                </Link>
              </li>
              <li
                id="onPage"
                className="list-disc list-inside marker:text-neutral-600"
              >
                <Link to="#cPanelHosting">
                  {t("services.webHosting.liElFourTitle")}
                </Link>
              </li>
            </ul>
          </article>
          {/* What Is Web Hosting? */}
          <article>
            <h4 className="text-3xl font-semibold text-gray-700 mt-5 border-b-4 border-cyan-500 pb-2 w-fit">
              {t("services.webHosting.liElOneTitle")}
            </h4>
            <p
              id="ourWebHosting"
              className="text-lg sm:text-xl text-gray-700 mt-5 mb-10"
            >
              {t("services.webHosting.liElOne")}
            </p>
          </article>
          {/* Our Web Hosting + Website Service */}
          <article>
            <h4 className="text-3xl font-semibold text-gray-700 mt-5 border-b-4 border-cyan-500 pb-2 w-fit">
              {t("services.webHosting.liElTwoTitle")}
            </h4>
            <p className="text-lg sm:text-xl text-gray-700 mt-5">
              {t("services.webHosting.liElTwo")}
            </p>
            <div>
              {hostingPackages.map((hostPackage, index) => (
                <HostingCard key={index} hostPackage={hostPackage} />
              ))}
            </div>
            <Link
              to="/contact"
              id="securePlatform"
              className="text-xl sm:text-3xl text-brandColor mb-10 hover:text-amber-500 focus:text-amber-500 transition-all duration-200 ease-in-out"
            >
              {t("services.webHosting.liElTwoPara")}
            </Link>
          </article>
          {/* ecure and Stable Platform */}
          <article>
            <h4 className="text-3xl font-semibold text-gray-700 mt-5 border-b-4 border-cyan-500 pb-2 w-fit">
              {t("services.webHosting.liElThreeTitle")}
            </h4>
            <p
              id="cPanelHosting"
              className="text-lg sm:text-xl text-gray-700 mt-5"
            >
              {t("services.webHosting.liElThree")}
            </p>
          </article>
          {/* Built on cPanel Hosting */}
          <article>
            <h4 className="text-3xl font-semibold text-gray-700 mt-5 border-b-4 border-cyan-500 pb-2 w-fit">
              {t("services.webHosting.liElFourTitle")}
            </h4>
            <p className="text-lg sm:text-xl text-gray-700 mt-5">
              {t("services.webHosting.liElFour")}
            </p>
          </article>
          <p className="text-lg text-gray-800 sm:text-2xl mt-10 mb-10 font-bold">
            {t("services.webHosting.lastPara")}
          </p>
        </div>
      </section>
      <Outlet />
    </>
  );
}

export default WebHosting