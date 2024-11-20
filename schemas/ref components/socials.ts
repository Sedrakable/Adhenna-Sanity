import { defineType } from "sanity";
import { commonPreviewConfig } from "../previewConfig";

export default defineType({
  name: "socials",
  title: "Socials",
  type: "document",
  fields: [
    {
      name: "links",
      title: "Social Links",
      type: "array",
      of: [{ type: "externalLink" }],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: commonPreviewConfig("Socials"),
});
