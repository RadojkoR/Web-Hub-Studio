import { AboutHome, HeroHome, ProjectsHome, ServicesHome, WhyItMatters } from "../Components/Home";
import { Header } from "../Components/Layout"
// import { MetaProps } from "../types/interfaces";
import MetaTags from "../Components/SEO/MetaTags";

function Home() {

  return (
    <>
      <MetaTags />
      <Header />
      <section className="mainHome">
        <HeroHome />
        <WhyItMatters />
        <AboutHome />
        <ServicesHome />
        <ProjectsHome />
      </section>
    </>
  );
}

export default Home