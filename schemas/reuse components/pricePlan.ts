import { defineType } from "sanity";

export default defineType({
  name: "pricePlan",
  title: "Price Plan",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "customImage",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "price",
      title: "Price",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "desc",
      title: "Description",
      type: "text",
    },
    {
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "cta",
      title: "Local Call to Action",
      type: "localLink",
    },
    {
      name: "externalLink",
      title: "External Link",
      type: "externalLink",
    },
  ],
});
