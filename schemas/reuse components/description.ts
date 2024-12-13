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
    {
      name: "cta",
      title: "Local Call to Action",
      type: "localLink",
    },
  ],
});

export const customDescription = defineType({
  name: "customDescription",
  title: "customDescription",
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
      type: "customParagraph",
    },
    {
      name: "cta",
      title: "Local Call to Action",
      type: "localLink",
    },
  ],
});
