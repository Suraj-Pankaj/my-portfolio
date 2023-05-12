import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white pt-10"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        {/* As a recent graduate with a degree in computer science with business
          system,  */}
        <p className="text-xl mt-20">
          Pursuing Btech(CSBS) from NMIMS Navi Mumbai. I am excited to begin my career as a Developer. Throughout my
          academic journey, I have developed a passion for solving complex
          problems through technology, and I am eager to apply my skills and
          knowledge to real-world projects.
        </p>

        <br />

        <p className="text-xl">
          During my time in college, I gained a strong foundation in computer
          science fundamentals, I have also had the opportunity to work on a
          variety of projects, including building web and mobile applications. 
          These experiences have allowed me to develop my technical
          skills and gain a deeper understanding of how technology can be used
          to solve real-world problems. 
        </p>

        <br />

        <p className="text-xl">
          In addition to my technical skills, I am a quick learner and a strong
          communicator. I am able to work well in a team and am always eager to
          take on new challenges. Overall, as a Developer, I am committed to
          delivering innovative and effective solutions that push the boundaries
          of what is possible with technology. I am excited to continue
          exploring new technologies and applying my skills to help solve the
          challenges.
        </p>
      </div>
    </div>
  );
};

export default About;
