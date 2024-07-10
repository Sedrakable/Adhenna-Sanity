import { defineType } from "sanity";

export default defineType({
  name: "valuesBlock",
  title: "Values Block",
  type: "document",
  fields: [
    {
      name: "hiddenTitle",
      title: "Hidden Title",
      type: "string",
    },
    {
      name: "values",
      title: "Values",
      type: "array",
      of: [{ type: "value" }],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "hiddenTitle",
    },
  },
});
