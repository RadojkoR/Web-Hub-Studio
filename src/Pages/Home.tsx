import { AboutHome, HeroHome, WhyItMatters } from "../Components/Home";
import { Header } from "../Components/Layout"


function Home() {
  return (
    <>
      <Header />
      <section className="mainHome">
        <HeroHome />
        <WhyItMatters />
        <AboutHome />
      </section>
    </>
  );
}

export default Home