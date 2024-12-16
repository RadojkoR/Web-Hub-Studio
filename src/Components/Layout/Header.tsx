import video from "../../assets/videos/3129671-hd_1920_1080_30fps.mp4";
import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation("header");
  return (
    <header className="mainHeader relative w-full h-screen overflow-hidden -z-50">
      <video
        src={video}
        className="w-full lg:h-lvh h-svh object-cover fixed"
        aria-hidden="true"
        loop
        autoPlay
        muted
      ></video>
      <section
        className="
        absolute 
        lg:w-rem40
        sm:w-rem35
        xs:w-rem30
        xxs:w-96
        xxxs:w-72
        p-10 
        2xl:right-44 
        xl:right-36 
        lg:right-24
        xxxs:right-0
        top-52 
        bg-gray-900 
        bg-opacity-70"
      >
        <h1 className="text-teal-200 lg:text-7xl sm:text-6xl xs:text-6xl xxs:text-5xl text-4xl font-bold">
          {t("header.headerSlogan")}
        </h1>
      </section>
    </header>
  );
}

export default Header