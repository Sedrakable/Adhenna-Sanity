import { defineType } from "sanity";

export default defineType({
  name: "processBlock",
  title: "Process Block",
  type: "document",
  fields: [
    {
      name: "hiddenTitle",
      title: "Hidden Title",
      type: "string",
    },
    {
      name: "processes",
      title: "Processes",
      type: "array",
      of: [{ type: "reference", to: { type: "process" } }],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "hiddenTitle",
    },
  },
});
