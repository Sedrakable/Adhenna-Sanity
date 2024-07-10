import { defineType } from "sanity";

export default defineType({
  name: "localPath",
  title: "Local Path",
  type: "string",
  options: {
    list: [
      "/home",
      "/branding",
      "/web-design",
      "/total-package",
      "/custom-work",
      "/about-work",
      "/blog",
      "/contact",
      "/terms-and-conditions",
      "/privacy-policy",
    ],
  },
});
