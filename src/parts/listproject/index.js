import React, { useEffect, useState } from 'react';

import Button from 'elements/button';
import projects from 'assets/data/Projects.json';
import './index.scss';

export default function ListProject() {
  const dataProjects = projects.projects;
  const [listProjects, setListProjects] = useState(dataProjects);
  const [isActive, setIsActive] = useState('All');

  const handleListProjects = (param) => {
    if (param === 'All') {
      setListProjects(dataProjects);
    } else {
      setListProjects(
        dataProjects.filter((project) => project.category === param),
      );
    }
    setIsActive(param);
  };

  return (
    <section className="projects">
      <div className="container">
        <div className="projects__plan">
          <Button
            className={`btn-plan ${isActive === 'All' ? 'active' : ''}`}
            onClick={() => handleListProjects('All')}
          >
            All
          </Button>
          <Button
            className={`btn-plan ${
              isActive === 'Couple Session' ? 'active' : ''
            }`}
            onClick={() => handleListProjects('Couple Session')}
          >
            Couple Session
          </Button>
          <Button
            className={`btn-plan ${isActive === 'Engagement' ? 'active' : ''}`}
            onClick={() => handleListProjects('Engagement')}
          >
            Engagment
          </Button>
          <Button
            className={`btn-plan ${isActive === 'Wedding' ? 'active' : ''}`}
            onClick={() => handleListProjects('Wedding')}
          >
            Wedding
          </Button>
          <Button
            className={`btn-plan ${
              isActive === 'Collaboration' ? 'active' : ''
            }`}
            onClick={() => handleListProjects('Collaboration')}
          >
            Collaboration
          </Button>
        </div>
      </div>

      {listProjects.length ? (
        <div className="containers">
          {listProjects.map((project, i) => (
            <Button key={i} type="link" href={`/detail-project/${project.id}`}>
              <div className="project__card">
                <div className="project__tag">
                  <span>{project.category}</span>
                </div>
                <figure className="img-wrapper">
                  <img
                    src={project.imageUrl}
                    alt={project.name}
                    className="img-cover"
                  />
                </figure>

                <div className="project__meta-wrapper">
                  <h5>{project.name}</h5>
                </div>
              </div>
            </Button>
          ))}
        </div>
      ) : (
        <div className="empty">Tidak Ada Data</div>
      )}
    </section>
  );
}
