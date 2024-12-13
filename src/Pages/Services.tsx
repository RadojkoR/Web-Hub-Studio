// import Hero from "../Components/Hero/Hero";
import { SecondaryHeader } from "../Components/Layout"
import { useTranslation } from "react-i18next";
import { SeoOptimizationCard, WebDesignCard, WebDevelopmentCard} from "../Components/Services";
import { Outlet } from "react-router-dom";

function Services() {
  const { t } = useTranslation("services");
  const servicesT = t("services.servicesHeaderTitle");
  // const servicesHeroTitle = t("services.hero.title");
  // const servicesHeroPara = t("services.hero.para");
  
  const servicesHeader = [
    {
      headerBgClass: "servicesHeader ",
      headerSlogan: servicesT,
    },
  ];
  // const servicesHero = [
  //   {
  //     title: servicesHeroTitle,
  //     para: servicesHeroPara,
  //   },
  // ];
  // console.log(servicesHero);
  
  return (
    <>
      <SecondaryHeader headerInfo={servicesHeader} />
      <section className="mainProjects bg-slate-100">
        <article className="mainServices md:container-80 px-5 md:px-0 mx-auto">
          <h2 className="text-5xl text-gray-700 font-bold pt-20 pb-14">
            {t("services.ourServicesTitle")}
          </h2>
          <p className="text-xl sm:text-2xl text-gray-700 font-semibold pb-20">
            {t("services.ourServicesPara")}
          </p>
        </article>
        <WebDevelopmentCard />
        <SeoOptimizationCard />
        <WebDesignCard />
      </section>
      <Outlet />
    </>
  );
}

export default Services