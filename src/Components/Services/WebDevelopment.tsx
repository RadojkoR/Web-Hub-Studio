import { useTranslation } from "react-i18next"

function WebDevelopment() {
    const { t } = useTranslation("services")
  return (
    <section className="webDevelopment my-10">
      <div className="container">
        <h3 className="text-4xl font-bold text-gray-700 pt-10">
          {t("services.webDevelopment.title")}
        </h3>
      </div>
    </section>
  );
}

export default WebDevelopment