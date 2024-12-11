import { useTranslation } from "react-i18next";

function WebDesign() {
    const { t } = useTranslation("services")
  return (
    <section className="webDesign text-gray-700 py-10">
      <div className="md:container-80 px-4 md:px-0">
        <h3 className="text-4xl font-bold ">{t("services.webDesign.title")}</h3>
        <p className="text-xl mt-5">{t("services.webDesign.para")}</p>

        <h4 className="text-2xl font-semibold mt-5 border-b-4 border-cyan-500 pb-2 w-fit">
          {t("services.webDesign.liElOneTitle")}
        </h4>
        <p className="text-xl mt-5 mb-10">
          {t("services.webDesign.liElOne")}
        </p>

        <h4 className="text-2xl font-semibold mt-5 border-b-4 border-cyan-500 pb-2 w-fit">
          {t("services.webDesign.liElTwoTitle")}
        </h4>
        <p className="text-xl mt-5 mb-10">
          {t("services.webDesign.liElTwo")}
        </p>

        <h4 className="text-2xl font-semibold mt-5 border-b-4 border-cyan-500 pb-2 w-fit">
          {t("services.webDesign.liElThreeTitle")}
        </h4>
        <p className="text-xl mt-5 mb-10">
          {t("services.webDesign.liElThree")}
        </p>

        <h4 className="text-2xl font-semibold mt-5 border-b-4 border-cyan-500 pb-2 w-fit">
          {t("services.webDesign.liElFourTitle")}
        </h4>
        <p className="text-xl mt-5 mb-10">
          {t("services.webDesign.liElFour")}
        </p>

        <p className="text-xl mt-5 mb-10 font-bold">
          {t("services.webDesign.lastPara")}
        </p>
      </div>
    </section>
  );
}

export default WebDesign