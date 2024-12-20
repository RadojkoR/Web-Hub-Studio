import { SocialMedia } from "../Footer";
import brandLogo from "../../assets/Logos/WebHubStudioLogoText-light.png"
import { ContantInfo } from "../Contact";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation("footer");
  const socialMediaIconClass = "text-zinc-100";
  return (
    <footer className="bg-cyan-950">
      <h2 className="text-4xl text-center pt-10 pb-5 font-semibold text-zinc-100">
        {t("footer.footerSlogan")}
      </h2>
      <SocialMedia socialMediaTxtColor={socialMediaIconClass} />
      <ContantInfo />
      <img src={brandLogo} className="w-96 mx-auto my-10" alt="Brand Logo" />
      <p className="text-center xs:text-lg xxs:text-sm text-xs  text-zinc-100 font-semibold pb-5">
        Copyright &copy; <span>{new Date().getFullYear()}</span>{" "}
        <span className="text-brandColor">Web Hub Studio</span> All rights
        reserved
      </p>
    </footer>
  );
}

export default Footer