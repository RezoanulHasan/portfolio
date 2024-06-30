import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";
import { services } from "../constants";
import { Tilt } from "react-tilt";
import myPhoto from "../../public/assets/myPhoto.jpg";
const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0  mt-8  bg-gradient-to-r from-transparent via-violet-500 to-transparent "
      id="about"
    >
      <motion.div variants={textVariant()}>
        {/*<div className="flex justify-center my-5 lg:py-8">
          <div className="flex  items-center">
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
            <span className="bg-[#1a1443] w-fit text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] p-2 px-5 text-xl rounded-md">
              About
            </span>
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          </div>
  </div> */}

        <p className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]">
          Introduction
        </p>
        <h2
          className=" text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] bg-gradient-to-r from-violet-500 to-violet-200"
          style={{
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Overview
        </h2>
      </motion.div>

      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "Introducing Myself  as  a Web-Developer",
          1000,
          "Introducing Myself  as  a PERN-Stack-Developer",
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          "Introducing Myself  as  a Full-Stack-Developer",
          1000,
          "Introducing Myself  as  a MERN-Stack-Developer ",
          1000,
        ]}
        wrapper="span"
        speed={50}
        style={{
          fontSize: "2em",
          display: "inline-block",
          background: "",
          color: "white",
        }}
        repeat={Infinity}
      />

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4  text-white  text-[17px] max-w-3xl leading-[30px]"
      >
        I'm skilled web developer with experience in{" "}
        <span className="text-white">
          Javascript ,Typescript and have familiarity with php (laravel) and
          expertise in frameworks like React JS,Next JS .Node JS frameworks like
          Express-JS,CSS library like (Tailwind,Bootstrap ,Daisy-UI,Ant Design
          and Material UI) and Non-RDBMS MongoDB ,Mongoose familiarity with
          RDBMS like sql and postgresql(Prisma). Also Comfortable with Firebase,
          Stripe,JSON,JWT, Zod,ES6,Rest API,Redux.
        </span>{" "}
        I'm a quick learner and collaborate closely with clients to create
        efficient, scalable, and user-friendly solutions that solve real-world
        problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className="flex justify-center">
        <div
          className="relative mt-20 w-60 h-60 sm:h-96 sm:w-96 bg-primary overflow-hidden rounded-full
      spin before:absolute before:inset-x-[70px] 
      before:sm:inset-x-[100px]
      before:inset-y-[-10px] before:bg-gradient-to-l before:duration-500 before:from-[#00cea8] before:to-[#bf61ff]
      after:absolute after:inset-[6px] after:bg-primary after:rounded-full after:z-[1]
      hover:before:inset-x-0 hover:before:inset-y-[-20px]"
        >
          <div className="absolute inset-[30px] border-solid border-[6px] border-primary z-[3] rounded-full overflow-hidden">
            <img
              loading="lazy"
              alt={myPhoto}
              src="https://i.ibb.co/K0y7s31/160099600-3757031334417758-3894304083960476350-n.jpg"
              className="absolute top-0 left-0 w-full h-full rounded-full object-cover"
              title="Rezoanul Hasan"
            />
          </div>
        </div>
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </motion.section>
  );
};

export default About;
