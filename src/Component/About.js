import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg sm:pt-80 md:pt-4 p-4 mx-auto flex flex-col justify-center w-full h-full pt-20 ">
        <div className="pb-8 pt-20">
          <p className="text-4xl font-bold inline border-b-4  border-gray-500">
            About
          </p>
          <p className="text-xl sm:text-l text mt-20">
            I'm a skilled Frontend developer with 3+ years of experience
            specializing in HTML, CSS, JavaScript and TypeScript with expertise
            in React for building modern, responsive web applications.
            Proficient in building web applications from concept to deployment.
            Demonstrated expertise in front-end development using React.js to
            create interactive user interfaces and dynamic web applications.
            Worked closely with UI/UX designers and back-end team to integrate
            RESTful APIs and implement efficient data fetching strategies.
            Proven ability to collaborate in cross-functional teams and deliver
            high-quality software solutions.
          </p>
          <p className="text-xl sm:text-l mt-10">
            Passionate about staying up-to-date with the latest web technologies
            and best practices to ensure optimal performance and maintainability
            of projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
