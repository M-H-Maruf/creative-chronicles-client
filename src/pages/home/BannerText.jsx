/* eslint-disable react/no-unescaped-entities */
import { TypeAnimation } from "react-type-animation";

const BannerText = () => {
  return (
    <div
      data-aos="fade-right"
      className="absolute flex flex-col justify-center items-center"
    >
      <h1 className="text-white text-center text-4xl opacity-90 font-teko tracking-tight block">
      DELVE INTO A TAPESTRY OF TOPICS INCLUDING
      </h1>
      <hr />
      <div data-aos="fade-left">
        <TypeAnimation
          sequence={[
            "ART",
            1000,
            "DESIGN",
            1000,
            "LITERATURE",
            1000,
            "TECHNOLOGY",
            1000,
            "INNOVATION",
            1000,
            "TRAVEL",
            1000,
          ]}
          wrapper="h1"
          className="text-blog-primary font-teko tracking-normal opacity-100"
          speed={50}
          style={{ fontSize: "48px", display: "block", color:"#52e03595" }}
          repeat={Infinity}
        />
      </div>
      <p
        data-aos="fade-up"
        className="w-80 text-white opacity-60 mt-4 font-medium text-center"
      >
       Welcome to Creative Chronicles, your sanctuary for boundless creativity. Here, we embrace artists, writers, designers, and visionaries. Dive into a world of art, literature, and innovation. Through insightful articles and a supportive community, we nurture your creative journey. Join us in celebrating the power of imagination and self-expression. Let's embark on this enriching voyage together!
      </p>
    </div>
  );
};

export default BannerText;
