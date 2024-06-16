import React from "react";
import { docLink } from "../constants.js";

export const Footer = () => {
  return (
    <>
      <footer className="p-4 md:p-8 lg:p-10 dark:bg-gray-800">
        <div className="mx-auto max-w-screen-xl text-center">
          <button
            onClick={() => window.scrollTo(0, 0)} // Example action for the button
            className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
            style={{
              textDecoration: "none",
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
            }}
          >
            <svg
              className="mr-2 h-8"
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* SVG paths here */}
            </svg>
            ExamProc
          </button>
          <p className="my-6 text-gray-500 dark:text-gray-400">
            Simplifying Exam Supervision: Effortless Proctoring Solutions
            Tailored for Today's Needs.
          </p>
          <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
            <li>
              <a href={docLink} className="mr-4 hover:underline md:mr-6">
                Project Documentation
              </a>
            </li>
          </ul>
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023-2024{" "}
            <a
              href="#"
              className="hover:underline"
              onClick={() => window.scrollTo(0, 0)}
            >
              ExamProc
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};
