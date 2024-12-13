import { defineType } from "sanity";

export default defineType({
  name: "onlineCoursePage",
  title: "Online Course Page",
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
      name: "desc",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "pricePlan",
      title: "Price Plan",
      type: "pricePlan",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "video",
      title: "Video",
      type: "video",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "display" }],
    },
  ],
  preview: {
    select: {
      title: "hiddenTitle",
    },
  },
});
