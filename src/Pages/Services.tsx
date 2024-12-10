import Hero from "../Components/Hero/Hero";
import { SecondaryHeader } from "../Components/Layout"
import { useTranslation } from "react-i18next";
import { OurServices } from "../Components/Services";

function Services() {
  const { t } = useTranslation("services");
  const servicesT = t("services.servicesHeaderTitle");
  const servicesHeroTitle = t("services.hero.title");
  const servicesHeroPara = t("services.hero.para");
  
  const servicesHeader = [
    {
      headerBgClass: "servicesHeader ",
      headerSlogan: servicesT,
    },
  ];
  const servicesHero = [
    {
      title: servicesHeroTitle,
      para: servicesHeroPara,
    },
  ];
  // console.log(servicesHero);
  
  return (
    <>
      <SecondaryHeader servicesHeader={servicesHeader} />
      <section className="mainServices bg-slate-100">
        <Hero heroT={servicesHero}/>
        <OurServices />
      </section>
    </>
  );
}

export default Services