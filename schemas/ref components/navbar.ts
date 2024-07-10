import { defineType } from "sanity";
import { commonPreviewConfig } from "../previewConfig";

export default defineType({
  name: "navbar",
  title: "Navbar",
  type: "document",
  fields: [
    {
      name: "lang",
      title: "Language",
      type: "language",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "links",
      title: "links",
      type: "array",
      of: [
        {
          type: "localLink",
          // This handles single Cta references
        },
        {
          type: "object", // This handles arrays of Cta references
          fields: [
            { name: "title", title: "Title", type: "string" },
            {
              name: "ctaArray",
              title: "Cta Array",
              type: "array",
              of: [{ type: "localLink" }],
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: commonPreviewConfig("Navbar"),
});
