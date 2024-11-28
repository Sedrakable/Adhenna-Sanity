import { defineType } from "sanity";

export default defineType({
  name: "policiesPage",
  title: "Policies Page",
  type: "document",
  fields: [
    {
      name: "lang",
      title: "Language",
      type: "language",
      validation: (Rule) => Rule.required(),
    },

    {
      name: "collapsibles",
      title: "Collapsibles",
      type: "array",
      of: [{ type: "reference", to: { type: "collapsible" } }],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
