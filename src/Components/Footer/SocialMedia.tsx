import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

function SocialMedia() {
  return (
    <ul className="flex justify-center py-10 [&>li>a>svg]:ease-linear [&>li>a>svg]:duration-200">
      <li className="w-3/6 border-b-4 border-brandColor mb-4 mx-3"></li>
      <li>
        <a href="#" target="_blank">
          <FaFacebookF
            className="
                text-4xl me-4
                text-zinc-100
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
        <a href="#" target="_blank">
          <FaInstagram 
          className="
            text-4xl me-4 
            text-zinc-100
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
        <a href="www.linkedin.com/in/radojkoradulovic" target="_blank">
          <FaLinkedinIn 
          className="
            text-4xl me-4 
            text-zinc-100
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
        <a href="https://github.com/RadojkoR" target="_blank">
          <AiFillGithub 
          className="
            text-4xl me-4 
            text-zinc-100
            hover:text-brandColor
            focus:text-brandColor
            focus:outline-none
            focus:ring-1
            focus:ring-offset-brandColor
            focus:ring-offset-4"
          />
        </a>
      </li>
      <li className="w-3/6 border-b-4 border-brandColor mb-4 mx-3"></li>
    </ul>
  );
}

export default SocialMedia;
