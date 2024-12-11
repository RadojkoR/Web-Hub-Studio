import { useTranslation } from "react-i18next"

function WebDevelopment() {
    const { t } = useTranslation("services")
  return (
    <section className="webDevelopment mt-10">
      <div className="md:container-80 px-4 md:px-0">
        <h3 className="text-3xl xxs:text-4xl font-bold text-gray-700 pt-10">
          {t("services.webDevelopment.title")}
        </h3>
        <p className="text-lg sm:text-xl text-gray-700 mt-5">
          {t("services.webDevelopment.paraOne")}
        </p>
        <p className="text-lg sm:text-xl text-gray-700 mt-5">
          {t("services.webDevelopment.paraTwo")}
        </p>
        <h4 className="text-2xl font-semibold text-gray-700 mt-5 border-b-4 border-cyan-500 pb-2 w-fit">
          {t("services.webDevelopment.liElOneTitle")}
        </h4>
        <p className="text-lg sm:text-xl text-gray-700 mt-5 mb-10">
          {t("services.webDevelopment.liElOne")}
        </p>
        <h4 className="text-2xl font-semibold text-gray-700 mt-5 border-b-4 border-cyan-500 pb-2 w-fit">
          {t("services.webDevelopment.liElTwoTitle")}
        </h4>
        <p className="text-lg sm:text-xl text-gray-700 mt-5 mb-10">
          {t("services.webDevelopment.liElTwo")}
        </p>
        <p className="text-lg sm:text-xl text-gray-700 mt-5 pb-20 font-bold">
          {t("services.webDevelopment.lastPara")}
        </p>
      </div>
    </section>
  );
}

export default WebDevelopment