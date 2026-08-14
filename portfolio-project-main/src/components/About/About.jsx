import React from "react";
import { Typewriter } from "react-simple-typewriter";
import profileImage from "../../assets/profile.jpeg";

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Aditi Sharma
          </h2>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 leading-tight">
            <span className="text-white">I am a </span>

            <span className="text-[#8245ec]">
              <Typewriter
                words={[
                  "FullStack Developer",
                  "Software Engineer",
                  "UI/UX Designer",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={40}
                delaySpeed={1500}
              />
            </span>
          </h3>

          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I’m an aspiring Software Engineer focused on full-stack development,
            AI/LLM technologies, and cloud computing. I enjoy building scalable,
            user-focused applications and exploring how AI can solve real-world
            problems.
            <br />
            <br />
            I’m continuously developing my skills across frontend, backend,
            cloud, and AI technologies while working on practical projects. My
            goal is to grow as a versatile engineer and build innovative,
            reliable, and intelligent software solutions.
          </p>

          {/* Download CV Button */}
          <a
            href="https://drive.google.com/file/d/1TlV5P8g0QGV6jTca_I5S7E5pDEs9Imra/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow:
                "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Static Profile Image Section */}
        <div className="md:w-1/2 flex justify-center md:justify-end mb-10 md:mb-0">
          <div className="w-72 h-96 sm:w-80 sm:h-[420px] md:w-[360px] md:h-[460px] border-2 border-purple-700 rounded-2xl overflow-hidden shadow-[0_0_35px_rgba(138,69,236,0.45)]">
            <img
              src={profileImage}
              alt="Aditi Sharma"
              className="w-full h-full object-contain rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
