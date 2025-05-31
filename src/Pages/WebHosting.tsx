import { Outlet } from "react-router";
import { SecondaryHeader } from "../Components/Layout";


function WebHosting() {
    const servicesHeader = [
      {
        headerBgClass: "servicesHeader ",
        headerSloganBold: "Web Hosting",
        headerSloganRegular: "Web Hosting",
      },
    ];
  return (
    <>
      
      <SecondaryHeader headerInfo={servicesHeader} />
      <section className="seoOptimization bg-slate-100">
        <div className="md:container-80 px-5 md:px-0 py-10">
          <article className=" pt-20">
            <h2 className="border-l-4 border-brandColor h-fit text-5xl text-gray-700 font-bold mb-12 ps-5">
              Web Hosting
            </h2>
            <p className="text-xl sm:text-2xl text-gray-700 font-semibold pb-5">
              Stranica u pripremi
            </p>
          </article>
        </div>
      </section>
      <Outlet />
      </>
  )
}

export default WebHosting