import { defineType } from "sanity";

export default defineType({
  name: "inPersonCoursePage",
  title: "In Person Course Page",
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
      name: "infoText",
      title: "Info Text",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    },
    // {
    //   name: "multiDescriptions",
    //   title: "Multi Descriptions",
    //   type: "array",
    //   of: [{ type: "description" }],
    //   validation: (Rule) => Rule.required(),
    // },
    {
      name: "multiDescriptions",
      title: "Multi Descriptions",
      type: "array",
      of: [{ type: "customDescription" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Image",
      type: "customImage",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "pricePlans1",
      title: "Price Plans 1",
      type: "array",
      of: [{ type: "pricePlan" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "experienceText",
      title: "Experience Text",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "pricePlans2",
      title: "Price Plans 2",
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
