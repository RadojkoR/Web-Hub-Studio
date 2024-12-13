import { useTranslation } from "react-i18next"
import { FaLaptopCode } from "react-icons/fa";
import { Link } from "react-router";

interface Service {
  name: string;
}

function WebDevelopmentCard() {
    const { t } = useTranslation('services');
    const servicesTitle = t("services.webDevelopmentCard.title");
    const servicesLearnMoreBtn = t("services.learnMoreBtn");
    const services = t("services.webDevelopmentCard.services", {returnObjects: true}) as Service;
  return (
    <section className="webDevelopmentCard flex h-full">
      <article className="border-2 flex flex-col p-5 bg-yellow-50">
        <FaLaptopCode className="mx-auto text-5xl text-brandColor" />
        <h2 className="mx-auto my-2 text-2xl font-bold text-gray-700">
          {servicesTitle}
        </h2>
        <p className="text-lg text-gray-700 mb-3 border-b-2 pb-3">
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

        <Link
          to={"/services/web-development"}
          className=" bg-cyan-300 
            hover:bg-cyan-700 
            focus:bg-cyan-700 
            hover:text-gray-200 
            focus:text-gray-200 
            transition-all
            duration-300
            ease-in-out
            w-36 
            text-sm
            xxs:text-base 
            font-bold 
            text-gray-700 
            px-5 
            py-2 
            mt-auto
            mx-auto
            flex
            justify-center
            items-center"
        >
          {servicesLearnMoreBtn}
        </Link>
      </article>
    </section>
  );
}

export default WebDevelopmentCard