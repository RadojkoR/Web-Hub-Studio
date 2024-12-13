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
    <section className="webDevelopment md:container-80 px-4 md:px-0">
      <div className="px-10 grid grid-cols-1 md:grid-cols-3 gap-6 pb-20">
        <article className="border-2 flex flex-col p-5 bg-yellow-50">
          <FaLaptopCode className="mx-auto text-5xl text-brandColor" />
          <h2 className="mx-auto my-2 text-2xl font-bold text-gray-700">
            {servicesTitle}
          </h2>
          <ul className="list-disc marker:text-brandColor px-3">
            {Array.isArray(services) &&
              services.map((item, index) => (
                <li key={index} className="text-gray-700 text-lg ">
                  {item.name}
                </li>
              ))}
          </ul>

          <p className="mt-4 text-lg text-gray-700 font-semibold">{t("services.webDevelopmentCard.lastPara")}</p>

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
            mt-7
            mx-auto
            flex
            justify-center
            items-center"
          >
            {servicesLearnMoreBtn}
          </Link>
        </article>

        {/* <h3 className="text-3xl xxs:text-4xl font-bold text-gray-700 pt-10">
          {t("services.webDevelopment.title")}
        </h3>
        <p className="text-lg sm:text-xl text-gray-700 mt-5">
          {t("services.webDevelopment.paraOne")}
        </p>
        <p className="text-lg sm:text-xl text-gray-700 mt-5">
          {t("services.webDevelopment.paraTwo")}
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <article className="p-5 bg-yellow-50 shadow-lg rounded-lg mt-5">
            <h4 className="text-2xl font-semibold text-gray-700 mt-5 border-b-4 border-cyan-500 pb-2 w-fit">
              {t("services.webDevelopment.liElOneTitle")}
            </h4>
            <p className="text-lg sm:text-xl text-gray-700 mt-5 mb-10">
              {t("services.webDevelopment.liElOne")}
            </p>
          </article>
          <article className="p-5 bg-orange-50 shadow-lg rounded-lg mt-5">
            <h4 className="text-2xl font-semibold text-gray-700 mt-5 border-b-4 border-cyan-500 pb-2 w-fit">
              {t("services.webDevelopment.liElTwoTitle")}
            </h4>
            <p className="text-lg sm:text-xl text-gray-700 mt-5 mb-10">
              {t("services.webDevelopment.liElTwo")}
            </p>
          </article>
        </div>

        <p className="text-lg sm:text-xl text-gray-700 pt-10 pb-10 font-bold">
          {t("services.webDevelopment.lastPara")}
        </p> */}
      </div>
    </section>
  );
}

export default WebDevelopmentCard