import React from 'react'
import CustomTable from '../../../components/dashboard/Table/CustomTable'
import { getStatusBadge } from '../../../utils/helpers/commonHelpers';

const data = [
    {
      name: "Patience Oliver",
      file_number: "ATS-20240809-001",
      id: "EG-20240809-001",
      specimen_status: "Incubating",
      date: new Date().toLocaleDateString(),
    },
    {
      name: "Kayor Bator",
      file_number: "ATS-20240809-001",
      id: "EG-20240809-001",
      specimen_status: "Incubating",
      date: new Date().toLocaleDateString(),
    },
    {
      name: "Patience Oliver",
      file_number: "ATS-20240809-001",
      id: "EG-20240809-001",
      specimen_status: "Ready for transfer",
      date: new Date().toLocaleDateString(),
    },
    {
      name: "Patience Oliver",
      file_number: "ATS-20240809-001",
      id: "EG-20240809-001",
      specimen_status: "Failed",
      date: new Date().toLocaleDateString(),
    },
  ];

  const columns = [
    {
      title: "Specimen ID",
      key: "id",
      width: "33%",
      dataIndex: "id",
    },
    {
      title: "Specimen Status",
      key: "specimen_status",
      width: "33%",
      dataIndex: "specimen_status",
      render: (item) => getStatusBadge(item),
    },
    {
        title: "Date Updated",
        key: "date",
        width: "33%",
        dataIndex: "date",
      },
]

const SpecimenStatus = () => {
  return (
    <div>
      <p className='font-bold text-lg mb-[32px]'>Specimen Status</p>
       <CustomTable  data={data} columns={columns} />
    </div>
  )
}

export default SpecimenStatus