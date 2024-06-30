import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { AiOutlineArrowUp } from "react-icons/ai";
import Swal from "sweetalert2";
import EarthCanvas from "./canvas/Earth";

const Contact = () => {
  const formRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const { name, email, message } = form;

    const subject = encodeURIComponent("Contact Form message");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    );

    const EMAIL = "rezoanulhasan96@gmail.com";
    const APP_PASS = "olutcurpznibgbsr";

    const mailtoLink = `mailto:${EMAIL}?subject=${subject}&body=${body}&authuser=${EMAIL}&password=${APP_PASS}`;

    try {
      window.open(mailtoLink);

      // Reset the form after submission
      formRef.current.reset();

      // Reset the form state
      setForm({
        name: "",
        email: "",
        message: "",
      });

      // Show SweetAlert notification
      Swal.fire({
        icon: "success",
        title: "Message Sent",
        text: "Your message has been sent successfully.",
      });
    } catch (error) {
      console.error("Error sending email:", error);

      // Handle error, show error message to the user
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred while sending your message. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0 xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden"
      id="contact"
    >
      <motion.div className="flex-[0.95] bg-black-100 p-8 rounded-2xl">
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          Get in touch
        </p>
        <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Contact
        </h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              required
              onChange={handleChange}
              placeholder="What's your name"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="What's your email"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              //  type="text"
              required
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-2xl shadow-black hover:bg-blue-950 rounded"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>{" "}
      </motion.div>

      <motion.div className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>
      <a href="#" className="absolute bottom-0 right-0">
        <AiOutlineArrowUp className="w-14 h-20 animate-bounce" />
      </a>
    </motion.section>
  );
};

export default Contact;
