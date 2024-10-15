import { defineType } from "sanity";

export default defineType({
  name: "review",
  title: "Review",
  type: "object",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "message",
      title: "Message",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
  ],
});
