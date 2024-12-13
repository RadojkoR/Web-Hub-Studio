import { useTranslation } from "react-i18next";
import projectOneImg from "../../assets/Images/ProjectsPageImg/izoDecorGlassProjectOne.webp";
import projectTwoImg from "../../assets/Images/ProjectsPageImg/mesProjectImgOne.webp";


function ProjectsSectionOne() {
    const { t } = useTranslation("projects");
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
          <a
            href="https://izodecorglass.rs"
            className=" bg-cyan-300 
            hover:bg-cyan-700 
            focus:bg-cyan-700 
            hover:text-gray-200 
            focus:text-gray-200 
            transition-all
            duration-300
            ease-in-out
            w-36 
            text-sm
            xxs:text-lg 
            font-bold 
            text-gray-700 
            px-5 
            py-2 
            my-10
            mb-6
            mx-auto
            flex
            justify-center
            items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("projects.viewLiveBtn")}
          </a>
        </article>
        <article className="flex flex-col items-center justify-center bg-blue-100 shadow-lg rounded-lg">
          <img
            src={projectTwoImg}
            className="py-5 px-3"
            alt="Image of project"
          />
          <a
            href="https://www.mes.rs/"
            className=" bg-cyan-300 
            hover:bg-cyan-700 
            focus:bg-cyan-700 
            hover:text-gray-200 
            focus:text-gray-200 
            transition-all
            duration-300
            ease-in-out
            w-36 
            text-sm
            xxs:text-lg 
            font-bold 
            text-gray-700 
            px-5 
            py-2 
            my-10
            mb-6
            mx-auto
            flex
            justify-center
            items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("projects.viewLiveBtn")}
          </a>
        </article>
      </div>
    </section>
  );
}

export default ProjectsSectionOne