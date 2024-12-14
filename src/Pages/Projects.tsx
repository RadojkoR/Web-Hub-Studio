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
      <section className="mainProjects bg-slate-100 pt-16 pb-20">
        <article className="md:container-80 px-5 md:px-0 mx-auto">
          <h2 className="text-5xl text-gray-700 font-bold border-l-4 border-brandColor ps-5">
            {t("projects.ourProjectsTitle")}
          </h2>
          <p className="text-xl sm:text-2xl text-gray-700 font-semibold mt-10 pb-20">
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