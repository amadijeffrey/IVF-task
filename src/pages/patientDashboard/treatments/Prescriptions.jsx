import React from "react";
import CustomTable from "../../../components/dashboard/Table/CustomTable";
import { prescriptionColumns } from "../../../utils/helpers/columns";

const data = [
  {
    drug_name: "Acetaminophen",
    dosage: "3 times daily",
    note: "gcbshcgefbeuirebueeejuherberkfe,f",
  },
  {
    drug_name: "Acetaminophen",
    dosage: "3 times daily",
    note: "gcbshcgefbeuirebueeejuherberkfe,f",
  },
  {
    drug_name: "Acetaminophen, Ibuprofen",
    dosage: "3 times daily",
    note: "gcbshcgefbeuirebueeejuherberkfe,f",
  },
];

const Prescriptions = () => {
  const columns = prescriptionColumns();
  return (
    <div>
      <CustomTable data={data} columns={columns} />
    </div>
  );
};

export default Prescriptions;
