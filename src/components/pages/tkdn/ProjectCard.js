import React from "react";
import "./Definition.css";
import "./Provision.css";

function ProjectCard({ index, title, url }) {
  return (
    <a
      className="tkdn-project-card"
      href={url}
      target="_blank"
      rel="noreferrer"
      key={index}
    >
      <div className="values col tkdn-project-card">{title}</div>
    </a>
  );
}
export default ProjectCard;
