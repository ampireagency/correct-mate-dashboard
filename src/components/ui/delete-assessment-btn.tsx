"use client";
import { deleteAssessment } from "@/app/assessment/upload/action";
import { useEdgeStore } from "@/context/edgestore.provider";
import React, { useTransition } from "react";

const DeleteProjectBtn = ({
  id,
  fileURl,
}: {
  id: string;
  fileURl: string;
}) => {
  const { edgestore } = useEdgeStore();
  const [isPending, startTransition] = useTransition();
  return (
    <button
      aria-disabled={isPending}
      disabled={isPending}
      onClick={() => {
        startTransition(async () => {
          await deleteAssessment(id);
          await edgestore.publicFiles.delete({
            url: fileURl,
          });
        });
      }}
      className=" text-muted bg-red-600 rounded-lg ml-4 px-3 py-2"
    >
      delete
    </button>
  );
};

export default DeleteProjectBtn;
