import { defineType } from "sanity";

export default defineType({
  name: "work",
  title: "Work",
  type: "document",
  fields: [
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "meta",
      title: "Meta",
      type: "seo",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "thumbnailImage",
      title: "Thumbnail Image",
      type: "customImage",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "customImages",
      title: "Custom Images",
      type: "array",
      of: [{ type: "customImage" }],
      validation: (Rule) => Rule.required().min(5).max(30),
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "desc",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "primaryLink",
      title: "Primary Link",
      type: "cta",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "secondaryLinks",
      title: "Secondary Links",
      type: "array",
      of: [{ type: "cta" }],
    },
    {
      name: "behanceProjectId",
      title: "Behance Project Id",
      type: "string",
    },
    {
      name: "kickstarterProjectlink",
      title: "Kickstarter Project Link",
      type: "string",
    },
  ],
});
