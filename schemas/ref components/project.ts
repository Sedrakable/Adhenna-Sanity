import { defineType, defineField } from "sanity";

// Utility to generate a random string
const generateRandomString = () => {
  const randomChars = "abcdefghijklmnopqrstuvwxyz0123456789";
  return Array.from({ length: 6 }, () =>
    randomChars.charAt(Math.floor(Math.random() * randomChars.length))
  ).join("");
};

export const projectFields = [
  defineField({
    name: "slug",
    title: "Slug",
    type: "slug",
    options: {
      source: () => {
        return generateRandomString(); // Always generate a random string
      },
      slugify: (input: string) =>
        input
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[&/\\#,+()$~%.'":*?<>{}]/g, ""),
    },
    validation: (Rule) => Rule.required(),
  }),
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
  type: "document",
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
      title: "Reserved",
      type: "boolean",
      validation: (Rule) =>
        Rule.custom((reserved, context) => {
          // Get the repeatable value from the current document
          const repeatable = context.document?.repeatable;
          // If both reserved and repeatable are true, return error
          if (reserved && repeatable) {
            return "Cannot be both reserved and repeatable";
          }
          return true;
        }),
    },
    {
      name: "repeatable",
      title: "Repeatable",
      type: "boolean",
      validation: (Rule) =>
        Rule.custom((repeatable, context) => {
          // Get the reserved value from the current document
          const reserved = context.document?.reserved;
          // If both repeatable and reserved are true, return error
          if (repeatable && reserved) {
            return "Cannot be both repeatable and reserved";
          }
          return true;
        }),
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
  type: "document",
  fields: [
    ...projectFields,
    {
      name: "bodyPart",
      title: "Body Part",
      type: "bodyParts",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "tattooColor",
      title: "Tattoo Color",
      type: "tattooColor",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "tattooHealed",
      title: "Tattoo Healed",
      type: "boolean",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "tattooCoverUp",
      title: "Tattoo CoverUp",
      type: "boolean",
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
  type: "document",
  fields: [
    ...projectFields,
    {
      name: "hennaColor",
      title: "Henna Color",
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

export const toilesProject = defineType({
  name: "toilesProject",
  title: "Toiles Project",
  type: "document",
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
