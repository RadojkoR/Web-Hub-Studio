import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
// import { AiFillGithub } from "react-icons/ai";

interface SocialMediaProps {
  socialMediaTxtColor: string
}

function SocialMedia({socialMediaTxtColor}: SocialMediaProps) {
  return (
    <ul
      className={`${socialMediaTxtColor} flex justify-center 
                 py-10 [&>li>a>svg]:ease-linear [&>li>a>svg]:duration-200`}
    >
      <li className="w-3/6 border-b-4 border-brandColor mb-4 mx-3"></li>
      <li>
        <a
          href="https://www.facebook.com/webhubstudio"
          aria-label="Facebook Icon"
          target="_blank"
        >
          <FaFacebookF
            className="
                text-4xl me-4
                hover:text-brandColor
                 focus:text-brandColor
                focus:outline-none
                focus:ring-1
                 focus:ring-offset-brandColor
                focus:ring-offset-4"
          />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/web_hub_studio"
          aria-label="Instagram Icon"
          target="_blank"
        >
          <FaInstagram
            className="
            text-4xl me-4 
            hover:text-brandColor
            focus:text-brandColor
            focus:outline-none
            focus:ring-1
            focus:ring-offset-brandColor
            focus:ring-offset-4"
          />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/radojkoradulovic"
          aria-label="LinkedIn Icon"
          target="_blank"
        >
          <FaLinkedinIn
            className="
            text-4xl me-4 
            hover:text-brandColor
            focus:text-brandColor
            focus:outline-none
            focus:ring-1
            focus:ring-offset-brandColor
            focus:ring-offset-4"
          />
        </a>
      </li>
      {/* <li>
        <a
          href="https://github.com/RadojkoR"
          aria-label="GitHub Icon"
          target="_blank"
        >
          <AiFillGithub
            className="
            text-4xl me-4 
            hover:text-brandColor
            focus:text-brandColor
            focus:outline-none
            focus:ring-1
            focus:ring-offset-brandColor
            focus:ring-offset-4"
          />
        </a>
      </li> */}
      <li className="w-3/6 border-b-4 border-brandColor mb-4 mx-3"></li>
    </ul>
  );
}

export default SocialMedia;
