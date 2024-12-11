import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom";
import projectOneImg from "../../assets/Images/HomePageImages/izoDecorGlassProjectMd.webp";
import projectOneImgMobile from "../../assets/Images/HomePageImages/izoDecorGlassMobile.webp";
import projectOneImgSpeed from "../../assets/Images/HomePageImages/izoDecorGlassSpeed.webp";
import projectTwoImg from "../../assets/Images/HomePageImages/mesProjectImgMd.webp";
import projectTwoImgMobile from "../../assets/Images/HomePageImages/mesProjectMob.webp";

function ProjectsHome() {
    const {t} = useTranslation();
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
          <Link
            to={"https://izodecorglass.rs/"}
            className="projectHomeItm relative "
            target="_blank"
          >
            <img src={projectOneImg} className="" alt="Image of project one" />
            <img
              src={projectOneImgMobile}
              className="absolute top-6 left-5  2xl:w-44 xl:w-40 lg:w-36 md:w-48 sm:w-44 xs:w-40 xxs:w-36 xxxs:w-32 xxxxs:w-28"
              alt="Mobile image of project one"
            />
            <img
              src={projectOneImgSpeed}
              className="absolute 
              lg:-bottom-16 
              md:-bottom-20
              xs:-bottom-20
              xxs:-bottom-14 
              xxxs:-bottom-10 
              xxxxs:-bottom-8
              xl:right-10 
              lg:right-5 
              md:right-20 
              sm:right-8
              xxxs:right-5
              xxxxs:right-4
              2xl:w-96 
              xl:w-80 
              lg:w-64 
              sm:w-96 
              xs:w-72 
              xxs:w-48
              xxxs:w-36
              xxxxs:w-32"
              alt="Mobile image of project one"
            />
          </Link>
          <Link
            to={"https://www.mes.rs/"}
            className="projectHomeItm relative xxxxs:mt-20 xxxs:mt-28 lg:mt-0"
            target="_blank"
          >
            <img src={projectTwoImg} alt="Image of project one" />
            <img
              src={projectTwoImgMobile}
              className="absolute top-6 left-5  2xl:w-44 xl:w-40 lg:w-36 md:w-48 sm:w-44 xs:w-40 xxs:w-36 xxxs:w-32 xxxxs:w-28"
              alt="Mobile image of project one"
            />
          </Link>
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
            w-36 
            text-sm
            xxs:text-lg 
            font-bold 
            text-gray-700 
            px-5 
            py-2 
            mt-48
            mx-auto
            flex
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