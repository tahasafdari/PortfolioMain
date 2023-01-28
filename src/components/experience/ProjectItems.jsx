import React from "react";
import { GrGithub } from "react-icons/gr";
import { MdOutlineViewInAr } from "react-icons/md";
const ProjectItems = ({ image, name, githubLink, demoLink, description }) => {
  return (
    <div className="projectItem">
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />

      <h3> {name} </h3>
      <p>{description}</p>
      <a
        href={githubLink}
        rel="noreferrer"
        target={"_blank"}
        className="github__icon"
      >
        {" "}
        {githubLink ? <GrGithub /> : null}
      </a>
      <a
        href={demoLink}
        rel="noreferrer"
        target={"_blank"}
        className="demo__icon"
      >
        {" "}
        {demoLink ? <MdOutlineViewInAr /> : null}
      </a>
    </div>
  );
};

export default ProjectItems;
