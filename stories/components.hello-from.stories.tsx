import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import {
  HelloFrom,
  HelloFromProps,
} from "../src/components/hello-from/hello-from";

const meta: Meta = {
  title: "Components/HelloFrom",
  component: HelloFrom,
  argTypes: {
    source: {
      type: "string",
    },
  },
};

export default meta;

const Template: StoryFn<HelloFromProps> = (args) => <HelloFrom {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  source: "storybook",
};
