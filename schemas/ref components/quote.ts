import { defineType } from "sanity";

export default defineType({
  name: "quote",
  title: "Quote",
  type: "document",
  fields: [
    {
      name: "hiddenTitle",
      title: "Hidden Title",
      type: "string",
    },
    {
      name: "leftText",
      title: "LeftText",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "rightText",
      title: "RightText",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "hiddenTitle",
    },
  },
});
