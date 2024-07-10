import { defineType } from "sanity";

export default defineType({
  name: "feature",
  title: "Feature",
  type: "document",
  fields: [
    {
      name: "customImage",
      title: "Custom Image",
      type: "customImage",
      validation: (Rule) => Rule.required(),
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
  ],

  preview: {
    select: {
      title: "title",
      media: "customImage.image",
    },
  },
});
