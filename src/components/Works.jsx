import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { github } from "../../public/assets";
import { RiLiveFill } from "react-icons/ri";
import { BsEyeFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import projectsData from "../../public/assets/data/projects.json";
import PropTypes from "prop-types";
import React from "react";

const ProjectCard = React.memo(
  ({ project, showDetails, onShowDetailsClick }) => {
    const {
      name,
      description,
      tags,
      source_code_link,
      live_demo_link,
      image,
      index,
    } = project;

    return (
      <motion.div>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary p-5 rounded-tr-3xl rounded-bl-3xl sm:w-[360px] w-full"
        >
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-2">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="github"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
              <div
                onClick={() => window.open(live_demo_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <RiLiveFill className="w-1/2 h-1/2 object-contain" />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
          </div>

          <div className="mt-4 flex flex-wrap gap-5">
            {tags?.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>

          <div className="flex justify-end mt-4">
            <button
              onClick={() => onShowDetailsClick(index)}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer 2 "
            >
              Features
              <BsEyeFill />
            </button>
          </div>

          {showDetails && (
            <div className="mt-4 p-4 bg-gray-700 rounded-lg text-white">
              <h4 className="font-bold text-lg">Project Keys features:</h4>
              <p>{description}</p>
            </div>
          )}
        </Tilt>
      </motion.div>
    );
  }
);

ProjectCard.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
      })
    ).isRequired,
    source_code_link: PropTypes.string.isRequired,
    live_demo_link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
  }).isRequired,
  showDetails: PropTypes.bool.isRequired,
  onShowDetailsClick: PropTypes.func.isRequired,
};

const Works = () => {
  const [projects, setProjects] = useState([]);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [detailsVisible, setDetailsVisible] = useState({});

  useEffect(() => {
    setProjects(
      projectsData?.projects.map((project, index) => ({ ...project, index }))
    );
  }, []);

  const toggleShowDetails = (index) => {
    setDetailsVisible((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const visibleProjects = showAllProjects ? projects : projects.slice(0, 9);

  return (
    <motion.section
      id="work"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0 bg-gradient-to-r from-transparent via-violet-500 to-transparent"
    >
      <motion.div>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          My Projects
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Projects
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p className="mt-3 text-white text-[17px] max-w-3xl leading-[30px]">
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos. It reflects my ability to
          solve complex problems, work with different technologies, and manage
          projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {visibleProjects?.map((project) => (
          <ProjectCard
            key={`project-${project.index}`}
            project={project}
            showDetails={!!detailsVisible[project.index]}
            onShowDetailsClick={toggleShowDetails}
          />
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <button
          onClick={() => setShowAllProjects(!showAllProjects)}
          className="bg-red-500 btn text-white py-2 px-4 mt-5 rounded-full"
        >
          {showAllProjects ? "Less" : "Show More"}
        </button>
      </div>
    </motion.section>
  );
};

export default Works;
