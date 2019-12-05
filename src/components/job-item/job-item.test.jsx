import React from "react";
import { shallow } from "enzyme";
import JobItem from "./job-item.component";

const setUp = (props = {}) => {
  const component = shallow(<JobItem {...props} />);
  return component;
};

describe("Job Item Component", () => {
  let component;
  let mockProps;
  beforeEach(() => {
    mockProps = {
      attributes: {
        title: "xyz",
        description: "This is dummy description for job",
        display_description: "This is dummy display description for job",
        requirements: "This dummy requirements for job"
      }
    };
    component = setUp(mockProps);
  });

  it("Should render without errors", () => {
    const wrapper = component.find('[data-test="jobItemComponent"]');
    expect(wrapper.length).toBe(1);
  });

  it("Should test snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
