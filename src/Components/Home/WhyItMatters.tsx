import { useTranslation } from "react-i18next";
import AOS from "aos";
import { FaStar } from "react-icons/fa";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { FaSmile } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { FaCoins } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { useEffect } from "react";

function WhyItMatters() {
    const { t } = useTranslation("whyItMatters");

    useEffect(() => {
      AOS.init({duration: 1000})
    }, [])
  return (
    <section className="bg-slate-100 py-20">
      <div className="md:container-80 px-4 md:px-0">
        <h2 className="text-center text-2xl xxs:text-3xl xs:text-4xl sm:text-5xl font-bold text-cyan-800 mb-12">
          {t("whyItMatters.title")}
        </h2>
        <p className="text-lg sm:text-2xl text-gray-700">
          {t("whyItMatters.para")}
        </p>
        <p className="text-lg sm:text-2xl font-bold text-blue-900 mt-6 mb-5">
          {t("whyItMatters.titleTwo")}
        </p>
        <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            className="flex flex-col items-center p-7 bg-amber-50 shadow-lg rounded-lg"
            data-aos="flip-right"
            data-aos-delay="100"
          >
            <FaStar className="text-5xl text-amber-400" />
            <h3 className="text-2xl font-bold text-gray-700 mt-3 mb-5">
              {t("whyItMatters.firstImpressions")}
            </h3>
            <p className="text-lg sm:text-xl text-gray-700">
              {t("whyItMatters.liElOne")}
            </p>
          </div>

          <div
            className="flex flex-col items-center p-7 bg-blue-50 shadow-lg rounded-lg"
            data-aos="flip-right"
            data-aos-delay="250"
          >
            <IoShieldCheckmarkSharp className="text-5xl text-blue-500" />
            <h3 className="text-2xl font-bold text-gray-700 mt-3 mb-5">
              {t("whyItMatters.buildsCredibility")}
            </h3>
            <p className="text-lg sm:text-xl text-gray-700">
              {t("whyItMatters.liElTwo")}
            </p>
          </div>

          <div
            className="flex flex-col items-center p-7 bg-orange-50 shadow-lg rounded-lg"
            data-aos="flip-right"
            data-aos-delay="400"
          >
            <FaSmile className="text-5xl text-yellow-500" />
            <h3 className="text-2xl font-bold text-gray-700 mt-3 mb-5">
              {t("whyItMatters.customerExperience")}
            </h3>
            <p className="text-lg sm:text-xl text-gray-700">
              {t("whyItMatters.liElThree")}
            </p>
          </div>

          <div
            className="flex flex-col items-center p-7 bg-green-50 shadow-lg rounded-lg"
            data-aos="flip-right"
            data-aos-delay="100"
          >
            <FaChartLine className="text-5xl text-green-500" />
            <h3 className="text-2xl font-bold text-gray-700 mt-3 mb-5">
              {t("whyItMatters.searchEngineVisibility")}
            </h3>
            <p className="text-lg sm:text-xl text-gray-700">
              {t("whyItMatters.liElFour")}
            </p>
          </div>

          <div
            className="flex flex-col items-center p-7 bg-cyan-50 shadow-lg rounded-lg"
            data-aos="flip-right"
            data-aos-delay="250"
          >
            <FaCoins className="text-5xl text-amber-400" />
            <h3 className="text-2xl font-bold text-gray-700 mt-3 mb-5">
              {t("whyItMatters.increasesConversions")}
            </h3>
            <p className="text-lg sm:text-xl text-gray-700">
              {t("whyItMatters.liElFive")}
            </p>
          </div>

          <div
            className="flex flex-col items-center p-7 bg-gray-200 shadow-lg rounded-lg"
            data-aos="flip-right"
            data-aos-delay="400"
          >
            <FaMobileAlt className="text-5xl text-gray-500" />
            <h3 className="text-2xl font-bold text-gray-700 mt-3 mb-5">
              {t("whyItMatters.responsiveDesign")}
            </h3>
            <p className="text-lg sm:text-xl text-gray-700">
              {t("whyItMatters.liElSix")}
            </p>
          </div>
        </article>
        <p className="mt-16 text-2xl font-bold text-cyan-700">
          {t("whyItMatters.lastPara")}
        </p>
      </div>
    </section>
  );
}

export default WhyItMatters