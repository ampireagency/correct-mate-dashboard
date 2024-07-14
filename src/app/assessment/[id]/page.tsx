import PageHeader from "@/components/layout/pageHeader";
import CustomLink from "@/components/ui/customLink";
import { Input } from "@/components/ui/searchBox";
import { db } from "@/lib/db";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";

interface Params {
  params: {
    id: string;
  };
}

const AsessmentPage = async ({ params }: Params) => {
  const { id } = params;
  const assessments = await db.assessments.findFirst({
    where: {
      id: id,
    },
    select: {
      subject: true,
      date: true,
      id: true,
      driveLink: true,
      fileURL: true,
      reviewed: true,
    },
  });

  return (
    <section className="flex h-full w-full flex-col text-black">
      <PageHeader className="flex justify-between py-5">
        <h1 className="text-2xl font-bold leading-relaxed tracking-wide text-foreground">
          Assessments
        </h1>
        <CustomLink
          path={"/"}
          className="gap-2 border border-black bg-primary capitalize text-muted"
        >
          back
        </CustomLink>
      </PageHeader>
      <div>
        <div className="flex">
          <div className="relative flex w-1/2 items-center">
            <CiSearch className="absolute size-6 pl-1" />
            <Input type="search" className="px-7" />
          </div>
          <div className="flex w-1/2 justify-between pl-20 pr-10">
            <div>
              <div className="font-medium capitalize">{"Subject Name:"}</div>
              <div className="capitalize">{assessments?.subject}</div>
            </div>
            <div>
              <div className="font-medium capitalize">{"date:"}</div>
              <div>
                {assessments?.date &&
                  new Date(assessments.date).toLocaleDateString()}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                >
                  No.
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                >
                  Uploaded date
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                >
                  Subject
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                >
                  Reviewed
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr>
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                  ROLL0{1}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                  {assessments?.date &&
                    new Date(assessments.date).toLocaleDateString()}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 capitalize">
                  {assessments?.subject}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm font-semibold text-gray-500">
                  {assessments?.reviewed ? (
                    <span className="rounded-lg border border-primary bg-green-50 px-3 py-1 text-primary">
                      Reviewed
                    </span>
                  ) : (
                    <span className="rounded-lg border border-blue-500 bg-blue-50 px-3 py-1 text-blue-500">
                      In progress
                    </span>
                  )}
                  <Link
                    href={`/assessment/review/${assessments?.id}`}
                    className="ml-4 rounded-lg border border-blue-500 bg-blue-50 px-3 py-1 text-blue-500"
                  >
                    View
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default AsessmentPage;
