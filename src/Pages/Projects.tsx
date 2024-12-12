import { useTranslation } from "react-i18next";
import { SecondaryHeader } from "../Components/Layout";
import { ProjectsSectionOne, ProjectsSectionThree, ProjectsSectionTwo } from "../Components/Projects";


function Projects() {
  const { t } = useTranslation("projects");
  const projectsT = t("projects.projectsHeaderTitle");

  const projectsHeader = [
    {
      headerBgClass: "projectsHeader",
      headerSlogan: projectsT,
    },
  ];

  return (
    <>
      <SecondaryHeader headerInfo={projectsHeader} />
      <section className="mainProjects bg-slate-100">
        <article className="md:container-80 px-5 md:px-0 mx-auto">
          <h2 className="text-5xl text-gray-700 font-bold pt-20 pb-14">
            {t("projects.ourProjectsTitle")}
          </h2>
          <p className="text-xl sm:text-2xl text-gray-700 font-semibold pb-20">
            {t("projects.para")}
          </p>
        </article>
        <ProjectsSectionOne />
        <ProjectsSectionTwo />
        <ProjectsSectionThree />
      </section>
    </>
  );
}

export default Projects