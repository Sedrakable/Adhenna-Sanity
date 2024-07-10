import { defineType } from "sanity";

export default defineType({
  name: "aboutBlock",
  title: "About Block",
  type: "document",
  fields: [
    {
      name: "hiddenTitle",
      title: "Hidden Title",
      type: "string",
    },
    {
      name: "content",
      title: "Content",
      type: "object",
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: "customImage",
          title: "Custom Image",
          type: "customImage",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "name",
          title: "Name",
          type: "string",
        },
        {
          name: "title1",
          title: "Title 1",
          type: "fancyText",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "desc1",
          title: "Description 1",
          type: "text",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "title2",
          title: "Title 2",
          type: "string",
        },
        {
          name: "desc2",
          title: "Description 2",
          type: "text",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "hiddenTitle",
    },
  },
});
