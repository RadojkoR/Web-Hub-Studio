import { SocialMedia } from "../Footer";
import brandLogo from "../../assets/Logos/WebHubStudioLogoText-light.png"
import { ContantInfo } from "../Contact";

function Footer() {
  return (
    <footer className="bg-cyan-950">
      <h2 className="text-4xl text-center pt-10 pb-5 font-semibold text-zinc-100">
        Where web ideas come to life. Thanks for visiting!
      </h2>
      <SocialMedia />
      <ContantInfo />
      <img src={brandLogo} className="w-96 mx-auto my-10" alt="Brand Logo" />
      <p className="text-center text-zinc-100 font-semibold pb-5">
        Copyright &copy; <span>{new Date().getFullYear()}</span>{" "}
        <span className="text-brandColor">Web Hub Studio</span> All rights reserved
      </p>
    </footer>
  );
}

export default Footer