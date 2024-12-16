import { useTranslation } from "react-i18next"
import { FaLaptopCode } from "react-icons/fa";
import { LinkBtn } from "../Buttons";
import { Service } from "../../types/interfaces";


function WebDevelopmentCard() {
  const { t } = useTranslation('services');
  const servicesTitle = t("services.webDevelopmentCard.title");
  const services = t("services.webDevelopmentCard.services", { returnObjects: true }) as Service;
  const learnMoreBtnLink = "/services/web-development";
  const learnMoreBtnTxt = t("services.learnMoreBtn");
  return (
    <section className="webDevelopmentCard flex h-full">
      <article className="flex flex-col justify-between p-3 bg-yellow-50 shadow-lg rounded-lg">
        <FaLaptopCode className="mx-auto text-5xl text-brandColor" />
        <h2 className="mx-auto my-2 text-2xl font-bold text-gray-700">
          {servicesTitle}
        </h2>
        <p className="text-lg text-gray-700 mb-3 border-b-2 border-brandColor pb-3">
          {t("services.webDevelopmentCard.description")}
        </p>
        <ul className="list-disc marker:text-brandColor px-3 mb-8">
          {Array.isArray(services) &&
            services.map((item, index) => (
              <li key={index} className="text-gray-700 text-lg ">
                {item.name}
              </li>
            ))}
        </ul>
        <div className=" mx-auto">
          <LinkBtn btnLink={learnMoreBtnLink} btnTxt={learnMoreBtnTxt} />
        </div>
      </article>
    </section>
  );
}

export default WebDevelopmentCard