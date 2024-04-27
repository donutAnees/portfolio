import React from "react";

export default function ProjectDetails({ project }) {
  return (
    <div className="p-4 font-chicago overflow-scroll">
        <div className="flex justify-between">
        <h1 className="text-lg font-bold mb-2">{project.title}</h1>
        {project.github && (
            <div className="text-center">
            <a
                href={project.github}
                className="text-blue-500 hover:underline flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
            >
                <svg
                className="w-6 h-6 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.478 2 12.002c0 4.417 2.868 8.166 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.461-1.11-1.461-.908-.621.069-.609.069-.609 1.004.07 1.532 1.032 1.532 1.032.893 1.532 2.341 1.09 2.91.833.092-.647.35-1.09.636-1.34-2.22-.253-4.555-1.11-4.555-4.943 0-1.09.39-1.982 1.03-2.68-.104-.253-.447-1.27.098-2.647 0 0 .841-.27 2.75 1.026a9.588 9.588 0 012.5-.336c.849.004 1.705.115 2.5.336 1.908-1.296 2.748-1.026 2.748-1.026.547 1.378.204 2.394.1 2.647.641.698 1.03 1.59 1.03 2.68 0 3.841-2.338 4.687-4.565 4.935.36.31.68.921.68 1.855 0 1.338-.012 2.418-.012 2.747 0 .267.18.58.688.482A10.012 10.012 0 0022 12.002C22 6.478 17.523 2 12 2z"
                />
                </svg>
                View on GitHub
            </a>
            </div>
        )}
        </div>
      <p className="text-gray-700 mb-2">{project.description}</p>
      <div className="mb-4">
        <h3 className="text-l font-semibold mb-2">Technologies Used:</h3>
        <ul className="list-disc pl-5">
          {project.technologies.map((tech, index) => (
            <li key={index} className="py-2">{tech}</li>
          ))}
        </ul>
      </div>
      {project.links &&
      <div>
        <h3 className="text-lg font-semibold mb-2">Links:</h3>
        <ul className="list-disc pl-5">
          {project.links.map((link, index) => (
            <li key={index} className="py-2">
              <a href={link.url} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    }
    </div>
  );
}
