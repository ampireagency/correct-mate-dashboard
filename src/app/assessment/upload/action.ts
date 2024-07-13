"use server";
import { revalidatePath } from "next/cache";
import { uploadFormSchema, uploadFormState } from "./definitions";
import { db } from "@/lib/db";

export const uploadAssessment = async (
  state: uploadFormState,
  formData: FormData
): Promise<uploadFormState> => {
  const validatedFields = uploadFormSchema.safeParse({
    subject: formData.get("subject"),
    answerKey: formData.get("answerKey"),
    driveLink: formData.get("driveLink"),
    fileURL: formData.get("fileURL"),
    date: formData.get("date"),
  });

  if (!validatedFields.success) {
    return {
      ...state,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { subject, answerKey, driveLink, fileURL } = validatedFields.data;
  const dateString = formData.get("date") as string | null;

  if (!dateString) {
    return {
      ...state,
      errors: {
        ...state?.errors,
        date: ["Date is required"],
      },
    };
  }

  const date = new Date(dateString);

  try {
    // console.log("Uploading project with data:", {
    //   subject,
    //   answerKey,
    //   date: date.toISOString(),
    //   driveLink,
    //   fileURL,
    // });

    await db.assessments.create({
      data: {
        subject,
        answerKey,
        date,
        driveLink,
        fileURL,
      },
    });

    revalidatePath("/");
  } catch (error: any) {
    console.error("Error creating project:", error);
    throw new Error(error.message);
  }
};

export async function toggleReview(id: string, reviewed: boolean) {
  try {
    await db.assessments.update({
      where: {
        id,
      },
      data: {
        reviewed,
      },
    });

    revalidatePath("/", "layout");
  } catch (error: any) {
    console.error("Error toggling publish:", error);
    throw new Error(error.message);
  }
}

export async function deleteAssessment(id: string) {
  try {
    await db.assessments.delete({
      where: {
        id,
      },
    });

    revalidatePath("/", "layout");
  } catch (error: any) {
    console.error("Error deleting project:", error);
    throw new Error(error.message);
  }
}
