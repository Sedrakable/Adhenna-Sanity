import { defineType } from "sanity";

export default defineType({
  name: "work",
  title: "Work",
  type: "document",
  fields: [
    {
      name: "hiddenTitle",
      title: "Hidden Title",
      type: "string",
    },
    {
      name: "workType",
      title: "Work Type",
      type: "workType",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "projects",
      title: "Projects",
      type: "array",
      of: [
        {
          type: "flashProject",
        },
        {
          type: "tattooProject",
        },
        {
          type: "hennaProject",
        },
        {
          type: "canvasProject",
        },
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "hiddenTitle",
    },
  },
});