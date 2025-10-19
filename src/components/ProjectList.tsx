import React from 'react';
import { PROJECTS } from '../data/projects';

interface ProjectListProps {
  projectKeys: string[];
  showDetailView: boolean;
}

const ProjectList: React.FC<ProjectListProps> = ({ projectKeys, showDetailView }) => {
  if (projectKeys.length === 0) {
    return (
      <div style={{ textAlign: 'center' }}>
        啥也没有www
      </div>
    );
  }

  return (
    <div id="projects">
      {projectKeys.map(key => {
        const project = PROJECTS[key];
        return (
          <div key={key} id={key}>
            {/* 标题区域 */}
            <div>
              {project.title.map((titleText, index) => (
                <h3 key={index} dangerouslySetInnerHTML={{ __html: titleText }} />
              ))}
            </div>

            {/* 描述列表 */}
            <ul className={showDetailView ? '' : 'hidden'}>
              {project.desc.map((desc, index) => (
                <li
                  key={index}
                  className="searchable-desc"
                  dangerouslySetInnerHTML={{ __html: desc }}
                />
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectList;
