import { defineType } from "sanity";

export default defineType({
  name: "homePage",
  title: "Home Page",
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
      name: "homeHero",
      title: "Home Hero",
      type: "reference",
      to: { type: "homeHero" },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "services",
      title: "Services",
      type: "array",
      of: [{ type: "reference", to: { type: "display" } }],
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
    {
      name: "reviews",
      title: "Reviews",
      type: "array",
      of: [{ type: "review" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "bigCTA",
      title: "Big CTA",
      type: "reference",
      to: { type: "bigCTA" },
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "hiddenTitle",
    },
  },
});
