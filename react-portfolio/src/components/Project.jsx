import React from 'react';

function Project({ title, image, deployedLink, githubLink }) {
  return (
    <div className="project">
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <p>
        <a href={deployedLink} target="_blank" rel="noopener noreferrer">Live Site</a> | 
        <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
      </p>
    </div>
  );
}

export default Project;