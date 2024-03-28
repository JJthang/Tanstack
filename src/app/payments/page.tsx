import { Columns } from "@/components/table/columns";
import { DataTable } from "@/components/table/data-table";
import { payments } from "@/constant/payment";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={Columns} data={payments} />
    </div>
  );
};

export default page;
