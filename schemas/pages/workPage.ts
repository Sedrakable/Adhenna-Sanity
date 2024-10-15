import { defineType } from "sanity";

export default defineType({
  name: "workPage",
  title: "Work Page",
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
      name: "path",
      title: "Path",
      type: "localPath",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "reserve",
      title: "Reserve",
      type: "boolean",
    },
    {
      name: "hero",
      title: "Hero",
      type: "hero",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "work",
      title: "Work",
      type: "reference",
      to: { type: "work" },
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "hiddenTitle",
      media: "image.image",
    },
  },
});
