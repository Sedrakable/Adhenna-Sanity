import { defineType } from "sanity";

export default defineType({
  name: "boutiquePage",
  title: "Boutique Page",
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
      name: "hero",
      title: "Hero",
      type: "hero",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "displays",
      title: "Displays",
      type: "array",
      of: [{ type: "reference", to: { type: "display" } }],
    },
    {
      name: "desc",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "products",
      title: "Products",
      type: "array",
      of: [{ type: "reference", to: { type: "product" } }],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "hiddenTitle",
    },
  },
});
