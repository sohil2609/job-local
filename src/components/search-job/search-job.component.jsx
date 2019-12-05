import React from "react";
import TextInput from "../../common/text-input/text-input.component";
import CustomButton from "../../common/custom-button/custom-button.component";
import { JobFormComponent } from "./search-job.styles";

const SearchJob = ({ query, onChange, onSubmit }) => (
  <JobFormComponent onSubmit={onSubmit} data-test="jobFormComponent">
    <TextInput
      value={query}
      name={"query"}
      onChange={onChange}
      placeholder="Search Jobs"
      data-test="textInput"
    />
    <CustomButton
      extraCssClass="btn-primary"
      type="submit"
      text="Search"
      data-test="searchButton"
    />
  </JobFormComponent>
);

export default SearchJob;
