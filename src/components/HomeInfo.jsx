import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const InfoBox = ({ text, spanText, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">
      {text} <br /> <span>{spanText}</span>
    </p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" alt="arrow" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1
      className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue
    py-4 px-8 text-white mx-5"
    >
      Greetings,👋 we'r
      <br />
      <span className="font-semibold mx-2 text-white">TM Group</span>
      <br />A Software Engineer Company
    </h1>
  ),
  2: (
    <InfoBox
      text="Worked with many companies and"
      spanText="picked up many skills along the way"
      link="/about"
      btnText="Learn More"
    />
  ),
  3: (
    <InfoBox
      text=" Led multiple projects to success over the years."
      spanText="Curious about the impact?"
      link="/projects"
      btnText="Visit Portfolio"
    />
  ),
  4: (
    <InfoBox
      text=" Need a project done or looking for a dev?"
      spanText="We'r just a few keystrokes away"
      link="/contact"
      btnText="Get in touch"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
