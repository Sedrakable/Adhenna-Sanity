import { defineType } from "sanity";

export default defineType({
  name: "portfolioPage",
  title: "Portfolio Page",
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
      name: "works",
      title: "Works",
      type: "array",
      of: [{ type: "reference", to: { type: "workPage" } }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "history",
      title: "History",
      type: "reference",
      to: { type: "history" },
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "hiddenTitle",
      media: "hero.backgroundImage.image",
    },
  },
});
