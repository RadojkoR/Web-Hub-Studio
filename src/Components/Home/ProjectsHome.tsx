import { useTranslation } from "react-i18next"

function ProjectsHome() {
    const {t} = useTranslation();
  return (
    <section className="ourProjects bg-slate-100">
      <div className="container">
        <h2 className="text-4xl font-bold text-gray-600 text-center pt-10">{t("ourProjects")}</h2>
      </div>
    </section>
  );
}

export default ProjectsHome