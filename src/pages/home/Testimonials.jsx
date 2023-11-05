/* eslint-disable react/no-unescaped-entities */
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const Testimonials = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="h-full w-full bg-black flex justify-center items-center py-16">
        {" "}
        <div
          id="Testimonials"
          className="max-w-xl h-fit flex justify-between items-center flex-col py-20 px-14"
        >
          <div className="text-white text-center">
            <h1
              data-aos="fade-right"
              className="aos-init aos-animate font-teko font-bold text-blog-primary text-5xl aos-init aos-animate"
            >
              TESTIMONIALS
            </h1>{" "}
            <h2
              data-aos="fade-down"
              className="font-teko text-white tracking-normal text-xl font-semibold pt-4 mb-8"
            >
              Don't Just Take Our Words For It. See What Our Past Customers Had
              To Say About It.
            </h2>
          </div>{" "}
          <Tabs colorScheme="green" variant="enclosed">
            <div data-aos="fade-right">
              <TabList>
                <Tab>
                  <h2 className="font-bold tracking-tighter text-blog-primary font-orbitron">
                    Alice
                  </h2>
                </Tab>
                <Tab>
                  <h2 className="font-bold tracking-tighter text-blog-primary font-orbitron">
                    David
                  </h2>
                </Tab>
                <Tab>
                  <h2 className="font-bold tracking-tighter text-blog-primary font-orbitron">
                    Ella
                  </h2>
                </Tab>
                <Tab>
                  <h2 className="font-bold tracking-tighter text-blog-primary font-orbitron">
                    James
                  </h2>
                </Tab>
              </TabList>
            </div>
            <div data-aos="fade-down">
              <TabPanels>
                <TabPanel>
                  <h2
                    className="text-justify text-white h-48"
                    data-aos="flip-left"
                  >
                    "The articles on Creative Chronicles have been a constant
                    source of inspiration for my creative projects. The diverse
                    range of topics and insightful content have truly elevated
                    my creative journey." ---Alice Williams, Freelance Artist
                  </h2>
                </TabPanel>
                <TabPanel>
                  <h2
                    className="text-justify text-white h-48"
                    data-aos="flip-up"
                  >
                    "Creative Chronicles is my go-to platform for discovering
                    fresh ideas and techniques. The quality of content and the
                    depth of knowledge shared by the writers is unparalleled.
                    It's become an essential part of my creative process."
                    ---David Rodriguez, Graphic Designer
                  </h2>
                </TabPanel>
                <TabPanel>
                  <h2
                    className="text-justify text-white h-48"
                    data-aos="flip-up"
                  >
                    "I can't thank Creative Chronicles enough for the wealth of
                    information they provide. The articles on literature,
                    design, and art have been invaluable to my creative
                    pursuits. It's a treasure trove for any enthusiast." ---Ella
                    Martinez, Writer and Blogger
                  </h2>
                </TabPanel>
                <TabPanel>
                  <h2
                    className="text-justify text-white h-48"
                    data-aos="flip-up"
                  >
                    "As a photographer, I'm always looking for new perspectives.
                    Creative Chronicles has been a goldmine of ideas and tips
                    for enhancing my craft. The photography articles have truly
                    made a difference in my work." ---James Turner, Professional
                    Photographer
                  </h2>
                </TabPanel>
              </TabPanels>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
