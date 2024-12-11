import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "../../../node_modules/aos/dist/aos.css";
import aboutImg from "../../assets/Images/HomePageImages/izoSpeedTestImg.webp";
import aboutImg2 from "../../assets/Images/HomePageImages/izoSpeedTestImgDesktop.webp";
function AboutHome() {
  const { t } = useTranslation("home");
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      {/* PARALLAX SECTION */}
      <section className="aboutUsParallax lg:h-80 h-48"></section>

      <section className="aboutUs py-20">
        <h1 className="text-4xl text-center font-bold text-cyan-800 uppercase mb-16">
          Web Hub Studio
        </h1>
        <article className="md:container-80 lg:flex justify-between px-4 md:px-0">
          <div className="lg:w-3/6 w-full">
            <h2 className="text-3xl font-semibold text-gray-700 mt-10 mb-5 ">
              {t("home.aboutTitle")}
            </h2>
            <p className="text-xl text-gray-700 md:text-left">
              {t("home.aboutTxt")}
            </p>
            <p className="text-2xl mt-5 text-cyan-700 md:text-left text-center">
              {t("home.aboutSummaryTxt")}
            </p>
          </div>
          <div className="lg:w-3/6 w-full flex flex-col relative p-5">
            
                <img
                  src={aboutImg}
                  className="w-full mx-auto mb-5"
                  alt="About Us Image"
                />
              
                <img
                  src={aboutImg2}
                  className="w-full mx-auto"
                  alt="About Us Image"
                />
          </div>
        </article>
      </section>
    </>
  );
}

export default AboutHome;
