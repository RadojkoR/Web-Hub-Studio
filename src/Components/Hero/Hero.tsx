import { useTranslation } from "react-i18next";
import { LinkBtn } from "../Buttons";

interface serviceHero {
    title: string,
    para: string
}

interface HeroProps {
  heroT: serviceHero[];
}

function Hero({ heroT }: HeroProps) {
  const { t } = useTranslation("heroHome");
  const heroTitle = heroT[0].title;
  const heroPara = heroT[0].para
  const contacBtnLink = "/contact";
  const contacBtnTxt = t("heroHome.contactUsBtn");

  return (
    <section className="heroHome">
      <article className="md:container-80 px-4 md:px-0 xl:w-4/5 pt-14 flex flex-col">
        <h2 className="text-center text-gray-50 text-2xl xxs:text-3xl sm:text-4xl font-bold uppercase tracking-wide">
          {heroTitle}
        </h2>
        <p className="text-center text-gray-50 tracking-wide text-2xl font-semibold pt-5">
          {heroPara}
        </p>
        <div className="mx-auto mt-10 mb-10">
          
          <LinkBtn btnLink={contacBtnLink} btnTxt={contacBtnTxt} />
        </div>
      </article>
    </section>
  );
}

export default Hero