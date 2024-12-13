import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FaChartLine } from "react-icons/fa";


interface Service {
  name: string;
}

function SeoOptimizationCard() {
    const { t } = useTranslation("services");
    const servicesTitle = t("services.seoOptimizationCard.title");
    const servicesLearnMoreBtn = t("services.learnMoreBtn");
    const services = t("services.seoOptimizationCard.services", {
      returnObjects: true,
    }) as Service;
  return (
    <section className="seoOptimizationCard flex h-full">
      <article className="border-2 flex flex-col p-3 bg-blue-100">
        <FaChartLine className="mx-auto text-5xl text-green-500" />
        <h2 className="mx-auto my-2 text-2xl font-bold text-gray-700">
          {servicesTitle}
        </h2>
        <p className="text-lg text-gray-700 mb-3 border-b-2 pb-3 border-green-500">
          {t("services.seoOptimizationCard.description")}
        </p>
        <ul className="list-disc marker:text-brandColor px-3 mb-8">
          {Array.isArray(services) &&
            services.map((item, index) => (
              <li key={index} className="text-gray-700 text-lg ">
                {item.name}
              </li>
            ))}
        </ul>

        {/* <p className="mt-4 text-lg text-gray-700 font-semibold">
          {t("services.webDevelopmentCard.lastPara")}
        </p> */}

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

    // <section className="seoOptimizationCard md:container-80 px-4 md:px-0 text-gray-700 py-10 pt-16">
    //   <div className="px-10">
    //     <h3 className="text-3xl xxs:text-4xl font-bold ">
    //       {t("services.seoOptimization.title")}
    //     </h3>
    //     <p className="text-lg sm:text-xl mt-5">
    //       {t("services.seoOptimization.para")}
    //     </p>

    //     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    //       <article className="p-5 bg-blue-100 shadow-lg rounded-lg mt-5">
    //         <h4 className="text-2xl font-semibold mt-5 border-b-4 border-cyan-500 pb-2 w-fit">
    //           {t("services.seoOptimization.liElOneTitle")}
    //         </h4>
    //         <p className="text-lg sm:text-xl mt-5 mb-10">
    //           {t("services.seoOptimization.liElOne")}
    //         </p>
    //       </article>

    //       <article className="p-5 bg-yellow-100 shadow-lg rounded-lg mt-5">
    //         <h4 className="text-2xl font-semibold mt-5 border-b-4 border-cyan-500 pb-2 w-fit">
    //           {t("services.seoOptimization.liElTwoTitle")}
    //         </h4>
    //         <p className="text-lg sm:text-xl mt-5 mb-10">
    //           {t("services.seoOptimization.liElTwo")}
    //         </p>
    //       </article>

    //       <article className="p-5 bg-orange-100 shadow-lg rounded-lg mt-5">
    //         <h4 className="text-2xl font-semibold mt-5 border-b-4 border-cyan-500 pb-2 w-fit">
    //           {t("services.seoOptimization.liElThreeTitle")}
    //         </h4>
    //         <p className="text-lg sm:text-xl mt-5 mb-10">
    //           {t("services.seoOptimization.liElThree")}
    //         </p>
    //       </article>
    //       <article className="p-5 bg-purple-100 shadow-lg rounded-lg mt-5">
    //         <h4 className="text-2xl font-semibold mt-5 border-b-4 border-cyan-500 pb-2 w-fit">
    //           {t("services.seoOptimization.liElFourTitle")}
    //         </h4>
    //         <p className="text-lg sm:text-xl mt-5 mb-10">
    //           {t("services.seoOptimization.liElFour")}
    //         </p>
    //       </article>
    //     </div>

    //     <h4 className="text-2xl font-semiboldmt-5 border-b-4 border-cyan-500 pb-2 w-fit mt-8">
    //       {t("services.seoOptimization.titleTwo")}
    //     </h4>
    //     <p className="text-lg sm:text-xl mt-5 mb-10 font-bold">
    //       {t("services.seoOptimization.lastPara")}
    //     </p>
    //   </div>
    // </section>
  );
}

export default SeoOptimizationCard