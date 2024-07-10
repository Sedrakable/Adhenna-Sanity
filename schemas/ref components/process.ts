import { defineType } from "sanity";

export default defineType({
  name: "process",
  title: "Process",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "desc",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "reference", to: { type: "feature" } }],
      validation: (Rule) => Rule.required(),
    },
  ],

  preview: {
    select: {
      title: "title",
      media: "customImage.image",
    },
  },
});
