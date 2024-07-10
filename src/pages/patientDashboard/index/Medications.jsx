import React from 'react'
import CustomTable from '../../../components/dashboard/Table/CustomTable';

const data = [
    {
      drug_name: "Acetaminophen",
      form: "Oral",
      dosage: "1mg daily",
    },
    {
      drug_name: "Estradiol",
      form: "Oral",
      dosage: "3 times daily",
    },
  ];

  const columns = [
    {
      title: "Drug Name",
      key: "drug_name",
      width: "33%",
      dataIndex: "drug_name",
    },
    {
      title: "Form",
      key: "form",
      width: "33%",
      dataIndex: "form",
    },
    {
      title: "Dosage",
      key: "dosage",
      width: "33%",
      dataIndex: "dosage",
    },

  ];

const Medications = () => {
    return (
        <div>
        <p className="text-lg font-bold mb-[16px]">Medications</p>
         <CustomTable  data={data} columns={columns} />
      </div>
    )
}

export default Medications