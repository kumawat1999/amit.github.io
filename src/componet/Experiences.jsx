import React from "react";
import "./Experiences.css";
import { Link } from "react-router-dom";

const Experiences = () => {
  return (
    <>
      <section>
        <div className="container">
          <h1>Skills</h1>
          <div className="skills">
            <div className="skills-itms">
              <Link to="/HtmlProgram">
                <h5 className="linkk">HTML</h5>
                </Link>
              <div className="circle">
                <p className="count">7/10</p>
              </div>
            </div>
            <div className="skills-itms">
            <Link to="/CssProgram">
                <h5 className="linkk">CSS</h5>
                </Link>
              <div className="circle">
                <p className="count">7/10</p>
              </div>
            </div>
            <div className="skills-itms">
            <Link to="/JavascriptProgram">
                <h5 className="linkk">JAVASCRIPT</h5>
                </Link>
              <div className="circle">
                <p className="count">7/10</p>
              </div>
            </div>
            <div className="skills-itms">
            <Link to="/PhpProgram">
                <h5 className="linkk">PHP</h5>
                </Link>
              <div className="circle">
                <p className="count">7/10</p>
              </div>
            </div>
            <div className="skills-itms">
            <Link to="/ReactProgram">
                <h5 className="linkk">REACTS</h5>
                </Link>
              <div className="circle">
                <p className="count">7/10</p>
              </div>
            </div>
            <div className="skills-itms">
              <Link to="/LaravelProgram">
                <h5 className="linkk">LARAVEL</h5>
                </Link>
              <div className="circle">
                <p className="count">7/10</p>
              </div>
            </div>
          </div>
          <h1>Education Details </h1>
          <div className="education">
            <h2>College Education </h2>
            <div className="colleges">
              <div className="college-item">
                <h3>University of Rajasthan</h3>
                <h3>B.A.</h3>
                <p>Percentage: 80%</p>
                <p>Session: 2019-2022</p>
              </div>
              <div className="college-item">
                <h3>University of Rajasthan</h3>
                <h3>B.A.</h3>
                <p>Percentage: 80%</p>
                <p>Session: 2019-2022</p>
              </div>
            </div>
            <h2>Schooling </h2>
            <div className="schooling">
              <div className="schooling-item">
                <h3>10th</h3>
                <p>Year: 2018</p>
                <p>Class:</p>
                <p>Specilization</p>
              </div>
              <div className="schooling-item">
                <h3>11th</h3>
                <p>Year: 2019</p>
                <p>Class:</p>
                <p>Specilization</p>
              </div>
              <div className="schooling-item">
                <h3>12th</h3>
                <p>Year: 2020</p>
                <p>Class:</p>
                <p>Specilization</p>
              </div>
            </div>
          </div>
          <h1>Experience Details </h1>
          <div className="experiences">
            <h2>Industrial Experiences </h2>
            <div className="idutrial-exp">
              <div className="ind-item">
                <h2 className="orgname">Oneclick I.T. Solutions</h2>
                <h3 className="position">React Intern</h3>
                <p>05/2023 - 08/2023</p>
                <p>
                  Description - Developing new user-facing features using *
                  Building reusable components and front-end libraries for
                  future use * Translating designs and wireframes into
                  high-quality code. * Optimizing components for maximum
                  performance across a vast array of web-capable devices and
                  browsers.
                </p>
              </div>
              <div className="ind-item">
                <h2 className="orgname">Oneclick I.T. Solutions</h2>
                <h3 className="position">Laravel Intern</h3>
                <p>05/2023 - 08/2023</p>
                <p>
                  Description - Developing new user-facing features using *
                  Building reusable components and front-end libraries for
                  future use * Translating designs and wireframes into
                  high-quality code. * Optimizing components for maximum
                  performance across a vast array of web-capable devices and
                  browsers.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* mane div and  */}
      </section>
    </>
  );
};

export default Experiences;
