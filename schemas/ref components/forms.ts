import { defineType } from "sanity";

export const cartForm = defineType({
  name: "cartForm",
  title: "Cart Form",
  type: "document",
  fields: [
    {
      name: "lang",
      title: "Language",
      type: "language",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "subTitle",
      title: "Sub Title",
      type: "string",
    },
    {
      name: "deliveryMethods",
      title: "Delivery Methods",
      type: "array",
      of: [{ name: "deliveryMethod", type: "string" }],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "lang",
    },
  },
});

export const flashForm = defineType({
  name: "flashForm",
  title: "Flash Form",
  type: "document",
  fields: [
    {
      name: "lang",
      title: "Language",
      type: "language",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "subTitle",
      title: "Sub Title",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "lang",
    },
  },
});

export const contactForm = defineType({
  name: "contactForm",
  title: "Contact Form",
  type: "document",
  fields: [
    {
      name: "lang",
      title: "Language",
      type: "language",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "subTitle",
      title: "Sub Title",
      type: "text",
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "lang",
    },
  },
});
