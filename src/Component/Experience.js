import React from "react";
import { MdOutlineWork } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";

const Experience = () => {
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full pt-20">
        <div className="container">
          <div className="pb-10 pt-20">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Education & Experience
            </p>
          </div>
          <div>
            <div className="pb-4 w-full flex items-center">
              <p className="text-xl w-full text-center font-bold inline ">
                Experience
              </p>
            </div>
            <div className="flex flex-col sm:flex-row">
              <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
                <div className="max-w-md mx-auto bg-gradient-to-b from-gray-800 to-black shadow-md rounded-md overflow-hidden flex flex-col h-full border border-white">
                  <div className="p-4 flex-grow">
                    <h2 className="text-lg font-semibold text-white">
                      {<MdOutlineWork className="inline  mt-1 mx-2" />}Software
                      Engineer at Publicis Re:sources
                    </h2>
                    <p className="text-gray-200 mt-2">May-2024 - Present</p>
                    <p className="text-gray-300 mt-4">
                    Developed and maintained the Marcel application using React.js, Redux-Thunk, and Hooks, managing global state and asynchronous logic. Implemented responsive design, cross-browser compatibility, and shimmer UI for better user experience. Integrated RESTful APIs and optimized data fetching strategies in collaboration with UI/UX and back-end teams. Utilized Next.js with TypeScript for type-safe development and created a shared component library to ensure reusability and consistency. Followed Agile practices, ensuring timely releases and adhering to WCAG standards for accessibility.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
                <div className="max-w-md mx-auto bg-gradient-to-b from-gray-800 to-black shadow-md rounded-md overflow-hidden flex flex-col h-full border border-white">
                  <div className="p-4 flex-grow">
                    <h2 className="text-lg font-semibold text-white">
                      {<MdOutlineWork className="inline  mt-1 mx-2" />}Software
                      Engineer at Virtusa [HSBC]
                    </h2>
                    <p className="text-gray-200 mt-2">Aug-2021 - Present</p>
                    <p className="text-gray-300 mt-4">
                      Developed client off-boarding application using ReactJs,
                      Webpack and module federation introducing dynamic routing.
                      Developed high-performance client on-boarding application
                      using React Js, Redux-Thunk, Hooks, and (ES6) JavaScript
                      on top of micro frontend architecture. Extensively used
                      JSON for dynamic component rendering in React. Effective
                      use of advanced features like debouncing, memo,
                      useCallback, etc. to enhance the performance of the
                      application.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-8 w-full">
            <div className="flex items-center pb-4 w-full">
              <p className="w-full text-xl text-center font-bold inline">
                Education
              </p>
            </div>
            <div className="flex flex-col sm:flex-row mb-20">
            <div className="w-full">
              <div className="max-w-md mx-auto bg-gradient-to-b from-gray-800 to-black shadow-md rounded-md overflow-hidden flex flex-col h-full border border-white">
                <div className="p-4 flex-grow">
                  <h2 className="text-lg font-semibold text-white">{<FaGraduationCap className='inline  mt-1 mx-2' />}Bachelor's of Engineering</h2>
                  <p className="text-gray-200 mt-2">Jul-2016 - Jun-2020</p>
                  <p className="text-gray-200">Electronics & Telecommunication Engineering</p>
                  <p className="text-gray-300 mt-4">I graduated in Electronics & Telecommunication Engineering from M.G.M College of Engineering and Technology, excelling in subjects like digital signal processing,  wireless communication, Algorithms and Software Engineering. This education equipped me with essential skills for real-world problem-solving.</p>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
