import React from "react";
import { Story, Meta } from "@storybook/react";

import Todo, { TodoProps } from "./todo";

export default {
  title: "Example/Todo",
  component: Todo,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<TodoProps> = (args) => <Todo {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  id: 1,
  title: "Todo",
};
