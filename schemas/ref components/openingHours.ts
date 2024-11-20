import { defineType } from "sanity";

export default defineType({
  name: "openingHours",
  title: "Opening Hours",
  type: "document",
  fields: [
    {
      name: "hours",
      title: "Hours",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "dayOfweek",
              title: "Day of the Week",
              type: "string",
              options: {
                list: [
                  { title: "Monday", value: "monday" },
                  { title: "Tuesday", value: "tuesday" },
                  { title: "Wednesday", value: "wednesday" },
                  { title: "Thursday", value: "thursday" },
                  { title: "Friday", value: "friday" },
                  { title: "Saturday", value: "saturday" },
                  { title: "Sunday", value: "sunday" },
                ],
              },
            },
            {
              name: "startTime",
              title: "Start Time",
              type: "string",
              description: "Enter the opening time (e.g., 10:00)",
              validation: (Rule) =>
                Rule.regex(/^\d{1,2}:\d{2}$/, {
                  name: "time", // Error message name
                  invert: false, // Boolean to allow/disallow
                }),
            },
            {
              name: "endTime",
              title: "End Time",
              type: "string",
              description: "Enter the closing time (e.g., 17:00)",
              validation: (Rule) =>
                Rule.regex(/^\d{1,2}:\d{2}$/, {
                  name: "time",
                  invert: false,
                }),
            },
          ],
          preview: {
            select: {
              title: "dayOfweek",
              subtitle: "startTime",
              endTime: "endTime",
            },
            prepare({ title, subtitle, endTime }) {
              return {
                title: title.charAt(0).toUpperCase() + title.slice(1),
                subtitle: `${subtitle} - ${endTime}`,
              };
            },
          },
        },
      ],
    },
  ],
});
