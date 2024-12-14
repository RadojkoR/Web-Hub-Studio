import { useTranslation } from "react-i18next";
import projectOneImg from "../../assets/Images/ProjectsPageImg/travelsProjectsImg.webp";
import { ViewLiveBtn } from "../Buttons";

function ProjectsSectionTwo() {
    const { t } = useTranslation("projects");
    const btnTravelsWithDreaLink = "https://travelswithdrea.com/";
  return (
    <section className="md:container-80 px-4 md:px-0 pt-14">
      <h3 className="text-3xl text-gray-700 font-semibold mb-4">
        {t("projects.projectsSectionTwo.title")}
      </h3>
      <p className="text-xl mb-7">{t("projects.projectsSectionTwo.para")}</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-10">
        <article className="flex flex-col items-center justify-center bg-blue-100 shadow-lg rounded-lg">
          <img
            src={projectOneImg}
            className="py-5 px-3"
            alt="Image of project"
          />
          <ViewLiveBtn btnLink={btnTravelsWithDreaLink} />
        </article>
      </div>
    </section>
  );
}

export default ProjectsSectionTwo;
