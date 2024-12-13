import { defineType } from "sanity";

export default defineType({
  name: "display",
  title: "Display",
  type: "document",
  fields: [
    {
      name: "backgroundImage",
      title: "Background Image",
      type: "customImage",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "title",
      title: "Title",
      type: "fancyText",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "subTitle",
      title: "Subtitle",
      type: "string",
    },
    {
      name: "hiddenTitle",
      title: "Hidden Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "desc",
      title: "Description",
      type: "customParagraph",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "ctas",
      title: "CTAs",
      type: "trippleCtas",
    },
  ],
  preview: {
    select: {
      title: "hiddenTitle",
      media: "backgroundImage.image",
    },
  },
});
