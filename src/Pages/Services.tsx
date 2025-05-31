import { SecondaryHeader } from "../Components/Layout"
import { useTranslation } from "react-i18next";
// import {  WebDevelopmentCard } from "../Components/Services";
import { Outlet } from "react-router-dom";
import Hero from "../Components/Hero/Hero";
import { Helmet } from "react-helmet";
import { MetaProps } from "../types/interfaces";
import { ServicesCard } from "../Components/Cards";
import { ServiceCardType } from "../types/interfaces";

function Services({ metaTitle, metaDescription }: MetaProps) {
  const { t } = useTranslation("services");
  const servicesHeroTitle = t("services.hero.title");
  const servicesHeroPara = t("services.hero.para");
  const services = t("services.cards", {
    returnObjects: true,
  }) as ServiceCardType[];
  console.log(services);
  
  
  


  const servicesHeader = [
    {
      headerBgClass: "servicesHeader ",
      headerSloganBold: t("services.headerSloganBold"),
      headerSloganRegular: t("services.headerSloganRegular"),
    },
  ];
  const servicesHero = [
    {
      title: servicesHeroTitle,
      para: servicesHeroPara,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Web Hub Studio - {metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Helmet>
      <SecondaryHeader headerInfo={servicesHeader} />
      <Hero heroT={servicesHero} />
      <section className="mainProjects bg-slate-100 pt-16">
        <div className="md:container-80 px-5 md:px-0 ">
          <article className="mainServices mx-auto">
            <h2 className="text-5xl text-gray-700 font-bold border-l-4 border-brandColor ps-5">
              {t("services.ourServicesTitle")}
            </h2>
            <p className="text-xl sm:text-2xl text-gray-700 font-semibold mt-10 pb-20">
              {t("services.ourServicesPara")}
            </p>
          </article>
          <article className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 pb-20">
            {/* <div className="flex h-full">
              <WebDevelopmentCard />
            </div> */}
            {/* <SeoOptimizationCard />
            <WebDesignCard /> */}
            {Array.isArray(services) &&
              services.map((service, index) => (
                <ServicesCard key={index} service={service} />
              ))}
          </article>
        </div>
      </section>
      <Outlet />
    </>
  );
}

export default Services