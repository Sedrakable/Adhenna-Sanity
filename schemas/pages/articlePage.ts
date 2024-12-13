import { defineType } from "sanity";

export default defineType({
  name: "articlePage",
  title: "Article Page",
  type: "document",
  fields: [
    {
      name: "path",
      title: "Path",
      type: "string",
      validation: (Rule) => Rule.required(),
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
      name: "customImage",
      title: "Custom Image",
      type: "customImage",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "imageText",
      title: "Image Text",
      type: "string",
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
      type: "customParagraph",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "date",
      title: "Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: ["tattoo", "henna", "jagua", "toile"],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Heading", value: "h5" },
            { title: "Quote", value: "blockquote" },
          ],
        },
      ],
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
