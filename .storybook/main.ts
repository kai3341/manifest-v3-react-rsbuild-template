import { StorybookConfig } from "storybook-react-rsbuild";

const config: StorybookConfig = {
  framework: "storybook-react-rsbuild",
  rsbuildFinal: (config) => {
    // Customize the final Rsbuild config here
    return config;
  },
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
};

export default config;
