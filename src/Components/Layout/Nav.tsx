import { NavLink } from "react-router-dom";
import NavLogo from "../../assets/Logos/WebHubStudioLogoText-light.png";
import SrbFlag from "../../assets/Flags/serbia128x128.webp";
import EngFlag from "../../assets/Flags/united-kingdom128x128.webp";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";


function Nav() {
  const {t, i18n} = useTranslation();
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   const [hasScrolled, setHasScrolled] = useState(false);
  

  const toggleDropdown = () => setIsDropDownOpen(!isDropDownOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleLanguageChange = (language:string) => {
    i18n.changeLanguage(language);
    setIsDropDownOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    
  },[])
  
  return (
    <nav
      className={`mainNav w-full fixed z-50 text-2xl ${
        hasScrolled ? "navHasScrolled" : ""
      }`}
    >
      <div className="2xl:container h-full flex items-center uppercase text-slate-100 font-semibold">
        <div className="xxs:w-52 xs:ms-5 xxxs:w-36 xxxxs:w-28">
          <NavLink to={"/"}>
            <img
              src={NavLogo}
              className="h-10 w-full mx-auto"
              alt="Web Hub Sudio Logo"
            />
          </NavLink>
        </div>

        {/* Desktop menu */}
        <ul
          className={`navUlEl lg:flex mx-auto [&>li>a]:ease-linear [&>li>a]:duration-200 ${
            isMobileMenuOpen ? "!right-0" : ""
          }`}
        >
          <li className="me-8">
            <NavLink
              to={"/"}
              end
              className={({ isActive }) =>
                `${
                  isActive ? "active" : ""
                } hover:text-brandColor focus:text-brandColor focus:outline-none`
              }
            >
              {t("home")}
            </NavLink>
          </li>
          <li className="me-8 ">
            <NavLink
              to={"/services"}
              className="
              hover:text-brandColor
              focus:text-brandColor"
            >
              {t("services")}
            </NavLink>
          </li>
          <li className="me-8">
            <NavLink
              to={"/projects"}
              className="
              hover:text-brandColor
              focus:text-brandColor"
            >
              {t("projects")}
            </NavLink>
          </li>
          <li className="me-8">
            <NavLink
              to={"/contact"}
              className="
              hover:text-brandColor
              focus:text-brandColor"
            >
              {t("contact")}
            </NavLink>
          </li>
        </ul>
        <section className="lngBtnContainer w-28 lg:me-5 flex relative">
          <button className="dropdownButtonLng w-6" onClick={toggleDropdown}>
            <span className="w-6 flex items-center text-sm">
              {i18n.language === "sr" ? (
                <>
                  <img src={SrbFlag} className="me-3" alt="Serbian Flag" />
                  {t("languages.serbian")}
                </>
              ) : (
                <>
                  <img
                    src={EngFlag}
                    className="me-3"
                    alt="United Kingdom Flag"
                  />
                  {t("languages.english")}
                </>
              )}
            </span>
          </button>
          {isDropDownOpen && (
            <article className="absolute text-gray-900 w-36 top-full left-0 mt-2 py-4 px-2 bg-slate-100 border border-gray-300 shadow-lg z-10">
              <button
                className="w-6 mb-4"
                onClick={() => handleLanguageChange("en")}
              >
                <span className="w-6 flex text-sm">
                  <img
                    src={EngFlag}
                    className="me-3"
                    alt="United Kingdom Flag"
                  />
                  {i18n.language === "en" ? <>English</> : <>Engleski</>}
                </span>
              </button>
              <button
                className="w-6 flex"
                onClick={() => handleLanguageChange("sr")}
              >
                <span className="w-6 flex text-sm">
                  <img src={SrbFlag} className="me-3" alt="Serbian Flag" />
                  {i18n.language === "sr" ? <>Srpski</> : <>Serbian</>}
                </span>
                
              </button>
            </article>
          )}
        </section>
        <section>
          {/* Hamburger Menu Icon (Mobile Only) */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-2xl text-white hover:text-gray-400 focus:text-gray-400 me-4"
          >
            <span className="sr-only">Open main menu</span>
            {!isMobileMenuOpen ? <GiHamburgerMenu /> : <RiCloseLargeLine />}
          </button>
        </section>
      </div>
    </nav>
  );
}

export default Nav