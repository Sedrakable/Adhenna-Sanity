import { defineType } from "sanity";

export default defineType({
  name: "localPath",
  title: "Local Path",
  type: "string",
  options: {
    list: [
      "/",
      "/service",
      "/test-tattoo",
      "/course",
      "/online",
      "/in-person",
      "/portfolio",
      "/henna",
      "/tattoo",
      "/flash",
      "/toiles",
      "/boutique",
      "/blog",
      "/cart",
      "/contact",
      "/legal",
      "/terms-and-conditions",
      "/privacy-policy",
      "/policies",
    ],
  },
});
