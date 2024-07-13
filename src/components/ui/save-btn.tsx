"use client";
import { toggleReview } from "@/app/assessment/upload/action";
import React, { useTransition } from "react";

const SaveBtn = ({
  id,
  reviewed,
}: {
  id: string;
  reviewed: boolean;
}) => {
  const [isPending, startTransition] = useTransition();
  return (
    <button
      aria-disabled={isPending}
      disabled={isPending}
      onClick={() => {
        startTransition(async () => {
          await toggleReview(id, !reviewed);
        });
      }}
      className=" rounded-xl px-4 py-2 gap-2 border border-black bg-primary capitalize text-muted"
    >
      <span className="">{reviewed ? "Saved" : "Save"}</span>
    </button>
  );
};

export default SaveBtn;
