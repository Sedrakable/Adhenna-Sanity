import { defineType } from "sanity";

export default defineType({
  name: "blogBlock",
  title: "Blog Block",
  type: "document",
  fields: [
    {
      name: "hiddenTitle",
      title: "Hidden Title",
      type: "string",
    },
    {
      name: "articles",
      title: "Articles",
      type: "array",
      of: [{ type: "reference", to: { type: "articlePage" } }],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "hiddenTitle",
    },
  },
});
