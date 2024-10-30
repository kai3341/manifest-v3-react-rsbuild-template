import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import Popup from "../src/popup/App";

const meta: Meta = {
  title: "Apps/Popup",
  component: Popup,
  argTypes: {},
};

export default meta;

const Template: StoryFn = (args) => <Popup {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
