import { defineType } from "sanity";

export default defineType({
  name: "bigCTA",
  title: "Big CTA",
  type: "document",
  fields: [
    {
      name: "hiddenTitle",
      title: "Hidden Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "backgroundImage",
      title: "Background Image",
      type: "customImage",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "hiddenTitle",
      media: "backgroundImage.image",
    },
  },
});
