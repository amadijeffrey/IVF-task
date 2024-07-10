import React, { useState } from "react";
import BackArrow from "../../../assets/backArrow.svg?react";
import picture1 from "../../../assets/picture1.png";
import DashboardWrapper from "../../../components/dashboard/DashboardWrapper";
import Button from "../../../components/dashboard/ButtonComponent";
import TreatmentTimelineModal from "../../../components/dashboard/Modal/TreatmentTimeline";
import CreateTreatmentPlanModal from "../../../components/dashboard/Modal/CreateTreatmentPlan";
import { useNavigate } from "react-router-dom";

const PatientDetails = () => {
  const [isFetching, setIsFetching] = useState(false);
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState({
    addTreatmentPlan: false,
    treatmentTimeline: false
  })
  const medicalHistory = [
    {
      illness: "Hypertension",
      treatmentType: "Medical Treatment",
      year: "2010",
      medication: "Lisinopril",
    },
    {
      illness: "Update treatment plan",
      treatmentType: "Medical Treatment",
      year: "2012",
      medication: "Atovastatin",
    },
    {
      illness: "Diabetes Mellitis Type 2",
      treatmentType: "Surgical Treatment",
      year: "2015",
      medication: "Methformin",
    },
    {
      illness: "Appendectomy",
      treatmentType: "Surgical Treatment",
      year: "2016",
      medication: "",
    },
  ];
  return (
    <div>
      {showModal.addTreatmentPlan && <CreateTreatmentPlanModal handleClose={() => setShowModal({addTreatmentPlan: false })} handleOpenSecondModal={() => (
          setShowModal({ addTreatmentPlan: false }),
          setShowModal({ treatmentTimeline: true })
      )}/>}
      {showModal.treatmentTimeline && <TreatmentTimelineModal handleClose={() => setShowModal({treatmentTimeline: false })}/>}
    <DashboardWrapper>
      <div className="mb-[40px] flex items-center cursor-pointer gap-x-[8px]" onClick={() => navigate(-1)}>
        <div className="w-[36px] h-[36px] border border-[#d0d5dd] flex justify-center items-center rounded-[4px]">
          <BackArrow />
        </div>
        <p className="text-base text-[#323438]">back</p>
      </div>
      <div className="flex flex-col gap-y-[24px]">
        <div className="flex justify-between items-center">
          <p className="font-bold text-2xl">Patient Details</p>
          <Button className="bg-primary text-white" text='Add Treatment Plan' onClick={() => setShowModal({addTreatmentPlan: true})}/>
        </div>
        <div className="py-[32px] px-[24px] border border-[#d0d5dd] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] flex flex-col gap-y-[16px] rounded-[7px]">
          <div className="flex gap-x-[12px]">
            <div className="w-[80px] h-[80px] rounded-full">
              <img src={picture1} className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="font-bold text-lg">Haylie Rodser</p>
              <p className="text-sm">ATS-20240701-001</p>
            </div>
          </div>
          <hr className="bg-[#d0d5dd] h-[1px]" />
          <div className="flex gap-x-[32px]">
            <div className="w-1/2 flex flex-col gap-y-[16px]">
              <div className="flex justify-between">
                <p className="text-base text-secondary">Genotype</p>{" "}
                <p className="font-bold text-base">AA</p>
              </div>
              <div className="flex justify-between">
                <p className="text-base text-secondary">Blood group</p>{" "}
                <p className="font-bold text-base">O+</p>
              </div>
              <div className="flex justify-between">
                <p className="text-base text-secondary">Rhesus Factor</p>{" "}
                <p className="font-bold text-base">RH+</p>
              </div>
              <div className="flex justify-between">
                <p className="text-base text-secondary">Weight</p>{" "}
                <p className="font-bold text-base">85kg</p>
              </div>
            </div>
            <div className="w-1/2 flex flex-col gap-y-[16px]">
              <div className="flex justify-between">
                <p className="text-base text-secondary">Height</p>{" "}
                <p className="font-bold text-base">176cm</p>
              </div>
              <div className="flex justify-between">
                <p className="text-base text-secondary">Viral Status(HIV)</p>{" "}
                <p className="font-bold text-base">Negative</p>
              </div>
              <div className="flex justify-between">
                <p className="text-base text-secondary">Hepatitis Status</p>{" "}
                <p className="font-bold text-base">AA</p>
              </div>
            </div>
          </div>
        </div>
        <p className="font-bold text-base">Medical History</p>
        <div>
          <table className="relative bg-white w-full table-fixed text-left text-[#475467] font-medium max-h-[300px] overflow-auto">
            <thead>
              <tr className="h-[44px] border-[#eaecf0] sticky top-0 z-10 bg-[#f5f6f7]">
                <th className="text-xs w-[15%] px-[24px] font-bold">Illness</th>
                <th className="text-xs w-[15%] px-[24px] font-bold">
                  Type of Treatment
                </th>
                <th className="text-xs w-[20%] px-[24px] font-bold">
                  Year of Diagnosis
                </th>
                <th className="text-xs w-[15%] px-[24px] font-bold">
                  Medication
                </th>
              </tr>
            </thead>
            <tbody>
              {medicalHistory.length > 0 ? (
                medicalHistory?.map((el, i) => {
                  return (
                    <tr
                      key={i}
                      className="h-9 md:h-12 border-b border-[#eaecf0]"
                    >
                      <td className="text-sm font-normal px-[24px] py-[16px]">
                        {el?.illness}
                      </td>
                      <td className="text-sm font-normal px-[24px] py-[16px]">
                        {el?.treatmentType}
                      </td>
                      <td className="text-sm font-normal truncate px-[24px] py-[16px]">
                        {el?.year}
                      </td>
                      <td className="text-sm font-normal truncate px-[24px] py-[16px]">
                        {el?.medication}
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr className="flex justify-center items-center w-full h-[350px]">
                  <td />
                  <td />
                  <td className="text-lg">No data available</td>
                  <td />
                  <td />
                </tr>
              )}
            </tbody>
            {isFetching && (
              <tbody className="absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center bg-[#0000004d]">
                <tr>
                  <td>
                    <svg
                      aria-hidden="true"
                      className="w-8 h-8 text-gray-200 animate-spin fill-blue-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                  </td>
                </tr>
              </tbody>
            )}
          </table>
        </div>
        <p className="font-bold text-base">Current Treatment Plan</p>
        <div>
          <table className="relative bg-white w-full table-fixed text-left text-[#475467] font-medium max-h-[300px] overflow-auto">
            <thead>
              <tr className="h-[44px] border-[#eaecf0] sticky top-0 z-10 bg-[#f5f6f7]">
                <th className="text-xs w-[15%] px-[24px] font-bold">
                  Name of Treatment
                </th>
                <th className="text-xs w-[15%] px-[24px] font-bold">
                  Treatment Status
                </th>
                <th className="text-xs w-[20%] px-[24px] font-bold">
                  Start Date
                </th>
                <th className="text-xs w-[15%] px-[24px] font-bold">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-sm px-[24px] py-[16px] font-normal">
                  Estrogen Hormone Therapy
                </td>
                <td className="text-xs px-[24px] py-[16px]">
                  <div className="flex items-center border p-2 rounded-[16px] w-[150px] text-[#026aa2] border-[#b9e6fe] bg-[#f0f9ff]">
                    <p className="text-sm font-medium">{"Ongoing treatment"}</p>
                  </div>
                </td>
                <td className="text-sm  px-[24px] py-[16px]">
                  {new Date().toLocaleDateString()}
                </td>
                <td className="text-sm px-[24px] py-[16px]">
                  <button className="bg-[#f0effb] text-sm border border-[#e9d7fe] text-[#6941c6] h-[40px] flex justify-center items-center shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
                    View Details
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </DashboardWrapper>
    </div>
  );
};

export default PatientDetails;
