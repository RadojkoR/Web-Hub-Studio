import AOS from "aos";
import { useEffect } from "react";
import { SecondaryHeaderProps } from "../../types/interfaces";


function SecondaryHeader({ headerInfo }: SecondaryHeaderProps) {
  const headerBgClass = headerInfo[0].headerBgClass;
  const headerSloganBold = headerInfo[0].headerSloganBold;
  const headerSloganRegular = headerInfo[0].headerSloganRegular;
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])


  return (
    <header className={`${headerBgClass} relative w-full flex text-teal-200`}>
      <section
        className="
        lg:w-rem40
        sm:w-rem35
        xs:w-rem30
        xxs:w-96
        xxxs:w-72
        xs:p-10
        p-5
        absolute
        right-0
        -bottom-10
        !z-40
        bg-gray-900 
        bg-opacity-70
        "
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="400"
      >
        <h1 className=" lg:text-7xl sm:text-6xl xxs:text-5xl text-4xl font-bold" data-aos="fade-up">
          {headerSloganBold}
        </h1>
        <p className="lg:text-5xl sm:text-4xl xxs:text-3xl text-3xl mt-5 font-semibold">{headerSloganRegular}</p>
      </section>
    </header>
  );
}

export default SecondaryHeader;
