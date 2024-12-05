import { AboutHome, HeroHome } from "../Components/Home";
import { Header } from "../Components/Layout"


function Home() {
  return (
    <>
      <Header />
      <section className="mainHome">
        <HeroHome />
        <AboutHome />
      </section>
    </>
  );
}

export default Home