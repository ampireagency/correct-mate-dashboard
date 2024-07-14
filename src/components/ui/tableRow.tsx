"use client";
import { deleteAssessment } from "@/app/assessment/upload/action";
import { Assessments } from "@prisma/client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import DeleteProjectBtn from "./delete-assessment-btn";

const TableRow = ({ assessment, index }: { assessment: Assessments, index:number }) => {
  const router = useRouter();
  const tableindex= index +1
  return (
    <tr>
      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
        {tableindex}
      </td>
      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
        {new Date(assessment.date).toLocaleDateString()}
      </td>
      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 capitalize">
        {assessment.subject}
      </td>
      <td className="whitespace-nowrap px-6 py-4 text-sm font-semibold text-gray-500">
        {assessment.reviewed ? (
          <span className="rounded-lg border border-primary bg-green-50 px-3 py-1 text-primary">
            Reviewed
          </span>
        ) : (
          <span className="rounded-lg border border-blue-500 bg-blue-50 px-3 py-1 text-blue-500">
            In progress
          </span>
        )}
        <Link
          href={(`/assessment/${assessment.id}`)}
          className="rounded-lg border border-blue-500 bg-blue-50 px-3 py-1 text-blue-500 ml-4"
        >
          View
        </Link>
        <DeleteProjectBtn fileURl={assessment.fileURL} id={assessment.id}/>
      </td>
    </tr>
  );
};

export default TableRow;
