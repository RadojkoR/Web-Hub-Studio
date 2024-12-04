import { NavLink } from "react-router";
import NavLogo from "../../assets/Logos/WebHubStudioLogo .png";
import SrbFlag from "../../assets/Flags/serbia256x256.webp";
import EngFlag from "../../assets/Flags/united-kingdom256x256.webp";
import { useState } from "react";
import { useTranslation } from "react-i18next";

// type Language = "English" | "Serbian"

function Nav() {
  const {t, i18n} = useTranslation();
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const toggleDropdown = () => setIsDropDownOpen(!isDropDownOpen);

  const handleLanguageChange = (language:string) => {
    i18n.changeLanguage(language);
    setIsDropDownOpen(false);
  }
  
  // const [selectedLanguage, setSelectedLanguage]= useState("English")
  return (
    <nav className="w-full flex items-center h-16 z-50 uppercase text-xl text-gray-600 font-semibold">
      <div className="">
        <NavLink to={"/"}>
          <img
            src={NavLogo}
            className="h-10 mx-auto"
            alt="Web Hub Sudio Logo"
          />
        </NavLink>
      </div>
      <ul className="mx-auto flex [&>li>a]:ease-linear [&>li>a]:duration-200">
        <li className="me-8">
          <NavLink
            to={"/"}
            className="
              hover:text-brandColor
              focus:text-brandColor"
          >
            {t("home")}
          </NavLink>
        </li>
        <li className="me-8 ">
          <NavLink
            to={"/"}
            className="
              hover:text-brandColor
              focus:text-brandColor"
          >
            {t("services")}
          </NavLink>
        </li>
        <li className="me-8">
          <NavLink
            to={"/"}
            className="
              hover:text-brandColor
              focus:text-brandColor"
          >
            {t("projects")}
          </NavLink>
        </li>
        <li className="me-8">
          <NavLink
            to={"/"}
            className="
              hover:text-brandColor
              focus:text-brandColor"
          >
            {t("contact")}
          </NavLink>
        </li>
      </ul>
      <section className="me-32 relative">
        <button className="dropdownButtonLng w-6" onClick={toggleDropdown}>
          <span className="w-6 flex text-sm">
            {i18n.language === "sr" ? (
              <>
                <img src={SrbFlag} className="me-3" alt="Serbian Flag" />
                {t("languages.serbian")}
              </>
            ) : (
              <>
                <img src={EngFlag} className="me-3" alt="United Kingdom Flag" />
                {t("languages.english")}
              </>
            )}
          </span>
        </button>
        {isDropDownOpen && (
          <article className="absolute w-36 top-full left-0 mt-2 py-4 px-2 bg-slate-100 border border-gray-300 shadow-lg z-10">
            <button
              className="w-6 mb-4"
              onClick={() => handleLanguageChange("sr")}
            >
              <span className="w-6 flex text-sm">
                <img src={SrbFlag} className="me-3" alt="Serbian Flag" />
                {i18n.language === "sr" ? <>Srpski</> : <>Serbian</>}
              </span>
            </button>
            <button
              className="w-6 flex"
              onClick={() => handleLanguageChange("en")}
            >
              <span className="w-6 flex text-sm">
                <img src={EngFlag} className="me-3" alt="United Kingdom Flag" />
                {i18n.language === "en" ? <>English</> : <>Engleski</>}
                
              </span>
            </button>
          </article>
        )}
      </section>
    </nav>
  );
}

export default Nav