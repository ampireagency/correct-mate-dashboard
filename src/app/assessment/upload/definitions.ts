import { z } from "zod";

export const uploadFormSchema = z.object({
  subject: z.string().min(1, { message: "Subject is required." }),
  answerKey: z
    .string()
    .min(1, { message: "Answer Key is required." })
    .nullable(),
  driveLink: z
    .string()
    .url("Drive Link must be a valid URL")
    .min(1, { message: "Drive Link is required." }),
  fileURL: z
    .string()
    .url("File URL must be a valid URL")
    .min(1, { message: "File URL is required." }),
  date: z
    .string()
    .refine((val) => !isNaN(Date.parse(val)), {
      message: "Invalid date format",
    }),
});

export type uploadFormState =
  | {
      errors?: {
        subject?: string[];
        answerKey?: string[];
        driveLink?: string[];
        fileURL?: string[];
        date?: string[];
      };
      message?: string;
    }
  | undefined;
