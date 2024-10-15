import { defineType } from "sanity";

export default defineType({
  name: "history",
  title: "History",
  type: "document",
  fields: [
    {
      name: "hiddenTitle",
      title: "Hidden Title",
      type: "string",
    },
    {
      name: "text",
      title: "Text",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "hiddenTitle",
    },
  },
});
