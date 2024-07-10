import { getStatusBadge } from "./commonHelpers";

export const paymentColumns  = (handleNavigation) => [
    {
        title: "File Number",
        key: "file_number",
        width: "20%",
        dataIndex: "file_number",
      },
      {
          title: "Amount",
          key: "amount",
          width: "20%",
          dataIndex: "amount",
        },
      {
        title: "Date",
        key: "date",
        width: "20%",
        dataIndex: "date",
      },
      {
          title: "Status",
          key: "status",
          width: "20%",
          dataIndex: "status",
          render: (item) => getStatusBadge(item),
        },
    {
      title: 'Action',
      key: 'action',
      width: '20%',
      dataIndex: 'action',
      render: () => <button className="bg-[#f0effb] text-sm border border-[#e9d7fe] text-[#6941c6] h-[40px] flex justify-center items-center shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" onClick={handleNavigation}>View Details</button>,
    },
  ];

  export const trackingColumns = (handleNavigation) => [

    {
      title: "File Number",
      key: "file_number",
      width: "40%",
      dataIndex: "file_number",
    },
    {
      title: "Status",
      key: "status",
      width: "20%",
      dataIndex: "treatment_status",
      render: (item) => getStatusBadge(item),
    },
    {
      title: "Start Date",
      key: "date",
      width: "20%",
      dataIndex: "date",
    },
    {
      title: "Action",
      key: "action",
      width: "20%",
      dataIndex: "action",
      render: () => (
        <button className="bg-[#f0effb] text-sm border border-[#e9d7fe] text-[#6941c6] h-[40px] flex justify-center items-center shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" onClick={handleNavigation}>
          View Details
        </button>
      ),
    },
  ];

  export const paymentDetailsColumns = () => [
    {
      title: "Particulars",
      key: "particulars",
      width: "20%",
      dataIndex: "particulars",
    },
    {
      title: "Amount",
      key: "amount",
      width: "20%",
      dataIndex: "amount",
    },
  ]

  export const doctorTreatmentsColumns = (handleNavigation) => [
    {
      title: "Patient Name",
      key: "name",
      width: "20%",
      dataIndex: "name",
    },
    {
      title: "File Number",
      key: "file_number",
      width: "20%",
      dataIndex: "file_number",
    },
    {
      title: "Ongoing Treatment",
      key: "ongoing_treatment",
      width: "20%",
      dataIndex: "ongoing_treatment",
    },
    {
      title: "Treatment Status",
      key: "treatment_status",
      width: "20%",
      dataIndex: "treatment_status",
      render: (item) => getStatusBadge(item),
    },
    {
      title: "Date",
      key: "date",
      width: "20%",
      dataIndex: "date",
    },
    {
      title: "Action",
      key: "action",
      width: "20%",
      dataIndex: "action",
      render: () => (
        <button className="bg-[#f0effb] text-sm border border-[#e9d7fe] text-[#6941c6] h-[40px] flex justify-center items-center shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" onClick={handleNavigation}>
          View Details
        </button>
      ),
    },
  ];

  export const patientTreatmentsColumns = (handleNavigation) => [
    {
      title: "Name of IVF plan",
      key: "name",
      width: "20%",
      dataIndex: "name",
    },
    {
      title: "File Number",
      key: "file_number",
      width: "20%",
      dataIndex: "file_number",
    },
    {
      title: "Prescriptions",
      key: "prescriptions",
      width: "20%",
      dataIndex: "prescriptions",
    },

    {
      title: "Start Date",
      key: "date",
      width: "20%",
      dataIndex: "date",
    },
    {
      title: "Action",
      key: "action",
      width: "20%",
      dataIndex: "action",
      render: () => (
        <button className="bg-[#f0effb] text-sm border border-[#e9d7fe] text-[#6941c6] h-[40px] flex justify-center items-center shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" onClick={handleNavigation}>
          View Details
        </button>
      ),
    },
  ];

  export const prescriptionColumns = () => [
    {
      title: "Drug Name",
      key: "drug_name",
      width: "20%",
      dataIndex: "drug_name",
    },
    {
      title: "Dosage",
      key: "dosage",
      width: "20%",
      dataIndex: "dosage",
    },
    {
      title: "Note",
      key: "note",
      width: "20%",
      dataIndex: "note",
    },
  ]

  export const adminPatientsColumns = (handleNavigation) => [
    {
      title: 'Patient Name',
      key: 'name',
      width: '25%',
      dataIndex: 'name',
    },
    {
      title: 'Patient ID',
      key: 'patient_id',
      width: '20%',
      dataIndex: 'patient_id',
    },
    {
      title: 'Gender',
      key: 'gender',
      width: '20%',
      dataIndex: 'gender',
    },
    {
      title: 'Age',
      key: 'age',
      width: '15%',
      dataIndex: 'age',
    },
    {
      title: 'Action',
      key: 'action',
      width: '20%',
      dataIndex: 'action',
      render: () => <button className="bg-[#f0effb] text-sm border border-[#e9d7fe] text-[#6941c6] h-[40px] flex justify-center items-center shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" onClick={handleNavigation}>View Details</button>,
    },
  ];

  export const adminStaffColumns = (handleNavigation) => [
    {
      title: 'Staff Name',
      key: 'name',
      width: '25%',
      dataIndex: 'name',
    },
    {
      title: 'Specialty',
      key: 'patient_id',
      width: '30%',
      dataIndex: 'patient_id',
    },
    {
      title: 'Gender',
      key: 'gender',
      width: '25%',
      dataIndex: 'gender',
    },
  
    {
      title: 'Action',
      key: 'action',
      width: '20%',
      dataIndex: 'action',
      render: () => <button className="bg-[#f0effb] text-sm border border-[#e9d7fe] text-[#6941c6] h-[40px] flex justify-center items-center shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" onClick={handleNavigation}>View Details</button>,
    },
  ];

  export const adminLabColumns = (handleNavigation) => [
    {
      title: "File Number",
      key: "file_number",
      width: "20%",
      dataIndex: "file_number",
    },
    {
      title: 'Patient Name',
      key: 'name',
      width: '25%',
      dataIndex: 'name',
    },
    {
      title: 'Test type',
      key: 'test_type',
      width: '20%',
      dataIndex: 'test_type',
    },
    {
      title: 'Lab Status',
      key: 'status',
      width: '15%',
      dataIndex: 'status',
      render: (item) => getStatusBadge(item),
    },
    {
      title: "Date",
      key: "date",
      width: "15%",
      dataIndex: "date",
    },
    {
      title: 'Action',
      key: 'action',
      width: '20%',
      dataIndex: 'action',
      render: () => <button className="bg-[#f0effb] text-sm border border-[#e9d7fe] text-[#6941c6] h-[40px] flex justify-center items-center shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" onClick={handleNavigation}>View Details</button>,
    },
  ];

  export const adminSpecimenColumns = (handleNavigation) => [
    {
      title: "File Number",
      key: "file_number",
      width: "25%",
      dataIndex: "file_number",
    },
    {
      title: 'Patient Name',
      key: 'name',
      width: '25%',
      dataIndex: 'name',
    },
    {
      title: 'Status',
      key: 'status',
      width: '15%',
      dataIndex: 'status',
      render: (item) => getStatusBadge(item),
    },
    {
      title: "Date",
      key: "date",
      width: "15%",
      dataIndex: "date",
    },
    {
      title: 'Action',
      key: 'action',
      width: '20%',
      dataIndex: 'action',
      render: () => <button className="bg-[#f0effb] text-sm border border-[#e9d7fe] text-[#6941c6] h-[40px] flex justify-center items-center shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" onClick={handleNavigation}>View Details</button>,
    },
  ];