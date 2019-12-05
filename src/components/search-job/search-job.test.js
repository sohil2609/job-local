import React from "react";
import { shallow } from "enzyme";
import SearchJob from "./search-job.component";

const setUp = (props = {}) => {
  const component = shallow(<SearchJob {...props} />);
  return component;
};

describe("Job Item Component", () => {
  let component;
  let mockProps;
  beforeEach(() => {
    mockProps = {
      query: "xyz",
      onChange: jest.fn(),
      onSubmit: jest.fn()
    };
    component = setUp(mockProps);
  });
  it("Should test snapshot", () => {
    expect(component).toMatchSnapshot();
  });

  it("Should render button without errors", () => {
    const wrapper = component.find('[data-test="searchButton"]');
    expect(wrapper.length).toBe(1);
  });

  it("Should render text input without errors", () => {
    const wrapper = component.find('[data-test="textInput"]');
    expect(wrapper.length).toBe(1);
  });

  it("Should render button without errors", () => {
    const wrapper = component.find('[data-test="textInput"]');
    wrapper.simulate("change", { target: { value: "abc" } });
    expect(mockProps.onChange.mock.calls.length).toBe(1);
  });
});
