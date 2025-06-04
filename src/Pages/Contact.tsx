import { SecondaryHeader } from "../Components/Layout";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import { useEffect } from "react";
import { LuPhoneOutgoing } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { SocialMedia } from "../Components/Footer";
import { FaViber } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import MetaTags from "../Components/SEO/MetaTags";

function Contact() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const contactHeader = [
    {
      headerBgClass: "contactHeader",
      headerSloganBold: t("contactPage.headerSloganBold"),
      headerSloganRegular: t("contactPage.headerSloganRegular"),
    },
  ];

  const socialMediaIconClass = "text-gray-700";

  return (
    <>
      <MetaTags />
      <SecondaryHeader headerInfo={contactHeader} />
      <section className="mainProjects bg-slate-100 pt-16 pb-20">
        <div className="md:container-80 px-3 md:px-0">
          <article className="border-b-2 border-brandColor">
            <h2
              className="text-5xl text-gray-700 font-bold border-l-4 border-brandColor ps-5"
              data-aos="fade-down"
              data-aos-duration="1500"
              data-aos-delay="400"
            >
              {t("contactPage.title")}
            </h2>
            <p className="text-xl sm:text-2xl text-gray-700 font-semibold mt-10 pb-10">
              {t("contactPage.paraOne")}
            </p>
          </article>
          <article className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 border-b-2 border-brandColor pb-16">
            <div
              className="flex flex-col justify-between bg-gradient-to-r from-slate-200 via-slate-300 to-slate-400 xs:p-10 xxs:p-5 p-3"
              data-aos="zoom-in"
              data-aos-duration="1500"
              data-aos-delay="300"
            >
              <p className="text-2xl text-gray-700">
                {t("contactPage.emailTxt")}
              </p>
              <a
                href="mailto:info@webhubstudio.com"
                className="
                transition-all 
                duration-300
                ease-in-out
                  flex items-center 
                  hover:text-brandColor
                  focus:text-brandColor
                  focus:outline-none
                  focus:ring-1
                  focus:ring-offset-brandColor
                  focus:ring-offset-4
                  mt-10
                  xs:text-2xl
                  xxs:text-lg
                  text-sm
                  font-semibold
                  mx-auto"
              >
                <MdOutlineEmail
                  className="
                    text-5xl xxs:me-4 me-1"
                />
                info@webhubstudio.com
              </a>
            </div>
            <div
              className="flex flex-col justify-between bg-gradient-to-l from-slate-200 via-slate-300 to-slate-400 xs:p-10 xxs:p-5 p-3"
              data-aos="zoom-in"
              data-aos-duration="1500"
              data-aos-delay="300"
            >
              <p className="text-2xl text-gray-700">
                {t("contactPage.phoneTxt")}
              </p>
              <div className="mt-10 flex justify-center">
                <div className="flex flex-col items-center justify-center me-10">
                  <FaViber className="text-4xl text-[#7360F2] mx-auto" />
                  <p className="font-semibold">Viber</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <FaWhatsapp className="text-4xl text-[#25D366] mx-auto" />
                  <p className="font-semibold">WhatsApp</p>
                </div>
              </div>

              <a
                href="tel:+16473239043"
                className="flex items-center
                transition-all 
                duration-300
                ease-in-out
                  hover:text-brandColor
                  focus:text-brandColor
                  focus:outline-none
                  focus:ring-1
                  focus:ring-offset-brandColor
                  focus:ring-offset-4
                  mt-10
                  xs:text-2xl
                  xxs:text-lg
                  text-sm
                  font-semibold
                  mx-auto"
              >
                <LuPhoneOutgoing className="text-4xl me-5" />
                +1 647 323 9043
              </a>
            </div>
          </article>
          <article className="border-b-2 border-brandColor pb-16">
            <h2 className="text-4xl text-gray-700 font-bold text-center my-16">
              {t("contactPage.socialMediaTxt")}
            </h2>
            <div className="!text-gray-700">
              <SocialMedia socialMediaTxtColor={socialMediaIconClass} />
            </div>
          </article>
          <article className="border-b-2 border-brandColor">
            <h4 className="text-5xl text-brandColor text-center py-20">
              {t("contactPage.lastTxt")}
            </h4>
          </article>
        </div>
      </section>
    </>
  );
}

export default Contact;
