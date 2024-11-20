import { defineType } from "sanity";

export default defineType({
  name: "tattooServicePage",
  title: "TattooService Page",
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
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Heading", value: "h5" },
            { title: "Quote", value: "blockquote" },
          ],
        },
      ],
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
    {
      name: "collapsible",
      title: "Collapsible",
      type: "collapsible",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "hiddenTitle",
    },
  },
});
