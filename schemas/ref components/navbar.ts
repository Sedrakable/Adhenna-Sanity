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
  ],
  preview: commonPreviewConfig("Navbar"),
});
