
import { useTranslation } from "react-i18next";
import { SeoOptimization, WebDesign, WebDevelopment } from "./";

function OurServices() {
    const { t } = useTranslation("services")
  return (
    <section className="pt-20">
      <div className="md:container-80 px-4 md:px-0 pb-20">
        <h2 className="text-5xl text-gray-700 font-bold">
          {t("services.ourServicesTitle")}
        </h2>
        <p className="text-2xl font-semibold text-gray-700 mt-10">
          {t("services.ourServicesPara")}
        </p>
      </div>
      <article>
        <WebDevelopment />
        <SeoOptimization />
        <WebDesign />
      </article>
    </section>
  );
}

export default OurServices