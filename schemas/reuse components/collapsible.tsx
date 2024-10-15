import { defineType } from "sanity";

export default defineType({
  name: "collapsible",
  title: "Collapsible",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "questions",
      title: "Questions",
      type: "array",
      of: [
        {
          type: "object",
          name: "questionAnswer",
          fields: [
            {
              name: "question",
              title: "Question",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "answer",
              title: "Answer",
              type: "text",
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    },
  ],
});
