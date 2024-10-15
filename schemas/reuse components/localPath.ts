import { defineType } from "sanity";

export default defineType({
  name: "localPath",
  title: "Local Path",
  type: "string",
  options: {
    list: [
      "/home",
      "/service",
      "/test-tattoo",
      "/portfolio",
      "/tattoo",
      "/flash",
      "/henna",
      "/toiles",
      "/course",
      "/online",
      "/in-person",
      "/boutique",
      "/blog",
      "/contact",
      "/cart",
    ],
  },
});
