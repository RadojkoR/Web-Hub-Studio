
import { useTranslation } from "react-i18next";
import WebDevelopment from "./WebDevelopment";

function OurServices() {
    const { t } = useTranslation("services")
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-5xl text-gray-700 font-bold">
          {t("services.ourServicesTitle")}
        </h2>
        <p className="text-2xl font-semibold text-gray-700 mt-10">
          {t("services.ourServicesPara")}
        </p>
      </div>
      <article>
        <WebDevelopment />
      </article>
    </section>
  );
}

export default OurServices