import { defineType, defineField } from "sanity";

export const projectFields = [
  defineField({
    name: "image",
    title: "Image",
    type: "customImage",
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: "year",
    title: "Year",
    type: "year",
    validation: (Rule) => Rule.required(),
  }),
];

export const flashProject = defineType({
  name: "flashProject",
  title: "Flash Project",
  type: "object",
  fields: [
    ...projectFields,
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "reserved",
      title: "reserved",
      type: "boolean",
    },
    {
      name: "style",
      title: "Style",
      type: "flashStyle",
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "image.image",
    },
  },
});

export const tattooProject = defineType({
  name: "tattooProject",
  title: "Tattoo Project",
  type: "object",
  fields: [
    ...projectFields,
    {
      name: "bodyPart",
      title: "Body Part",
      type: "bodyParts",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "image.alt",
      media: "image.image",
    },
  },
});

export const hennaProject = defineType({
  name: "hennaProject",
  title: "Henna Project",
  type: "object",
  fields: [
    ...projectFields,
    {
      name: "hennaColor",
      title: "hennaColor",
      type: "hennaColor",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "image.alt",
      media: "image.image",
    },
  },
});

export const canvasProject = defineType({
  name: "canvasProject",
  title: "Canvas Project",
  type: "object",
  fields: [
    ...projectFields,
    {
      name: "reserved",
      title: "reserved",
      type: "boolean",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "price",
      title: "price",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "image.alt",
      media: "image.image",
    },
  },
});
