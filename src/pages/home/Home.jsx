import { Background, Parallax } from "react-parallax";
import Banner from './Banner';
import BannerText from './BannerText';
import NewsLetter from './NewsLetter';

const Home = () => {
  return (
    <div className="-mt-20">
      {/* parallax banner */}
      <div
        className="relative top-0 left-0 right-0 overflow-hidden"
        id="Banner"
      >
        <Parallax strength={500} bgClassName="bg-contain bg-center">
          <Background className="custom-bg object-cover w-screen">
            <img
              className="object-cover object-center h-screen w-screen"
              src="https://i.postimg.cc/nHcHgCyB/blog-banner.jpg"
              alt="fill murray"
            />
          </Background>
          <div className="relative h-screen w-full flex flex-col justify-center items-center">
            <Banner></Banner>
            <BannerText></BannerText>
          </div>
        </Parallax>
      </div>

      {/* newsletter section */}
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
