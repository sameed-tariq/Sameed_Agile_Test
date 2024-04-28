const { z } = require("zod");

const bookSchema = z.object({
  title: z
    .string({ required_error: "Title is required!" })
    .trim()
    .min(3, { message: "Name must be atleast of 3 characters." })
    .max(255, { message: "Name must not be more than 255 characters." }),
  author: z
    .string({ required_error: "Author is required!" })
    .trim()
    .min(3, { message: "Author must be atleast of 3 characters." })
    .max(255, { message: "Author must not be more than 255 characters." }),
  description: z
    .string({ required_error: "Description is required!" })
    .trim()
    .min(4, { message: "Description must be atleast of 4 characters." })
    .max(255, { message: "Description must not be more than 255 characters." }),
  publishedYear: z
    .number()
    .int()
    .min(1000, { message: "Published year must be at least 1000" })
    .max(new Date().getFullYear(), {
      message: "Published year must not exceed the current year",
    }),
  isbn: z
    .string()
    .regex(/^(\d{3})-(\d)-(\d{2})-(\d{6})-(\d)$/, {
      message: "Invalid ISBN format",
    })
    .trim(),
});

module.exports = bookSchema;
