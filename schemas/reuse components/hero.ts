import { defineType } from "sanity";

export default defineType({
  name: "hero",
  title: "Hero",
  type: "object",
  fields: [
    {
      name: "subTitle",
      title: "Subtitle",
      type: "fancyText",
    },
    {
      name: "title",
      title: "Title",
      type: "fancyText",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "desc",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "customImage",
      title: "Custom Image",
      type: "customImage",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "ctas",
      title: "CTAs",
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
          type: "cta",
        },
      ],
    },
    {
      name: "quote",
      title: "Quote",
      type: "reference",
      to: { type: "quote" },
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
});
