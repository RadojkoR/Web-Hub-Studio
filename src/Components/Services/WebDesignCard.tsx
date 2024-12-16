import { useTranslation } from "react-i18next";
import { GiPalette } from "react-icons/gi";
import { LinkBtn } from "../Buttons";
import { Service } from "../../types/interfaces";


function WebDesignCard() {
  const { t } = useTranslation("services");
  const servicesTitle = t("services.webDesignCard.title");
  const learnMoreBtnLink = "/services/web-design";
  const learnMoreBtnTxt = t("services.learnMoreBtn");
  const services = t("services.webDesignCard.services", {
    returnObjects: true,
  }) as Service;
  return (
    <section className="seoOptimizationCard">
      <article className="flex flex-col justify-between h-full p-3 bg-orange-50 shadow-lg rounded-lg">
        <GiPalette className="mx-auto text-5xl text-gradient-r text-violet-500" />
        <h2 className="mx-auto my-2 text-2xl font-bold text-gray-700">
          {servicesTitle}
        </h2>
        <p className="text-lg text-gray-700 mb-3 border-b-2 pb-3 border-violet-500">
          {t("services.webDesignCard.description")}
        </p>
        <ul className="list-disc marker:text-violet-500 px-3 mb-8">
          {Array.isArray(services) &&
            services.map((item, index) => (
              <li key={index} className="text-gray-700 text-lg ">
                {item.name}
              </li>
            ))}
        </ul>
        <div className="mx-auto">
          <LinkBtn btnLink={learnMoreBtnLink} btnTxt={learnMoreBtnTxt} />
        </div>
      </article>
    </section>
  );
}

export default WebDesignCard