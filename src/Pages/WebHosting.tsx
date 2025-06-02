import { Outlet } from "react-router";
import { useTranslation } from "react-i18next";
import { SecondaryHeader } from "../Components/Layout";
import { HostingCardType } from "../types/interfaces";
import { HostingCard } from "../Components/Cards";


function WebHosting() {
  const {t} = useTranslation("services");
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
          </article>
          <article>
            <h4 className="text-3xl font-semibold text-gray-700 mt-5 border-b-4 border-cyan-500 pb-2 w-fit">
              {t("services.webHosting.liElOneTitle")}
            </h4>
            <p className="text-lg sm:text-xl text-gray-700 mt-5 mb-10">
              {t("services.webHosting.liElOne")}
            </p>
          </article>
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
            <p className="text-xl sm:text-3xl text-brandColor mb-10">
              {t("services.webHosting.liElTwoPara")}
            </p>
          </article>
          <article>
            <h4 className="text-3xl font-semibold text-gray-700 mt-5 border-b-4 border-cyan-500 pb-2 w-fit">
              {t("services.webHosting.liElThreeTitle")}
            </h4>
            <p className="text-lg sm:text-xl text-gray-700 mt-5">
              {t("services.webHosting.liElThree")}
            </p>
          </article>

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