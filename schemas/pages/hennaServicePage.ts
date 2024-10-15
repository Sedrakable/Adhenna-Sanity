import { defineType } from "sanity";

export default defineType({
  name: "hennaServicePage",
  title: "HennaService Page",
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
      name: "tarifText",
      title: "Tarif Text",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "pricePlans",
      title: "Price Plans",
      type: "array",
      of: [{ type: "pricePlan" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "multiDescriptions",
      title: "Multi Descriptions",
      type: "array",
      of: [{ type: "description" }],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "hiddenTitle",
    },
  },
});
