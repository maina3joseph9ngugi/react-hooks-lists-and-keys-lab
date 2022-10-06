import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  let projecList = projects.map(project => {
    const { id, name, about, technologies } = project;
    return (
      <ProjectItem
        key={id}
        name={name}
        about={about}
        technologies={technologies}
      />)
  });
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projecList}</div>
    </div>
  );
}

export default ProjectList;