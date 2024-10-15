import { defineType } from "sanity";

export default defineType({
  name: "cartPage",
  title: "Cart Page",
  type: "document",
  fields: [
    {
      name: "hiddenTitle",
      title: "Hidden Title",
      type: "string",
    },
    {
      name: "meta",
      title: "Meta",
      type: "seo",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "lang",
      title: "Language",
      type: "language",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "collapsible",
      title: "Collapsible",
      type: "collapsible",
    },
  ],
  preview: {
    select: {
      title: "hiddenTitle",
    },
  },
});
