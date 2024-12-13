import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { GiPalette } from "react-icons/gi";

interface Service {
  name: string;
}

function WebDesignCard() {
    const { t } = useTranslation("services");
    const servicesTitle = t("services.webDesignCard.title");
    const servicesLearnMoreBtn = t("services.learnMoreBtn");
    const services = t("services.webDesignCard.services", {
      returnObjects: true,
    }) as Service;
  return (
    <section className="seoOptimizationCard">
      <article className="border-2 flex flex-col h-full p-3 bg-orange-50">
        <GiPalette className="mx-auto text-5xl text-gradient-r text-violet-500" />
        <h2 className="mx-auto my-2 text-2xl font-bold text-gray-700">
          {servicesTitle}
        </h2>
        <p className="text-lg text-gray-700 mb-3 border-b-2 pb-3 border-green-500">
          {t("services.webDesignCard.description")}
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
          to={"/services/web-design"}
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

    // <section className="webDesignCard text-gray-700 md:container-80 px-4 md:px-0 py-10">
    //   <div className="px-10">
    //     <h3 className="text-3xl xxs:text-4xl font-bold ">
    //       {t("services.webDesign.title")}
    //     </h3>
    //     <p className="text-xl mt-5">{t("services.webDesign.para")}</p>

    //     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    //       <article className="p-5 bg-amber-200 shadow-lg rounded-lg mt-5">
    //         <h4 className="text-2xl font-semibold mt-5 border-b-4 border-cyan-500 pb-2 w-fit">
    //           {t("services.webDesign.liElOneTitle")}
    //         </h4>
    //         <p className="text-lg sm:text-xl mt-5 mb-10">
    //           {t("services.webDesign.liElOne")}
    //         </p>
    //       </article>

    //       <article className="p-5 bg-gray-200 shadow-lg rounded-lg mt-5">
    //         <h4 className="text-2xl font-semibold mt-5 border-b-4 border-cyan-500 pb-2 w-fit">
    //           {t("services.webDesign.liElTwoTitle")}
    //         </h4>
    //         <p className="text-lg sm:text-xl mt-5 mb-10">
    //           {t("services.webDesign.liElTwo")}
    //         </p>
    //       </article>

    //       <article className="p-5 bg-teal-200 shadow-lg rounded-lg mt-5">
    //         <h4 className="text-2xl font-semibold mt-5 border-b-4 border-cyan-500 pb-2 w-fit">
    //           {t("services.webDesign.liElThreeTitle")}
    //         </h4>
    //         <p className="text-lg sm:text-xl mt-5 mb-10">
    //           {t("services.webDesign.liElThree")}
    //         </p>
    //       </article>

    //       <article className="p-5 bg-orange-50 shadow-lg rounded-lg mt-5">
    //         <h4 className="text-2xl font-semibold mt-5 border-b-4 border-cyan-500 pb-2 w-fit">
    //           {t("services.webDesign.liElFourTitle")}
    //         </h4>
    //         <p className="text-lg sm:text-xl mt-5 mb-10">
    //           {t("services.webDesign.liElFour")}
    //         </p>
    //       </article>
    //     </div>

    //     <p className="text-lg sm:text-xl mt-5 mb-10 pt-10 font-bold">
    //       {t("services.webDesign.lastPara")}
    //     </p>
    //   </div>
    // </section>
  );
}

export default WebDesignCard