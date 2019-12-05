import React from "react";
import { shallow } from "enzyme";
import Header from "./header.component";

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe("Header Component", () => {
  let component;
  let mockProps;
  beforeEach(() => {
    mockProps = {
      title: "Job Locals"
    };
    component = setUp(mockProps);
  });

  it("Should render without errors", () => {
    const wrapper = component.find('[data-test="headerComponent"]');
    expect(wrapper.length).toBe(1);
  });

  it("Should test snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
