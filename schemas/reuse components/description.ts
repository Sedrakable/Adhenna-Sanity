import { defineType } from "sanity";

export default defineType({
  name: "description",
  title: "Description",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "desc",
      title: "Description",
      type: "text",
    },
  ],
});
