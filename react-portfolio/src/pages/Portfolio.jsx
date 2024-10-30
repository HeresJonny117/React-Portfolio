import React from 'react';
import Project from '../components/Project';

function Portfolio() {
  return (
    <section>
      <h2>Portfolio</h2>
      <div className="project-grid">
        <Project title="Project One" image="/path-to-image.jpg" deployedLink="https://project-url.com" githubLink="https://github.com/yourusername/project-repo" />
        <Project title="Project Two" image="/path-to-image.jpg" deployedLink="https://project-url.com" githubLink="https://github.com/yourusername/project-repo" />
      </div>
    </section>
  );
}

export default Portfolio;