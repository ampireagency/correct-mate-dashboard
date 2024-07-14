"use client";
import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import { uploadAssessment } from "./action";
import { useEdgeStore } from "@/context/edgestore.provider";
import { useRouter } from "next/navigation";

const Form = () => {
  const [state, action] = useFormState(uploadAssessment, undefined);
  const { pending } = useFormStatus();
  const [progress, setprogress] = React.useState(0);
  const [file, setFile] = React.useState<File | null>(null);
  const { edgestore } = useEdgeStore();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    try {
      if (!file) {
        throw new Error("Image file is required.");
      }

      const fileData = await edgestore.publicFiles.upload({
        file,
        onProgressChange: (progress) => setprogress(progress),
      });
      const fileURL = fileData.url;

      formData.set("fileURL", fileURL);

      await action(formData);
      await router.push("/assessment");
      setTimeout(() => {
        router.refresh();
      }, 3000); // Delay refresh by 3 seconds
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files?.[0];
    if (uploadedFile) {
      setFile(uploadedFile);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-8">
      <div className="flex w-full gap-3">
        <div className="flex w-1/2 grow flex-col">
          <label htmlFor="subject">Subject</label>
          <input
            id="subject"
            name="subject"
            type="text"
            className="rounded border px-2 py-1"
          />
        </div>
        {state?.errors?.subject && (
          <p className="text-sm text-red-500">{state.errors.subject}</p>
        )}
        <div className="flex w-1/2 grow flex-col">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            name="date"
            type="date"
            className="rounded border px-2 py-1"
          />
        </div>
        {state?.errors?.date && (
          <p className="text-sm text-red-500">{state.errors.date}</p>
        )}
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col">
          <label htmlFor="answerKey">Answer Key</label>
          <input
            id="answerKey"
            name="answerKey"
            type="text"
            className="rounded border px-2 py-1"
          />
        </div>
        {state?.errors?.answerKey && (
          <p className="text-sm text-red-500">{state.errors.answerKey}</p>
        )}
        <div className="flex flex-col">
          <label htmlFor="driveLink">Drive Link</label>
          <input
            id="driveLink"
            name="driveLink"
            type="text"
            className="rounded border px-2 py-1"
          />
        </div>
        {state?.errors?.driveLink && (
          <p className="text-sm text-red-500">{state.errors.driveLink}</p>
        )}
      </div>
      <div className="flex w-full items-center justify-center">
        <label
          htmlFor="fileURL"
          className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100"
        >
          <div className="flex flex-col items-center justify-center pb-6 pt-5">
            <svg
              className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              PDF, PNG, JPG (MAX. 10mb)
            </p>
          </div>
          <input
            id="fileURL"
            name="fileURL"
            type="file"
            onChange={handleFileChange}
            className="rounded border px-2 py-1 file:hidden"
          />
          <div className="h-[6px] w-[350px] overflow-hidden rounded border">
            <div
              className="h-full overflow-hidden bg-primary transition-all duration-150"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>
        </label>
      </div>
      {state?.errors?.fileURL && (
        <p className="text-sm text-red-500">{state.errors.fileURL}</p>
      )}
      <div className="flex gap-3">
        <button
          onClick={() => {
            router.push("/");
          }}
          className="rounded-xl bg-muted-foreground/40 px-4 py-2 capitalize text-foreground"
        >
          discard
        </button>
        <button
          type="submit"
          disabled={pending}
          className="rounded-xl bg-primary px-4 py-2 capitalize text-white"
        >
          {pending ? "pending" : "Evaluate"}
        </button>
      </div>
    </form>
  );
};

export default Form;
