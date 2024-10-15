import { defineType } from "sanity";

export default defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "lang",
      title: "Language",
      type: "language",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "path",
      title: "Path",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "customImage" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "price",
      title: "price",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "quantityDesc",
      title: "Quantity Description",
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
      name: "collapsible",
      title: "Collapsible",
      type: "collapsible",
    },
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "lang",
      media: "images.0.image",
    },
  },
});
