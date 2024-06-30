import React, { useEffect, useState } from "react";
import { Wave } from "react-animated-text";
import { Link } from "react-router-dom";

import "./Blogs.css";
import { motion } from "framer-motion";

import { staggerContainer } from "../../utils/motion";
const styles = {
  fontFamily: "font-mono",
  color: "white",
  fontWeight: "bold",
  fontSize: "3em",
  marginTop: "5px",
  textAlign: "center",
};
import { blogData } from "../../constants";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setBlogs(blogData);
    };

    fetchBlogs();
  }, []);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const displayedBlogs = showAll ? blogs : blogs.slice(0, 2);

  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="sm:px-16  mt-20 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0    bg-gradient-to-r from-transparent via-violet-500 to-transparent  "
      id="blog"
    >
      <div className="overflow-hidden">
        <div style={styles} className=" font-mono ">
          <Wave
            text="My Blogs"
            className="bg-gradient-to-r from-violet-500 to-violet-200"
            effect="stretch"
            effectChange={2}
          />
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1  gap-5 p-5 m-5 ">
          {displayedBlogs.map((blog, index) => (
            <div
              key={index}
              className="card card-compact  rounded-2xl w-full bg-black font-mono shadow-xl p-5 m-5"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className={`image-container ${
                  hoveredIndex === index ? "scroll" : ""
                }`}
              >
                <img
                  className="object-cover w-full h-full rounded shadow-lg"
                  src={blog.imgSrc}
                  alt={blog.title}
                />
              </div>
              <div className="card-body">
                <h1 className="text-white font-bold text-xl">
                  Title: {blog.title}
                </h1>
                <div className="flex justify-end mt-4">
                  <Link to={blog.link}>
                    <button className="attractive-button mb-2">
                      See full blog
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center ">
          <button
            className="bg-red-500 btn text-white  p-4 rounded-full"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "See More"}
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default Blogs;
