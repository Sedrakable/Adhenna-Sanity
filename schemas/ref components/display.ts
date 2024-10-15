import { defineType } from "sanity";
import { heroFields } from "./hero";

export default defineType({
  name: "display",
  title: "Display",
  type: "document",
  fields: [
    ...heroFields,
    {
      name: "hiddenTitle",
      title: "Hidden Title",
      type: "string",
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
