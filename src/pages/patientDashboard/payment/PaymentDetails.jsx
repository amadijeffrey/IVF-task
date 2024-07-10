import React from "react";
import DashboardWrapper from "../../../components/dashboard/DashboardWrapper";
import BackArrow from "../../../assets/backArrow.svg?react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/dashboard/ButtonComponent";
import CustomTable from "../../../components/dashboard/Table/CustomTable";
import { paymentDetailsColumns } from "../../../utils/helpers/columns";

const data = [
    {
      particulars: "Consultation",
      amount: "65,654",
    },
    {
        particulars: "Consultation",
        amount: "70,000",
      },
      {
        particulars: "Consultation",
        amount: "150,000",
      },
      {
        particulars: "Consultation",
        amount: "350,000",
      },
      {
        particulars: "Total",
        amount: "4,500,856",
      },
  ];

const PaymentDetails = () => {
  const navigate = useNavigate();
  const columns = paymentDetailsColumns()
  return (
    <div>
      <DashboardWrapper>
        <div
          className="mb-[40px] flex items-center cursor-pointer gap-x-[8px]"
          onClick={() => navigate(-1)}
        >
          <div className="w-[36px] h-[36px] border border-[#d0d5dd] flex justify-center items-center rounded-[5px]">
            <BackArrow />
          </div>
          <p className="text-base text-[#323438]">back</p>
        </div>
        <div className="flex flex-col gap-y-[32px]">
          <div className="border border-[#d0d5dd] p-[24px] rounded-[7px]">
            <div className="flex justify-between items-center mb-[30px]">
              <div className="flex gap-x-[5px] items-center">
                <p className="text-2xl font-bold">Invoice</p>
                <div className="flex items-center border p-1.5 h-[22px] rounded-[16px] text-[#026aa2] border-[#b9e6fe] bg-[#f0f9ff]">
                    <p className="text-sm font-medium">{"Pending"}</p>
                  </div>
              </div>
              <Button className="bg-primary text-white" text="Make payment" />
            </div>
            <p className="font-bold text-lg text-primary">From</p>
            <div className="flex justify-between">
              <div>
                <p className="text-sm text-secondary">Citadel Clinic</p>
              </div>
              <div className="text-sm text-secondary">
                <p>
                  Invoice number:
                  <span className="font-bold text-primary">IN-43544-fwfre</span>
                </p>
                <p>
                  Invoice date:
                  <span className="font-bold text-primary">
                    {new Date().toLocaleDateString()}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <p className="text-xl font-bold">Bill for Male And Female Infertility Diagnosis</p>
          <div>
             <CustomTable data={data} columns={columns}/>
          </div>
        </div>
      </DashboardWrapper>
    </div>
  );
};

export default PaymentDetails;
