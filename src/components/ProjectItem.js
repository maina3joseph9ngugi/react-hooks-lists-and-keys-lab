import React from "react";

function ProjectItem({ name, about, technologies }) {
  let technologieslist = technologies.map((technology, ind)=><span key={ind}>{technology}</span>)
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        {technologieslist}
      </div>
    </div>
  );
}

export default ProjectItem;