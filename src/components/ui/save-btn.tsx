"use client";
import { toggleReview } from "@/app/assessment/upload/action";
import { useRouter } from "next/navigation";
import React, { useTransition } from "react";

const SaveBtn = ({ id, reviewed }: { id: string; reviewed: boolean }) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  return (
    <button
      aria-disabled={isPending}
      disabled={isPending}
      onClick={() => {
        startTransition(async () => {
          await toggleReview(id, !reviewed);
          router.push("/");
          setTimeout(() => {
            router.refresh();
          }, 3000); // Delay refresh by 3 seconds
        });
      }}
      className="gap-2 rounded-xl border border-black bg-primary px-4 py-2 capitalize text-muted"
    >
      <span className="">{reviewed ? "Saved" : "Save"}</span>
    </button>
  );
};

export default SaveBtn;
