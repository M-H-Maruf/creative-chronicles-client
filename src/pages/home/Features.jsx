import { Box, Heading, Flex } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./styles.css"
import { FaBullhorn, FaBook, FaUsers, FaComments } from "react-icons/fa";
import {  Autoplay, Pagination, Navigation  } from 'swiper/modules';

const Features = () => {
    const features = [
        {
          title: "Engaging Content",
          icon: <FaBullhorn className="text-blog-primary" size={60} />,
          description:
            "Our blog features high-quality, well-researched content that keeps readers hooked from start to finish.",
        },
        {
          title: "Diverse Topics",
          icon: <FaBook className="text-blog-primary" size={60} />,
          description:
            "Explore a wide range of topics, from literature and art to technology and travel, curated just for you.",
        },
        {
          title: "Expert Authors",
          icon: <FaUsers className="text-blog-primary" size={60} />,
          description:
            "Our team of experienced authors and industry experts ensure that you get the most valuable insights.",
        },
        {
          title: "Interactive Community",
          icon: <FaComments className="text-blog-primary" size={60} />,
          description:
            "Join our community of passionate readers and writers. Engage in discussions, share your thoughts, and connect with like-minded individuals.",
        },
      ];
    

  return (
          <div className="w-screen py-6 flex flex-col justify-center items-center relative">
      <div className="h-full absolute w-full bg-black bg-opacity-80 flex justify-center items-center top-0"></div>
    <h1
      data-aos="fade-right"
      className="aos-init w-full my-6 lg:px-32 aos-animate text-center font-teko font-bold text-blog-primary text-5xl aos-init aos-animate mt-32"
    >
      FEATURES
    </h1>
    <div className="max-w-sm md:max-w-lg lg:max-w-2xl"><Box p={8}>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        p={1}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {features.map((feature, index) => (
          <SwiperSlide  key={index}>
            <Flex
              align="center"
              justify="center"
              direction="column"
              textAlign="center"
              h="300"
            >
              <Box>{feature.icon}</Box>
              <Heading size="lg" mb={4} mt={8}>
                {feature.title}
              </Heading>
              <Box maxWidth="300px" mx="auto">
                {feature.description}
              </Box>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box></div>
    
  </div>
    
  );
};

export default Features;
