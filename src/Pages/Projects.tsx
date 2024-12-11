import { useTranslation } from "react-i18next";
import { SecondaryHeader } from "../Components/Layout";
import projectOneImg from "../assets/Images/ProjectsPageImg/izoDecorGlassProjectOne.webp";


function Projects() {
  const { t } = useTranslation("projects");
  const projectsT = t("projects.projectsHeaderTitle");

  const servicesHeader = [
    {
      headerBgClass: "projectsHeader",
      headerSlogan: projectsT,
    },
  ];

  return (
    <>
      <SecondaryHeader headerInfo={servicesHeader} />
      <section className="mainServices bg-slate-100">
        <article className="md:container-80 px-5 md:px-0 mx-auto">
          <h2 className="text-5xl text-gray-700 font-bold pt-20 pb-14">
            {t("projects.ourProjectsTitle")}
          </h2>
          <p className="text-xl sm:text-2xl text-gray-700 font-semibold pb-20">
            {t("projects.para")}
          </p>
        </article>
        <section className="md:container-80">
          <article>
            <img src={projectOneImg} alt="Image of project" />
          </article>
          <article>
            <img src={projectOneImg} alt="Image of project" />
          </article>
        </section>
      </section>
    </>
  );
}

export default Projects