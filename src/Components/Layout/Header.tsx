import video from "../../assets/videos/3129671-hd_1920_1080_30fps.mp4";
import { useTranslation } from "react-i18next";
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"
// import { Autoplay, Pagination} from "swiper/modules";

function Header() {
  const { t } = useTranslation("header");
  return (
    <header className="mainHeader relative w-full h-screen overflow-hidden -z-50">
      <video
        src={video}
        className="w-full h-lvh min-h-screen object-cover fixed"
        aria-hidden="true"
        loop
        autoPlay
        muted
        playsInline
        preload="auto"
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
      {/* <div className="relative z-10 h-full flex items-center justify-center text-white bg-black bg-opacity-70">
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop={true}
          className="w-full max-w-3xl text-center px-4 h-full flex items-center justify-center"
        >
          <SwiperSlide>
            <h1 className="text-4xl md:text-6xl font-bold">
              Dobrodošli na naš sajt
            </h1>
            <p className="mt-4 text-lg">
              Pružamo moderne web usluge širom sveta.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <h1 className="text-4xl md:text-6xl font-bold">
              Izrada Web Sajtova
            </h1>
            <p className="mt-4 text-lg">
              Korišćenjem React-a, Tailwind-a i najnovijih tehnologija.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <h1 className="text-4xl md:text-6xl font-bold">
              Kontaktirajte nas danas
            </h1>
            <p className="mt-4 text-lg">Započnimo projekat zajedno.</p>
          </SwiperSlide>
        </Swiper>
      </div> */}
    </header>
  );
}

export default Header