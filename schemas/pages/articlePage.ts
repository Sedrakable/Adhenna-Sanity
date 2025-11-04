import { defineType } from "sanity";

export default defineType({
  name: "articlePage",
  title: "Article Page",
  type: "document",
  fields: [
    {
      name: "path",
      title: "Path",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "meta",
      title: "Meta",
      type: "seo",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "lang",
      title: "Language",
      type: "language",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "customImage",
      title: "Custom Image",
      type: "customImage",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "imageText",
      title: "Image Text",
      type: "string",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "desc",
      title: "Description",
      type: "customParagraph",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "date",
      title: "Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: ["tattoo", "henna", "jagua", "toile"],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "content",
      title: "Content",
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
        {
          type: "image",
          options: {
            hotspot: true, // Enables hotspot for smart cropping
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
              description: "Important for SEO and accessibility",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "caption",
              type: "string",
              title: "Caption",
              description: "Optional caption text below the image",
            },
            {
              name: "size",
              type: "string",
              title: "Image Size",
              description: "Choose how wide the image should be",
              options: {
                list: [
                  { title: "Small (30%)", value: "small" },
                  { title: "Medium (50%)", value: "medium" },
                  { title: "Large (75%)", value: "large" },
                  { title: "Full Width (100%)", value: "full" },
                ],
                layout: "radio", // or "dropdown"
              },
              initialValue: "full",
            },
          ],
        },
        // NEW: Add image block support
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "customImage.image",
    },
  },
});
