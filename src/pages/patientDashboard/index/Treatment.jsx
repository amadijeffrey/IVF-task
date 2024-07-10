import React from 'react'
import { useNavigate } from 'react-router-dom';
import CustomTable from '../../../components/dashboard/Table/CustomTable';

const data = [
    {
      name: "Estrogen Hormone therapy",
      date: new Date().toDateString(),
    },
    {
        name: "Fibroid(Myomectomy)",
        date: new Date().toDateString(),
      },
  ];



const Treatments = () => {
    const navigate = useNavigate()
    const columns = [
        {
          title: "Name of treatment",
          key: "name",
          width: "33%",
          dataIndex: "name",
        },
        {
          title: "Start date",
          key: "date",
          width: "33%",
          dataIndex: "date",
        },
        {
          title: "Action",
          key: "",
          width: "33%",
          dataIndex: "action",
          render: () => (
            <button className="bg-[#f0effb] text-sm border border-[#e9d7fe] text-[#6941c6] h-[40px] flex justify-center items-center shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" onClick={() => navigate('/dashboard/doctor/treatments/detail')}>
              View Details
            </button>
          ),
        },
    
      ];
    return (
        <div>
        <p className="text-lg font-bold mb-[16px]">Treatments</p>
         <CustomTable  data={data} columns={columns} />
      </div>
    )
}

export default Treatments