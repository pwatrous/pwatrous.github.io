import React from 'react';
import "./WorkItem.scss";

const WorkItem = (props) => {
  return (
    <div className="work-item">
      <p className="work-description">{props.description}</p>
      <a href={props.href} 
         target="_blank" rel="noopener noreferrer"
         className="work-anchor"
         style={{color: props.atColor}}
        >@
        <img 
          className="work-logo" 
          src={props.src}
          alt="work-logo" 
        />
      </a>
    </div>
  );
};

export default WorkItem;