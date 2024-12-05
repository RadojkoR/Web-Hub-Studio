import video from "../../assets/videos/3129671-hd_1920_1080_30fps.mp4"
import { useTranslation } from "react-i18next";

function Header() {
  const {t} = useTranslation("header")
  return (
    <header className="header relative h-screen overflow-hidden">
      <video src={video} className="w-full h-auto" aria-hidden="true" loop autoPlay muted></video>
      <section className="absolute w-rem40 p-10 right-44 top-52 bg-gray-900 bg-opacity-70">
        <h1 className="text-teal-200 text-7xl font-bold">
          {t("header.headerSlogan")}
        </h1>
      </section>
    </header>
  );
}

export default Header