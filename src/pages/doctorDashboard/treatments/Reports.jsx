import React from "react";
import ReportIcon from '../../../assets/report.svg?react'
import Button from "../../../components/dashboard/ButtonComponent";


const Report = () => {
    return (
        <div className="grid grid-cols-3">
        <div className="border border-[#eaecf0] rounded-[5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] flex flex-col p-[24px] gap-y-[20px] items-center">
         <ReportIcon className='w-[48px] h-[48px]'/>
         <p className="font-medium text-base text-primary">Specimen Report</p>
         <p className="font-normal text-base text-primary">{new Date().toLocaleDateString()}</p>
         <Button className='border border-[#6b5dd3] text-[#6b5dd3] bg-white' text='View result' />
        </div>
      </div>
    )
}

export default Report