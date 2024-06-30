//import Computers from "./canvas/Computers";
import { motion } from "framer-motion";
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";
import { Wave } from "react-animated-text";
const Hero = () => {
  const heroSection = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };
  const heroSectionImage = {
    initial: { y: 0, rotate: -90, scale: 5 },
    animate: {
      y: -20,
      rotate: 0,
      scale: 1,
      transition: {
        duration: 1,
        y: {
          repeat: Infinity,
          duration: 2,
          repeatType: "reverse",
          ease: "easeInOut",
        },
      },
    },
  };
  const git = "https://github.com/RezoanulHasan";
  const linkedin = "https://www.linkedin.com/in/rezoanul-hasan-6ab158240/";
  const facebook = "https://www.facebook.com/riad.hasan.7524";
  const telegram = "https://t.me/rezoanulhasan";
  const whatsapp = "+880 1734-639066";
  return (
    <section className="relative w-full h-screen mx-auto  ">
      <div className="lg:fixed absolute left-0 top-52 sm:top-80 z-[1]">
        <ul className="list-none flex flex-col gap-0">
          <li
            onClick={() => window.open(git)}
            className="cursor-pointer bg-black  p-2 hover:scale-125 transition-transform"
          >
            <AiFillGithub className="w-10 h-10" />
          </li>
          <li
            onClick={() => window.open(linkedin)}
            className="cursor-pointer bg-blue-950 p-2 hover:scale-125 transition-transform"
          >
            <AiFillLinkedin className="w-10 h-10" />
          </li>
          <li
            onClick={() => window.open(facebook)}
            className="cursor-pointer bg-blue-600 p-2 hover:scale-125 transition-transform"
          >
            <AiFillFacebook className="w-10 h-10" />
          </li>

          <li
            onClick={() => window.open(whatsapp)}
            className="cursor-pointer bg-green-500 p-2 hover:scale-125 transition-transform"
          >
            <FaWhatsapp className="w-10 h-10" />
          </li>

          <li
            onClick={() => window.open(telegram)}
            className="cursor-pointer bg-black p-2 hover:scale-125 transition-transform"
          >
            <FaTelegram className="w-10 h-10" />
          </li>
        </ul>
      </div>
      <div className="sm:px-16 px-6 max-w-7xl mx-auto flex flex-row items-start gap-5 mb-3">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-violet-400" />
          <div className="w-1 sm:h-50 h-40 violet-gradient" />
        </div>
        <div>
          <div className="font-black text-white lg:text-[50px] sm:text-[30px] xs:text-[30px] text-[20px] lg:leading-[80px] mt-2">
            <Wave text="HI, I'm " effect="stretch" effectChange={2} />{" "}
            <span
              className="bg-gradient-to-r from-violet-500 to-violet-200"
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Rezoanul Hasan
            </span>{" "}
          </div>
          <p className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2">
            I am Full Stack Web Developer (MERN +PERN+ TS). I develope FrontEnd,
            Backend,Database,Api and interactive user interfaces web
            application.
          </p>
        </div>
      </div>

      <motion.div
        variants={heroSectionImage}
        initial="initial"
        animate="animate"
        className="relative"
      >
        <div className="">
          <img
            loading="lazy"
            src="https://i.ibb.co/0sPL8YW/Screenshot-2024-03-05-003447.png"
            className="object-cover w-full "
            alt=""
          />
        </div>
      </motion.div>

      <div className="absolute xs:bottom-1 bottom-2 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-spacing-4 border-secondary border-4 flex justify-center items-center p-2">
            <motion.div
              animate={{
                y: [-16, 24, -16],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
