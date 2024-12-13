import { defineType } from "sanity";

export default defineType({
  name: "testTattooServicePage",
  title: "Test Tattoo Service Page",
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
      name: "display",
      title: "Display",
      type: "display",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "desc",
      title: "Description",
      type: "customParagraph",
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
