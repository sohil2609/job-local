import React, { useState } from "react";
import { JobItemComponent } from "./job-item.styles";

const JobItem = props => {
  const [showRequirements, setshowRequirements] = useState(false);
  const [showDescription, setshowDescription] = useState(false);
  const {
    title,
    description,
    display_description,
    requirements
  } = props.attributes;
  return (
    <JobItemComponent className="card" data-test="jobItemComponent">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <div className="job-details">
          {description && (
            <span
              className="card-link"
              onClick={() => setshowDescription(!showDescription)}
            >
              {showDescription ? "Hide Description" : "Show Description"}
            </span>
          )}
          {requirements && (
            <span
              className="card-link"
              onClick={() => setshowRequirements(!showRequirements)}
            >
              {showRequirements ? "Hide Requirements" : "Show Requirements"}
            </span>
          )}
        </div>
        {showDescription && display_description && (
          <div dangerouslySetInnerHTML={{ __html: description }} />
        )}

        {showRequirements && (
          <div dangerouslySetInnerHTML={{ __html: requirements }} />
        )}
      </div>
    </JobItemComponent>
  );
};

export default JobItem;
