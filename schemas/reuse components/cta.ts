import { defineType } from "sanity";

export default defineType({
  name: "externalLink",
  title: "External Link",
  type: "object",
  fields: [
    {
      name: "text",
      title: "Text",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "link",
      title: "Link",
      type: "string",
    },
  ],
});

export const trippleCtas = defineType({
  name: "trippleCtas",
  title: "Tripple Ctas",
  type: "object",
  fields: [
    {
      name: "cta1",
      title: "CTA 1",
      type: "localLink",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "cta2",
      title: "CTA 2",
      type: "localLink",
    },
    {
      name: "cta3",
      title: "CTA 3",
      type: "localLink",
    },
  ],
});
