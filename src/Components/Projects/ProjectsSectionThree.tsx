import { useTranslation } from "react-i18next";
import projectOneImg from "../../assets/Images/ProjectsPageImg/interiorDProjects.webp";
import projectTwoImg from "../../assets/Images/ProjectsPageImg/businesWebOne.webp";
import { ViewLiveBtn } from "../Buttons";

function ProjectsSectionThree() {
    const { t } = useTranslation("projects");

    const btnInteriorDesignLink = "https://interiordesign-or.netlify.app/";
    const btnCoachingLink = "https://coachingjs.netlify.app/";
  return (
    <section className="md:container-80 px-4 md:px-0 pt-14 border-b-2 border-brandColor">
      <h3 className="text-3xl text-gray-700 font-semibold mb-4 border-l-4 border-brandColor ps-4">
        {t("projects.projectsSectionThree.title")}
      </h3>
      <p className="text-xl mb-7">{t("projects.projectsSectionThree.para")}</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-10">
        <article className="flex flex-col items-center justify-center bg-orange-100 shadow-lg rounded-lg">
          <img
            src={projectOneImg}
            className="py-5 px-3"
            alt="Image of project"
          />
          <ViewLiveBtn btnLink={btnInteriorDesignLink} />
        </article>
        <article className="flex flex-col items-center justify-center bg-violet-200 shadow-lg rounded-lg">
          <img
            src={projectTwoImg}
            className="py-5 px-3"
            alt="Image of project"
          />
          <ViewLiveBtn btnLink={btnCoachingLink} />
        </article>
      </div>
    </section>
  );
}

export default ProjectsSectionThree;
