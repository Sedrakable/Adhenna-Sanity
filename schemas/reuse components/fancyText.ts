import { defineField, defineType } from "sanity";

export default defineType({
  name: "fancyText",
  title: "Fancy Text",
  type: "object",
  fields: [
    defineField({
      name: "part1",
      title: "Part 1",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "part2",
      title: "Part 2",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "part3",
      title: "Part 3",
      type: "string",
    }),
  ],
});
