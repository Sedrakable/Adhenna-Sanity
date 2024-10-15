import { defineType } from "sanity";

export default defineType({
  name: "workType",
  title: "workType",
  type: "string",
  options: {
    list: ["henna", "toiles", "flash", "tattoo"],
  },
});

export const bodyParts = defineType({
  name: "bodyParts",
  title: "Body Parts",
  type: "string",
  options: {
    list: ["hand", "arm", "foot", "leg", "back", "chest", "face"],
  },
});

export const hennaColor = defineType({
  name: "hennaColor",
  title: "Henna Color",
  type: "string",
  options: {
    list: ["jagua", "henna", "hennagua"],
  },
});

export const flashStyle = defineType({
  name: "flashStyle",
  title: "Flash Style",
  type: "string",
  options: {
    list: ["ornamental", "floral", "mandala", "animal", "character", "other"],
  },
});

export const year = defineType({
  name: "year",
  title: "Year",
  type: "number",
  validation: (Rule) =>
    Rule.required()
      .min(1900)
      .max(new Date().getFullYear())
      .error("Please enter a valid year."),
});
