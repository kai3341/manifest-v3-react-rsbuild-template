import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

const config = defineConfig({
  plugins: [pluginReact()],
});

config.source = {
  entry: {
    popup: "./src/apps/popup/index.tsx",
    options: "./src/apps/options/index.tsx",
  },
};

config.performance = {
  chunkSplit: {
    strategy: "all-in-one",
  },
};

config.output = {
  filename: {
    html: "static/html/[name].html",
  },
};

export default config;
