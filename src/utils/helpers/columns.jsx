import Button from "../../components/dashboard/ButtonComponent";
import { convertToValidPrice, getStatusBadge } from "./commonHelpers";

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
      render: () => {
        <Button text={'View Details'} className='bg-[#f0effb] text-sm text-[#6941c6]' onClick={handleNavigation}/>
      }
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
        <Button text={'View Details'} className='bg-[#f0effb] text-sm text-[#6941c6]' onClick={handleNavigation}/>
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
      render: (item, rowData) =>  <Button text={'View Details'} className='bg-[#f0effb] text-sm text-[#6941c6]' onClick={() => handleNavigation(rowData?.id)}/>
      ,
    },
  ];

  export const adminServicesColumns = (handleSelection) => [
    {
      title: "Services",
      key: "name",
      width: "33%",
      dataIndex: "name",
    },
    {
      title: "Amount",
      key: "amount",
      width: "33%",
      dataIndex: "amount",
      render: (item, rowData) => convertToValidPrice(item)
    },
    {
      title: "Action",
      key: "action",
      width: "33%",
      dataIndex: "action",
      render: (item, rowData) => <Button text={'Edit'} className='bg-[#f0effb] text-sm text-[#6941c6]' onClick={() => handleSelection(rowData)}/>
    },
  ]

  export const adminTreatmentPlanColumns = (handleNavigation) => [
    {
      title: "Treatment Name",
      key: "name",
      width: "33%",
      dataIndex: "name",
    },
    {
      title: "Amount",
      key: "amount",
      width: "33%",
      dataIndex: "amount",
      render: (item, rowData) => convertToValidPrice(item)
    },
    {
      title: "Action",
      key: "action",
      width: "33%",
      dataIndex: "action",
      render: (item, rowData) => <Button text={'Edit'} className='bg-[#f0effb] text-sm text-[#6941c6]' onClick={() => handleNavigation(rowData.id)}/>
    },
  ]

  export const treatmentPlanFeesColumns = () => [
    {
      title: "Particulars",
      key: "service",
      width: "80%",
      dataIndex: "service",
    },
    {
      title: "Amount",
      key: "amount",
      width: "20%",
      dataIndex: "amount",
      render: (item, rowData) => convertToValidPrice(item)
    },
  ]

  export const doctorReportsColumns = (handleNavigation) => [
    {
      title: 'Patient Name',
      key: 'name',
      width: '25%',
      dataIndex: 'name',
    },
    {
        title: "File Number",
        key: "file_number",
        width: "20%",
        dataIndex: "file_number",
      },
      {
        title: "Date",
        key: "date",
        width: "20%",
        dataIndex: "date",
      },
    {
      title: 'Action',
      key: 'action',
      width: '20%',
      dataIndex: 'action',
      render: () =>  <Button text={'View Details'} className='bg-[#f0effb] text-sm text-[#6941c6]' onClick={handleNavigation}/>

    },
  ];

  export const patientMedicalHistoryColumns = () => [
    {
      title: 'Illness',
      key: 'illness',
      width: '25%',
      dataIndex: 'illness',
    },
    {
        title: "Type of Treatment",
        key: "treatmentType",
        width: "25%",
        dataIndex: "treatmentType",
      },
      {
        title: "Year of Diagnosis",
        key: "year",
        width: "25%",
        dataIndex: "year",
      },
      {
        title: "Medication",
        key: "medication",
        width: "25%",
        dataIndex: "medication",
      },
  ]


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
        <Button text={'View Details'} className='bg-[#f0effb] text-sm text-[#6941c6]' onClick={handleNavigation}/>
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
      render: (item, rowData) => <Button text={'View Details'} className='bg-[#f0effb] text-sm text-[#6941c6]' onClick={() => handleNavigation(rowData?.id)}/>
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
      render: () =>  <Button text={'View Details'} className='bg-[#f0effb] text-sm text-[#6941c6]' onClick={handleNavigation}/>
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
      render: () => <Button text={'View Details'} className='bg-[#f0effb] text-sm text-[#6941c6]' onClick={handleNavigation}/>
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
      render: () => <Button text={'View Details'} className='bg-[#f0effb] text-sm text-[#6941c6]' onClick={handleNavigation}/>
    },
  ];

  export const adminAppointmentsColumns = (handleNavigation) => [
    {
      title: 'Patient Name',
      key: 'patientName',
      width: '25%',
      dataIndex: 'patientName',
    },
    {
      title: 'Staff Name',
      key: 'staffName',
      width: '25%',
      dataIndex: 'staffName',
    },
    {
      title: 'Appointment Type',
      key: 'type',
      width: '20%',
      dataIndex: 'type',
    },
    {
      title: 'Date & Time',
      key: 'date',
      width: '15%',
      dataIndex: 'date',
    },
  
    {
      title: 'Action',
      key: 'action',
      width: '15%',
      dataIndex: 'action',
      render: () => <Button text={'View Details'} className='bg-[#f0effb] text-sm text-[#6941c6]' onClick={handleNavigation}/>
    },
  ];

  export const patientAppointmentsColumns = () => [
    {
      title: 'Appointment Type',
      key: 'type',
      width: '20%',
      dataIndex: 'type',
    },
    {
      title: 'Date & Time',
      key: 'date',
      width: '15%',
      dataIndex: 'date',
    },
  
    {
      title: 'Action',
      key: 'action',
      width: '15%',
      dataIndex: 'action',
      render: () => <Button text={'View Details'} className='bg-[#f0effb] text-sm text-[#6941c6]' />
    },
  ];

  export const treatmentTimelineColumns = () => [
    {
      title: 'Title',
      key: 'title',
      width: '33%',
      dataIndex: 'title',
    },
    {
      title: 'Specialty',
      key: 'specialty',
      width: '33%',
      dataIndex: 'specialty',
    },
    {
      title: 'Date & Time',
      key: 'date',
      width: '33%',
      dataIndex: 'date',
    },
  ];

  export const adminStaffSchedulesColumns = (handleNavigation) => [

    {
      title: 'Staff Name',
      key: 'staffName',
      width: '25%',
      dataIndex: 'staffName',
    },
    {
      title: 'Specialty',
      key: 'specialty',
      width: '25%',
      dataIndex: 'specialty',
    },
    {
      title: 'Available Time Slot',
      key: 'date',
      width: '35%',
      dataIndex: 'date',
    },
  
    {
      title: 'Action',
      key: 'action',
      width: '15%',
      dataIndex: 'action',
      render: () => <Button text={'View Details'} className='bg-[#f0effb] text-sm text-[#6941c6]' onClick={handleNavigation}/>
    },
  ];

  export const adminRequestSchedulesColumns = (handleNavigation) => [

    {
      title: 'Name',
      key: 'name',
      width: '30%',
      dataIndex: 'name',
    },
    {
      title: 'Type of Request',
      key: 'requestType',
      width: '25%',
      dataIndex: 'requestType',
    },
    {
      title: 'Date & Time',
      key: 'date',
      width: '25%',
      dataIndex: 'date',
    },
  
    {
      title: 'Action',
      key: 'action',
      width: '20%',
      dataIndex: 'action',
      render: () => <Button text={'View Details'} className='bg-[#f0effb] text-sm text-[#6941c6]' onClick={handleNavigation}/>
    },
  ];

  export const adminLogsColumns = () => [

    {
      title: 'Initiator',
      key: 'initiator',
      width: '15%',
      dataIndex: 'initiator',
    },
    {
      title: 'Details',
      key: 'details',
      width: '65%',
      dataIndex: 'details',
    },
    {
      title: 'Date & Time',
      key: 'date',
      width: '20%',
      dataIndex: 'date',
    },
  
  ];

  export const adminAppointmentTimelineColumns = (handleNavigation) => [
    {
      title: 'Title of Appointment',
      key: 'title',
      width: '25%',
      dataIndex: 'title',
    },
    {
      title: 'Specialty',
      key: 'specialty',
      width: '20%',
      dataIndex: 'specialty',
    },
    {
      title: 'Date & Time',
      key: 'date',
      width: '20%',
      dataIndex: 'date',
    },
    {
      title: 'Appointment Type',
      key: 'type',
      width: '20%',
      dataIndex: 'type',
    },
  
    {
      title: 'Action',
      key: 'action',
      width: '15%',
      dataIndex: 'action',
      render: () =>  <Button text={'Assign Staff'} className='bg-[#f0effb] text-sm text-[#6941c6]' onClick={handleNavigation}/>
    },
  ];