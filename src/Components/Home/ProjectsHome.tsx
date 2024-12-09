import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom";
import projectOneImg from "../../assets/Images/HomePageImages/izoDecorGlassProjectMd.webp";
import projectOneImgMobile from "../../assets/Images/HomePageImages/izoDecorGlassMobile.webp";
import projectOneImgSpeed from "../../assets/Images/HomePageImages/izoDecorGlassSpeed.webp";

function ProjectsHome() {
    const {t} = useTranslation();
  return (
    <section className="ourProjects bg-gray-50 py-20">
      <div className="container flex flex-col">
        <h2 className="text-4xl font-bold text-gray-600 ">
          {t("ourProjects.title")}
        </h2>
        <p className="text-2xl font-semibold text-gray-600 mt-5">
          {t("ourProjects.para")}
        </p>
        <article className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="relative">
            <img src={projectOneImg} alt="Image of project one" />
            <img
              src={projectOneImgMobile}
              className="absolute top-10 left-24 w-44"
              alt="Mobile image of project one"
            />
            <img
              src={projectOneImgSpeed}
              className="absolute -bottom-5 right-10 w-96"
              alt="Mobile image of project one"
            />
          </div>
          <div className="relative">
            <img src={projectOneImg} alt="Image of project one" />
            <img
              src={projectOneImgMobile}
              className="absolute top-10 left-24 w-44"
              alt="Mobile image of project one"
            />
          </div>
        </article>

        <Link
          to={"/projects"}
          className=" bg-cyan-300 
            hover:bg-cyan-700 
            focus:bg-cyan-700 
            hover:text-gray-200 
            focus:text-gray-200 
            transition-all
            duration-300
            ease-in-out
            w-40 
            text-lg 
            font-bold 
            text-gray-700 
            px-5 
            py-2 
            mt-28
            mx-auto
            justify-center
            items-center"
        >
          {t("learnMoreBtn")}
        </Link>
      </div>
    </section>
  );
}

export default ProjectsHome