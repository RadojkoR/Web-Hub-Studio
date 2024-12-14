import { useTranslation } from "react-i18next";
import projectOneImg from "../../assets/Images/ProjectsPageImg/izoDecorGlassProjectOne.webp";
import projectTwoImg from "../../assets/Images/ProjectsPageImg/mesProjectImgOne.webp";
import { ViewLiveBtn } from "../Buttons";


function ProjectsSectionOne() {
    const { t } = useTranslation("projects");

    const btnMesLink = "https://www.mes.rs/";
    const btnIzoDecorGlassLink = "https://izodecorglass.rs";
    

  return (
    <section className="md:container-80 px-4 md:px-0">
      <h3 className="text-3xl text-gray-700 font-semibold mb-4">
        {t("projects.projectsSectionOne.title")}
      </h3>
      <p className="text-xl mb-7">{t("projects.projectsSectionOne.para")}</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-10">
        <article className="flex flex-col items-center justify-center bg-slate-300 shadow-lg rounded-lg">
          <img
            src={projectOneImg}
            className="py-5 px-3"
            alt="Image of project"
          />
          
          <ViewLiveBtn btnLink={btnIzoDecorGlassLink} />
        </article>
        <article className="flex flex-col items-center justify-center bg-blue-100 shadow-lg rounded-lg">
          <img
            src={projectTwoImg}
            className="py-5 px-3"
            alt="Image of project"
          />        
          <ViewLiveBtn btnLink={btnMesLink} />
        </article>
      </div>
    </section>
  );
}

export default ProjectsSectionOne