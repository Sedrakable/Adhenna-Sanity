import { defineField, defineType, FieldDefinition } from "sanity";

// const commonFields = [
//   defineField({
//     name: "lang",
//     title: "Language",
//     type: "language",
//     validation: (Rule) => Rule.required(),
//   }),
//   defineField({
//     name: "title",
//     title: "Title",
//     type: "string",
//     validation: (Rule) => Rule.required(),
//   }),
//   defineField({
//     name: "subTitle",
//     title: "Sub Title",
//     type: "text",
//   }),
// ];

// export const cartForm = defineType({
//   name: "cartForm",
//   title: "Cart Form",
//   type: "document",
//   fields: [
//     ...commonFields,

//     {
//       name: "deliveryMethods",
//       title: "Delivery Methods",
//       type: "array",
//       of: [{ name: "deliveryMethod", type: "string" }],
//       validation: (Rule) => Rule.required(),
//     },
//   ],
//   preview: {
//     select: {
//       title: "title",
//       subtitle: "lang",
//     },
//   },
// });

// export const flashForm = defineType({
//   name: "flashForm",
//   title: "Flash Form",
//   type: "document",
//   fields: commonFields,
//   preview: {
//     select: {
//       title: "title",
//       subtitle: "lang",
//     },
//   },
// });

// export const contactForm = defineType({
//   name: "contactForm",
//   title: "Contact Form",
//   type: "document",
//   fields: commonFields,
//   preview: {
//     select: {
//       title: "title",
//       subtitle: "lang",
//     },
//   },
// });

// export const approxForm = defineType({
//   name: "approxForm",
//   title: "Approximative Form",
//   type: "document",
//   fields: commonFields,
//   preview: {
//     select: {
//       title: "title",
//       subtitle: "lang",
//     },
//   },
// });
const commonFields = [
  defineField({
    name: "lang",
    title: "Language",
    type: "language",
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: "title",
    title: "Title",
    type: "string",
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: "subTitle",
    title: "Sub Title",
    type: "text",
  }),
];

const commonPreview = {
  select: {
    title: "title",
    subtitle: "lang",
  },
};

const createBaseForm = (
  name: string,
  title: string,
  additionalFields: FieldDefinition[] = []
) =>
  defineType({
    name,
    title,
    type: "document",
    fields: [...commonFields, ...additionalFields],
    preview: commonPreview,
  });

export const cartForm = createBaseForm("cartForm", "Cart Form", [
  defineField({
    name: "deliveryMethods",
    title: "Delivery Methods",
    type: "array",
    of: [
      {
        name: "deliveryMethod",
        type: "object",
        fields: [
          {
            name: "method",
            title: "Method",
            type: "string",
            validation: (Rule) => Rule.required(),
          },
          {
            name: "price",
            title: "Price",
            type: "number",
            validation: (Rule) => Rule.required().min(0).precision(2), // Ensure price is non-negative and up to 2 decimal places
          },
        ],
      },
    ],
    validation: (Rule) => Rule.required().min(1), // Ensure at least one delivery method
  }),
]);

export const flashForm = createBaseForm("flashForm", "Flash Form");
export const contactForm = createBaseForm("contactForm", "Contact Form");
export const approxForm = createBaseForm("approxForm", "Approximative Form");
