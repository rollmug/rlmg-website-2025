import { EmailFooter } from "./EmailFooter";

export default {
  title: "UI Elements/Email Footer",
  component: EmailFooter,
  layout: "fullscreen",
  paddings: {
    values: [
      { name: "Small", value: "16px" },
      { name: "Medium", value: "32px" },
      { name: "Large", value: "64px" },
    ],
    default: "Small",
  },
  globals: {
    backgrounds: { value: "light" },
  },
  args: {
    name: "Dave Kobrenski",
    title: "Full Stack Developer",
    pronouns: "he/him",
    officeNum: "617.926.8300",
    mobileNum: "401.632.2005",
  },
};

export const FooterTemplate = {
  args: {
    name: "Dave Kobrenski",
    title: "Full Stack Developer",
    pronouns: "he/him",
    officeNum: "617.926.8300",
    mobileNum: "401.632.2005",
  },
};
