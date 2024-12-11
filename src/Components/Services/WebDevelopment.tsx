import { useTranslation } from "react-i18next"

function WebDevelopment() {
    const { t } = useTranslation("services")
  return (
    <section className="webDevelopment mb-10">
      <div className="px-10">
        <h3 className="text-3xl xxs:text-4xl font-bold text-gray-700 pt-10">
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
        </p>
      </div>
    </section>
  );
}

export default WebDevelopment