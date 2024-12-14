import { useTranslation } from "react-i18next"
import projectOneImg from "../../assets/Images/ProjectsPageImg/izoDecorGlassProjectOne.webp";
import projectTwoImg from "../../assets/Images/ProjectsPageImg/mesProjectImgOne.webp";
import { LinkBtn } from "../Buttons";

function ProjectsHome() {
    const {t} = useTranslation();
    const learnMoreProjectsBtnLink = "/projects";
    const learnMoreProjectsBtnTxt = t("learnMoreBtn");
  return (
    <section className="ourProjects bg-gray-50 py-20">
      <div className="md:container-80 px-4 md:px-0 flex flex-col">
        <h2 className="text-4xl font-bold text-gray-600 ">
          {t("ourProjects.title")}
        </h2>
        <p className="text-2xl font-semibold text-gray-600 mt-5">
          {t("ourProjects.para")}
        </p>
        <article className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="relative projectHomeItm">
            <a href={"https://izodecorglass.rs/"} className="" target="_blank">
              <img src={projectOneImg} alt="Image of project one" />
            </a>
          </div>

          <a
            href={"https://www.mes.rs/"}
            className="projectHomeItm relative xxxxs:mt-20 xxxs:mt-28 lg:mt-0"
            target="_blank"
          >
            <img src={projectTwoImg} alt="Image of project one" />
          </a>
        </article>
        <article className="mx-auto mt-14">
          <LinkBtn btnLink={learnMoreProjectsBtnLink} btnTxt={learnMoreProjectsBtnTxt} />
        </article>
      </div>
    </section>
  );
}

export default ProjectsHome