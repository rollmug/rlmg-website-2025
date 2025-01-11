/** @type { import('@storybook/nextjs').StorybookConfig } */
const path = require('path');
const config = {
  stories: ["../src/**/*.mdx", '../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  features: {
    backgroundsStoryGlobals: true,
  },
  managerHead: (head) => `
    ${head}
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet">
  `,
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    'storybook-addon-paddings',
    {
      name: "@storybook/addon-storysource",
      options: {
        rule: {
          test: [/\.stories\.jsx?$/], // This is default
          include: [path.resolve(__dirname, '../src/app/components')],
        },
        loaderOptions: {
          injectStoryParameters: false,
          // injectDecorator: true,
          prettierConfig: { printWidth: 80, singleQuote: false },
        },
      },
    },
    "@storybook/addon-styling-webpack"
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag"
  },
  staticDirs: ["../public"],
  webpackFinal: async (config, { configType }) => {
    config.resolve.modules = [path.resolve(__dirname, ".."), "node_modules"];
    config.resolve.alias = {
      ...config.resolve.alias,
      "@/app": path.resolve(__dirname, "../src/app"),
      "@/lib": path.resolve(__dirname, "../src/lib"),
      "@/stories": path.resolve(__dirname, "../src/stories"),
      "@/components": path.resolve(__dirname, "../src/components"),
    };

    return config;
  }
};
export default config;
