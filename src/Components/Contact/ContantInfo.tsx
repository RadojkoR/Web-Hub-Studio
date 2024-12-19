import { LuPhoneOutgoing } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";

function ContantInfo() {
  return (
    <section className="flex flex-col items-center  xs:flex-row xs:justify-around text-zinc-100 py-10">
      <a
        href="tel:+16473239043"
        className="flex items-center 
            hover:text-brandColor
            focus:text-brandColor
            focus:outline-none
            focus:ring-1
            focus:ring-offset-brandColor
            focus:ring-offset-4"
      >
        <LuPhoneOutgoing className="text-4xl me-5" />
        +1 647 323 9043
      </a>
      <a
        href="mailto:info@webhubstudio.com"
        className="flex items-center  hover:text-brandColor
            focus:text-brandColor
            focus:outline-none
            focus:ring-1
            focus:ring-offset-brandColor
            focus:ring-offset-4
            mt-10
            xs:mt-0"
      >
        <MdOutlineEmail
          className="
            text-5xl me-4 "
        />
        info@webhubstudio.com
      </a>
    </section>
  );
}

export default ContantInfo;
