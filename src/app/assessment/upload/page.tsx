import React from "react";
import Form from "./form";
import PageHeader from "@/components/layout/pageHeader";

const Page = async () => {
  return (
    <section className="flex h-full w-full flex-col">
      <PageHeader className="py-5">
        <h1 className="text-2xl font-bold leading-relaxed tracking-wide text-foreground">
          Create new Assesments
        </h1>
      </PageHeader>
      <Form />
    </section>
  );
};

export default Page;
