import React from "react";

const projects = [
  {
    name: "Project 1",
    description: "This is a description for Project 1.",
    link: "#",
  },
  {
    name: "Project 2",
    description: "This is a description for Project 2.",
    link: "#",
  },
  {
    name: "Project 3",
    description: "This is a description for Project 3.",
    link: "#",
  },
];

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">My Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">{project.name}</h2>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="text-blue-500 hover:text-blue-700 font-semibold"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
