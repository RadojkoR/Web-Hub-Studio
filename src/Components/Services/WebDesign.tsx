import { useTranslation } from "react-i18next";

function WebDesign() {
    const { t } = useTranslation("services")
  return (
    <section className="webDesign text-gray-700 py-10">
      <div className="px-10">
        <h3 className="text-3xl xxs:text-4xl font-bold ">
          {t("services.webDesign.title")}
        </h3>
        <p className="text-xl mt-5">{t("services.webDesign.para")}</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <article className="p-5 bg-amber-200 shadow-lg rounded-lg mt-5">
            <h4 className="text-2xl font-semibold mt-5 border-b-4 border-cyan-500 pb-2 w-fit">
              {t("services.webDesign.liElOneTitle")}
            </h4>
            <p className="text-lg sm:text-xl mt-5 mb-10">
              {t("services.webDesign.liElOne")}
            </p>
          </article>

          <article className="p-5 bg-gray-200 shadow-lg rounded-lg mt-5">
            <h4 className="text-2xl font-semibold mt-5 border-b-4 border-cyan-500 pb-2 w-fit">
              {t("services.webDesign.liElTwoTitle")}
            </h4>
            <p className="text-lg sm:text-xl mt-5 mb-10">
              {t("services.webDesign.liElTwo")}
            </p>
          </article>

          <article className="p-5 bg-teal-200 shadow-lg rounded-lg mt-5">
            <h4 className="text-2xl font-semibold mt-5 border-b-4 border-cyan-500 pb-2 w-fit">
              {t("services.webDesign.liElThreeTitle")}
            </h4>
            <p className="text-lg sm:text-xl mt-5 mb-10">
              {t("services.webDesign.liElThree")}
            </p>
          </article>

          <article className="p-5 bg-orange-50 shadow-lg rounded-lg mt-5">
            <h4 className="text-2xl font-semibold mt-5 border-b-4 border-cyan-500 pb-2 w-fit">
              {t("services.webDesign.liElFourTitle")}
            </h4>
            <p className="text-lg sm:text-xl mt-5 mb-10">
              {t("services.webDesign.liElFour")}
            </p>
          </article>
        </div>

        <p className="text-lg sm:text-xl mt-5 mb-10 pt-10 font-bold">
          {t("services.webDesign.lastPara")}
        </p>
      </div>
    </section>
  );
}

export default WebDesign