import { useState } from 'react';

const ProjectList = (name) => {
  const [projects] = useState([
    { name: 'Air Pollution' },
    { name: 'Park Place' },
  ]);

  const allProjects = projects.filter((project) => project.name === name);

  return (
    <>
      <div>
        {allProjects.map((image, i) => (
          <img
            src={require(`../assets/images/projects/${i}.jpg`).default}
            alt={image.name}
            className="card-img"
            key={image.name}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectList;
