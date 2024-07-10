import { defineType } from "sanity";

export default defineType({
  name: "aboutPage",
  title: "About Page",
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
      name: "about",
      title: "About",
      type: "reference",
      to: { type: "aboutBlock" },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "values",
      title: "Values",
      type: "reference",
      to: { type: "valuesBlock" },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "work",
      title: "Work",
      type: "reference",
      to: { type: "workBlock" },
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "hiddenTitle",
    },
  },
});
