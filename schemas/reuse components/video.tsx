import { defineType } from "sanity";

export default defineType({
  name: "video",
  title: "Video",
  type: "object",
  fields: [
    {
      name: "videoFile",
      title: "Video File",
      type: "file",
      options: {
        accept: "video/*",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "externalVideo",
      title: "External Video URL",
      type: "url",
      description: "For YouTube or Vimeo videos",
    },
    {
      name: "caption",
      title: "Caption",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "thumbnail",
      title: "Thumbnail",
      type: "customImage",
      validation: (Rule) => Rule.required(),
    },
  ],
});
