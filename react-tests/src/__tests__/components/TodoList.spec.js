import React from "react";
import { mount } from "enzyme";

import TodoList from "../../TodoList";

it("shoud render the list and button", () => {
  const wrapper = mount(<TodoList />);

  expect(wrapper.find("ul").exists()).toBe(true);
  expect(wrapper.find("input[name='todo']").exists()).toBe(true);
  expect(wrapper.find("button").exists()).toBe(true);
});

it("should be able to add new todo", () => {
  const wrapper = mount(<TodoList />);

  wrapper.find("input[name='todo']").simulate("change", {
    target: {
      value: "Todo"
    }
  });

  wrapper.find("button").simulate("click");

  expect(wrapper.find("ul").contains(<li>Todo</li>)).toBe(true);
});
