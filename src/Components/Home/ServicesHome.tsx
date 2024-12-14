import { useTranslation } from "react-i18next";
import AOS from "aos"
import { FaCode, FaSearch } from "react-icons/fa";
import { FaPaintbrush } from "react-icons/fa6";
import { useEffect } from "react";
import { LearnMoreBtn } from "../Buttons";


function ServicesHome() {
    const { t } = useTranslation();

    const learnMoreServicesBtnLink = "/services";
    
    useEffect(() => {
        AOS.init({duration: 1000})
    }, [])
  return (
    <section className="servicesHome py-20">
      <div className="md:container-80 px-4 md:px-0 flex flex-col">
        <h2 className="text-4xl font-bold text-gray-100 text-center">
          {t("servicesHome.title")}
        </h2>
        <p className="text-2xl font-semibold text-gray-100 text-center mt-5">
          {t("servicesHome.para")}
        </p>
        <article className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div
            className=" flex flex-col items-center text-gray-700 bg-blue-100 p-5"
            data-aos="flip-up"
            data-aos-delay="100"
          >
            <FaCode className="text-5xl text-blue-500" />
            <h3 className="text-2xl font-bold mt-3 mb-5">
              {t("servicesHome.webDevelopmentCard.cardTitle")}
            </h3>
            <p className="text-lg sm:text-xl font-semibold mb-5">
              {t("servicesHome.webDevelopmentCard.cardPara")}
            </p>
          </div>

          <div
            className=" flex flex-col items-center text-gray-700 bg-green-100 p-5"
            data-aos="flip-up"
            data-aos-delay="200"
          >
            <FaSearch className="text-5xl text-green-600" />
            <h3 className="text-2xl font-bold mt-3 mb-5">
              {t("servicesHome.seoOptimizationCard.cardTitle")}
            </h3>
            <p className="text-lg sm:text-xl font-semibold mb-5">
              {t("servicesHome.seoOptimizationCard.cardPara")}
            </p>
          </div>
          <div
            className=" flex flex-col items-center text-gray-700 bg-purple-50 p-5"
            data-aos="flip-up"
            data-aos-delay="300"
          >
            <FaPaintbrush className="text-5xl text-purple-600" />
            <h3 className="text-2xl font-bold mt-3 mb-5">
              {t("servicesHome.webDesignCard.cardTitle")}
            </h3>
            <p className="text-lg sm:text-xl font-semibold mb-5">
              {t("servicesHome.webDesignCard.cardPara")}
            </p>
          </div>
        </article>
        
        <LearnMoreBtn btnLink={learnMoreServicesBtnLink}/>
      </div>
    </section>
  );
}

export default ServicesHome