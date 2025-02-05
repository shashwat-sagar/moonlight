import SwiperBanner from "../components/swiperBanner/SwiperBanner";
import Menu from "../components/card/Menu";
import Feature from "../components/feature/Feature";

const Home = () => {
  return (
    <>
      {/* <SwiperModule /> */}
      <SwiperBanner />
      <hr className="m-10 border border-zinc-900" />
      <Feature/>
      <hr className="m-10 border border-zinc-900" />
      <Menu/>
      <hr className="m-10 border border-zinc-900" />
      
    </>
  );
};

export default Home;
