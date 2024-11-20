import { defineType } from "sanity";

export default defineType({
  name: "legalPage",
  title: "Legal Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "lang",
      title: "Language",
      type: "language",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "path",
      title: "Path",
      type: "localPath",
      options: {
        list: [
          { title: "Terms & Conditions", value: "terms-and-conditions" },
          { title: "Privacy Policy", value: "privacy-policy" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },

    {
      name: "data",
      title: "Data",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Heading", value: "h5" },
            { title: "Quote", value: "blockquote" },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
