import React from "react";
import JobItem from "../job-item/job-item.component";
import { JobListComponent } from "./job-listing.styles";

const JobList = ({ jobs }) => {
  return (
    <JobListComponent className="job-list-container">
      {jobs.map(job => {
        return <JobItem key={job.id} {...job} />;
      })}
    </JobListComponent>
  );
};

export default JobList;
