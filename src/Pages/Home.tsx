import { Helmet } from "react-helmet";
import { AboutHome, HeroHome, ProjectsHome, ServicesHome, WhyItMatters } from "../Components/Home";
import { Header } from "../Components/Layout"
import { MetaProps } from "../types/interfaces";


function Home({ metaTitle, metaDescription }: MetaProps) {
  return (
    <>
      <Helmet>
        <title>Web Hub Studio - {metaTitle}</title>
        <meta name="description" content={metaDescription}/>
      </Helmet>
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