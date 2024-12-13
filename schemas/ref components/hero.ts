import { defineType, defineField } from "sanity";

export const heroFields = [
  defineField({
    name: "backgroundImage",
    title: "Background Image",
    type: "customImage",
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: "title",
    title: "Title",
    type: "fancyText",
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: "subTitle",
    title: "Subtitle",
    type: "string",
  }),
  defineField({
    name: "desc",
    title: "Description",
    type: "text",
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: "ctas",
    title: "CTAs",
    type: "trippleCtas",
  }),
];

export const hero = defineType({
  name: "hero",
  title: "Hero",
  type: "object",
  fields: heroFields,
  preview: {
    select: {
      title: "hiddenTitle",
      media: "backgroundImage.image",
    },
  },
});

export const homeHero = defineType({
  name: "homeHero",
  title: "Home Hero",
  type: "document",
  fields: [
    ...heroFields,
    {
      name: "hiddenTitle",
      title: "Hidden Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "foregroundImage",
      title: "Foreground Image",
      type: "customImage",
    },
    {
      name: "subTitle2",
      title: "Subtitle 2",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "hiddenTitle",
      media: "backgroundImage.image",
    },
  },
});
