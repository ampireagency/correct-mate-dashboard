import PageHeader from "@/components/layout/pageHeader";
import CustomLink from "@/components/ui/customLink";
import { Input } from "@/components/ui/searchBox";
import { db } from "@/lib/db";
import { IoMdAddCircleOutline } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import TableRow from "@/components/ui/tableRow";

const HomePage = async () => {
  const assessments = await db.assessments.findMany();

  if (assessments.length === 0) {
    return (
      <section className="flex h-full w-full flex-col items-center justify-center gap-4">
        <h1 className="font-bold leading-snug tracking-wide">
          No assessments found.
        </h1>
        <CustomLink
          path={"/assessment/upload"}
          className="gap-2 border border-black bg-primary text-muted"
        >
          <span>
            <IoMdAddCircleOutline className="text-lg" />
          </span>
          Create a New assessment
        </CustomLink>
      </section>
    );
  }

  return (
    <section className="flex h-full w-full flex-col text-black">
      <PageHeader className="flex justify-between py-5">
        <h1 className="text-2xl font-bold leading-relaxed tracking-wide text-foreground">
          Create new Assessments
        </h1>
        <CustomLink
          path={"/assessment/upload"}
          className="gap-2 border border-black bg-primary text-muted"
        >
          <span>
            <IoMdAddCircleOutline className="text-lg" />
          </span>
          Create a New
        </CustomLink>
      </PageHeader>
      <div>
        <div className="relative flex items-center">
          <CiSearch className="absolute size-6 pl-1" />
          <Input type="search" className="px-7" />
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
              {assessments.map((assessment, i) => {
                return <TableRow key={assessment.id} index={i} assessment={assessment} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
