import { defineType } from "sanity";

export default defineType({
  name: "workBlock",
  title: "Work Block",
  type: "document",
  fields: [
    {
      name: "hiddenTitle",
      title: "Hidden Title",
      type: "string",
    },
    {
      name: "works",
      title: "Works",
      type: "array",
      of: [{ type: "reference", to: { type: "work" } }],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "hiddenTitle",
    },
  },
});
