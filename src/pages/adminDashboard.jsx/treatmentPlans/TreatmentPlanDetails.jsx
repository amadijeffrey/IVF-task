import React from "react";
import DashboardWrapper from "../../../components/dashboard/DashboardWrapper";
import BackArrow from "../../../assets/backArrow.svg?react";
import CustomTable from "../../../components/dashboard/Table/CustomTable";
import { treatmentPlanFeesColumns } from "../../../utils/helpers/columns";
import Button from "../../../components/dashboard/ButtonComponent";
import { useNavigate } from "react-router-dom";

const TreatmentPlanDetails = () => {
    const navigate = useNavigate()
    const columns = treatmentPlanFeesColumns()
        const data = [
            {
                service: 'Consultation/Registration',
                amount: 6000,
                id: 1
            },
            {
                service: 'HCG',
                amount: 55678,
                id: 2
            },
            {
                service: 'Ovulation/follicular tracking',
                amount: 346587,
                id: 3
            },
        ]
  return (
    <div>
      <DashboardWrapper>
        <div
          className="mb-[40px] flex items-center cursor-pointer gap-x-[8px]"
          onClick={() => navigate(-1)}
        >
          <div className="w-[36px] h-[36px] border border-[#d0d5dd] flex justify-center items-center rounded-[4px]">
            <BackArrow />
          </div>
          <p className="text-base text-[#323438]">back</p>
        </div>
        <div className="flex flex-col gap-y-[24px]">
          <div className="flex justify-between items-center">
            <p className="text-2xl font-bold">Treatment Plan Details</p>
            <div className="flex gap-x-[8px]">
              <Button text={'Edit Plan'} className='bg-primary text-white'/>
              <Button text={'Delete Plan'} className='bg-red-600 text-white'/>
            </div>
          </div>
          <div className="flex gap-x-[40px]">
            <div>
                <p className="text-secondary text-base mb-[16px]">Treatment Plan Name:</p>
                <p className="text-secondary text-base">Description:</p>
            </div>
            <div>
                <p className="text-primary font-mediumm text-base mb-[16px]">Male And Female Infertility Diagnosis</p>
                <p className="text-primary text-base">Lorem ipsum</p>
            </div>
          </div>
          <p className="text-xl font-bold">Fees</p>
          <CustomTable columns={columns} data={data} />
        </div>
      </DashboardWrapper>
    </div>
  );
};

export default TreatmentPlanDetails;
