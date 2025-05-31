// import { useTranslation } from "react-i18next";
import { GiPalette } from "react-icons/gi";
import { FaLaptopCode, FaChartLine, FaServer } from "react-icons/fa";
import { CardProps } from "../../types/interfaces";
import { LinkBtn } from "../Buttons";

  const iconMap = {
    webDev: FaLaptopCode,
    webDesign: GiPalette,
    seo: FaChartLine,
    hosting: FaServer,
  };

function ServicesCard({service}: CardProps) { 
    console.log(service);
    const serviceTitle = service.title
    const ServiceDescription = service.description;
    const learnMoreBtnLink = service.learnMoreBtnLink;
    const learnMoreBtnTxt = service.learnMoreBtnTxt;
    const cardBgColor = service.cardBgColor;
    const cardIconColor = service.cardIconColor;
    const services = service.services
    
    const IconComponent = iconMap[service.icon as keyof typeof iconMap];
       
  return (
    <section className={`seoOptimizationCard flex h-full`}>
      <article
        className={`flex flex-col justify-between p-3 ${cardBgColor} shadow-lg rounded-lg`}
      >
        {IconComponent ? (
          <IconComponent
            className={`mx-auto text-5xl text-${cardIconColor} `}
          />
        ) : (
          <div className="text-center text-red-500">Ikonica nije pronađena</div>
        )}
        <h2 className="mx-auto my-2 text-2xl font-bold text-gray-700">
          {serviceTitle}
        </h2>
        <p
          className={`text-lg text-gray-700 mb-3 border-b-2 pb-3 border-${cardIconColor}`}
        >
          {ServiceDescription}
        </p>
        <ul className={`list-disc marker:text-${cardIconColor} px-3 mb-8`}>
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

export default ServicesCard;
