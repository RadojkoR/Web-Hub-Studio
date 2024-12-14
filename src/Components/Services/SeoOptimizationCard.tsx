import { useTranslation } from "react-i18next";
import { FaChartLine } from "react-icons/fa";
import { LinkBtn } from "../Buttons";


interface Service {
  name: string;
}

function SeoOptimizationCard() {
    const { t } = useTranslation("services");
    const servicesTitle = t("services.seoOptimizationCard.title");
    const learnMoreBtnLink = "/services/web-development";
    const learnMoreBtnTxt = t("services.learnMoreBtn");
    const services = t("services.seoOptimizationCard.services", {
      returnObjects: true,
    }) as Service;
  return (
    <section className="seoOptimizationCard flex h-full">
      <article className="flex flex-col justify-between p-3 bg-blue-100 shadow-lg rounded-lg">
        <FaChartLine className="mx-auto text-5xl text-green-500" />
        <h2 className="mx-auto my-2 text-2xl font-bold text-gray-700">
          {servicesTitle}
        </h2>
        <p className="text-lg text-gray-700 mb-3 border-b-2 pb-3 border-green-500">
          {t("services.seoOptimizationCard.description")}
        </p>
        <ul className="list-disc marker:text-green-500 px-3 mb-8">
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

export default SeoOptimizationCard