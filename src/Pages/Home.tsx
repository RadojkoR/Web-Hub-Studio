import { AboutHome, HeroHome, ProjectsHome, ServicesHome, WhyItMatters } from "../Components/Home";
import { Header } from "../Components/Layout"


function Home() {
  return (
    <>
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