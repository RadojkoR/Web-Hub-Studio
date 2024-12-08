import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "../../../node_modules/aos/dist/aos.css";
import aboutImg from "../../assets/Images/HomePageImages/aboutImg3.webp";
import aboutImg2 from "../../assets/Images/HomePageImages/aboutImg2.webp";
import aboutImg3 from "../../assets/Images/HomePageImages/aboutImg4.webp";

function AboutHome() {
  const { t } = useTranslation("home");
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <section className="aboutUs py-20">
        <h1 className="text-4xl text-center font-bold text-cyan-800 uppercase mb-16">
          Web Hub Studio
        </h1>
        <article className="container flex justify-between">
          <div className="w-3/5">
            <h2 className="text-3xl font-semibold text-gray-700 mt-10 mb-5 ">
              {t("home.aboutTitle")}
            </h2>
            <p className="text-xl text-gray-700 md:text-left text-center">
              {t("home.aboutTxt")}
            </p>
            <p className="text-2xl mt-5 text-cyan-700 md:text-left text-center">
              {t("home.aboutSummaryTxt")}
            </p>
          </div>
          <div className="w-2/5 relative">
            <img
              src={aboutImg}
              className="w-rem40 mx-auto"
              alt="About Us Image"
              data-aos="zoom-out-down"
              data-aos-delay="200"
              data-aos-anchor="center-bottom"
            />
            <img
              src={aboutImg3}
              className="w-80 absolute -top-10 right-0 rotate-12"
              alt="About Us Image"
              data-aos="zoom-out-down"
              data-aos-delay="800"
            />
            <img
              src={aboutImg2}
              className="w-72 mx-auto absolute top-20 rotate-15"
              alt="About Us Image"
              data-aos="zoom-out"
              data-aos-delay="1600"
            />
          </div>
        </article>
      </section>
    </>
  );
}

export default AboutHome;
