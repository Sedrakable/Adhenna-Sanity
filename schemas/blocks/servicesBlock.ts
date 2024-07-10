import { defineType } from "sanity";

export default defineType({
  name: "servicesBlock",
  title: "Services Block",
  type: "document",
  fields: [
    {
      name: "hiddenTitle",
      title: "Hidden Title",
      type: "string",
    },
    {
      name: "services",
      title: "Services",
      type: "array",
      of: [{ type: "reference", to: { type: "servicePage" } }],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "hiddenTitle",
    },
  },
});
