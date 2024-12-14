import { useTranslation } from "react-i18next";
import { LinkBtn } from "../Buttons";

function HeroHome() {
    const {t} = useTranslation("heroHome");
    const servicesBtnTxt = t("heroHome.servicesBtn");
    const contactBtnTxt = t("heroHome.contactUsBtn");
  return (
    <section className="heroHome">
      <article className="md:container-80 px-4 md:px-0 xl:w-4/5 pt-14 flex flex-col">
        <h2 className="text-center text-gray-50 text-2xl xxs:text-3xl sm:text-4xl font-bold uppercase tracking-wide">
          {t("heroHome.heading")}
        </h2>
        <p className="text-center text-gray-50 tracking-wide text-xl font-semibold pt-5">
          <span className="font-bold">Web Hub Studio</span>
          {t("heroHome.para")}
        </p>
        <div className="mx-auto flex justify-between items-center gap-10 mt-10 mb-10">
          <LinkBtn btnLink="/services" btnTxt={servicesBtnTxt} />
          <LinkBtn btnLink="/contact" btnTxt={contactBtnTxt} />
        </div>
      </article>
    </section>
  );
}

export default HeroHome