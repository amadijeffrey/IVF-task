import React, { useState } from "react";
import InputComponent from "../../../components/dashboard/Input";
import Dropdown from "../../../components/dashboard/DropDown/DropDown";
import Button from "../../../components/dashboard/ButtonComponent";
import ArrowRightIcon from '../../../assets/chevron-right.svg?react'
import CustomTable from "../../../components/dashboard/Table/CustomTable";

const MedicalHistory = ({handleSelect}) => {
  const [isError, setIsError] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "chibuike",
    lastname: "amadi",
    email: "amadichibuike72@gmail.com",
  });

  return (
    <>
      <p className="text-xl font-bold text-primary">Medical History</p>
      <div className="w-[80%] flex flex-col gap-y-[24px]">
        <div className="rounded-[4px] border border-[[#eaecf0] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] flex flex-col gap-y-[16px]">
          <div className="py-[16px] px-[24px] bg-[#f5f6f7] border-b border-[#eaecf0] font-bold text-primary">
            Medical Details
          </div>
          <form className="px-[24px] pb-[24px] flex flex-col gap-y-[16px]">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-primary text-sm font-bold mb-[10px]"
                >
                  Genotype
                </label>
                <Dropdown
                  options={["Male", "Female"]}
                  value={formData.gender}
                  onChange={(item) =>
                    isError
                      ? setIsError(false)
                      : setFormData({ ...formData, gender: item })
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-primary text-sm font-bold mb-[10px]"
                >
                  Blood Group <span className="text-red-600">*</span>
                </label>
                <Dropdown
                  options={["Male", "Female"]}
                  value={formData.gender}
                  onChange={(item) =>
                    isError
                      ? setIsError(false)
                      : setFormData({ ...formData, gender: item })
                  }
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  className="block text-primary text-sm font-bold mb-[10px]"
                >
                  Rhesus Factor
                </label>
                <Dropdown
                  options={["Male", "Female"]}
                  value={formData.gender}
                  onChange={(item) =>
                    isError
                      ? setIsError(false)
                      : setFormData({ ...formData, gender: item })
                  }
                />
              </div>
              <div>
                <label
                  className="block text-primary text-sm font-bold mb-[10px]"
                >
                  Rhesus Factor
                </label>
                <Dropdown
                  options={["Male", "Female"]}
                  value={formData.gender}
                  onChange={(item) =>
                    isError
                      ? setIsError(false)
                      : setFormData({ ...formData, gender: item })
                  }
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-primary text-sm font-bold mb-[10px]"
                >
                  Height
                </label>
                <InputComponent
                  placeholder="Enter email"
                  className="bg-white w-full"
                  showLeftIcon={false}
                  type="number"
                  id="date"
                  name="date"
                  value={formData.dob}
                  handleChange={(e) =>
                    isError
                      ? setIsError(false)
                      : setFormData({ ...formData, email: e.target.value })
                  }
                />
                <p className="text-red-600 text-sm mt-1">
                  {isError && !validateEmail(formData.email.trim())
                    ? "enter a valid email"
                    : ""}
                </p>
              </div>
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-primary text-sm font-bold mb-[10px]"
                >
                  Weight <span className="text-red-600">*</span>
                </label>
                <InputComponent
                  placeholder="Enter phone number"
                  className="bg-white w-full"
                  showLeftIcon={false}
                  type="number"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phone_number}
                  handleChange={(e) =>
                    isError
                      ? setIsError(false)
                      : setFormData({
                          ...formData,
                          phone_number: e.target.value,
                        })
                  }
                />
                <p className="text-red-600 text-sm mt-1">
                  {isError && formData.phone_number.trim() === ""
                    ? "required"
                    : ""}
                </p>
              </div>
            </div>
            <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-primary text-sm font-bold mb-[10px]"
                >
                  Hepatitis Status 
                </label>
                <div className="grid grid-cols-3">
                    <div><input type='radio' name='H-status'/> <span>Hepatitis A</span></div>
                    <div><input type='radio' name='H-status'/> <span>Hepatitis B</span></div>
                    <div><input type='radio' name='H-status'/> <span>Hepatitis C</span></div>
                </div>
                <p className="text-red-600 text-sm mt-1">
                  {isError && formData.phone_number.trim() === ""
                    ? "required"
                    : ""}
                </p>
              </div>
            <div>
                <label
                  htmlFor="email"
                  className="block text-primary text-sm font-bold mb-[10px]"
                >
                  Vaccination Status
                </label>
                <Dropdown
                  options={["Male", "Female"]}
                  value={formData.gender}
                  onChange={(item) =>
                    isError
                      ? setIsError(false)
                      : setFormData({ ...formData, gender: item })
                  }
                />
              </div>
              <Button text='Save changes' className='bg-primary text-white mt-[24px] w-[143px]' />
          </form>
        </div>
        <div className="rounded-[4px] border border-[#eaecf0] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] flex flex-col gap-y-[16px]">
          <div className="py-[16px] px-[24px] bg-[#f5f6f7] border-b border-[#eaecf0] font-bold text-primary">
           Treatment History
          </div>
          <div className="p-[24px] flex gap-x-[16px]">
            <div className="rounded-[4px] border border-[#eaecf0] p-[12px] flex justify-between items-center w-1/2">
               <span>
                <p className="text-base font-medium text-primary">Medical Treatments</p>
                <p className="text-sm text-secondary">2 inputs</p>
               </span>
               <ArrowRightIcon className='cursor-pointer' onClick={() => handleSelect(prev => ({...prev, medicalHistory: true}))} />
            </div>
            <div className="rounded-[4px] border border-[#eaecf0] p-[12px] flex justify-between items-center w-1/2">
               <span>
                <p className="text-base font-medium text-primary">Surgical Treatments</p>
                <p className="text-sm text-secondary">2 inputs</p>
               </span>
               <ArrowRightIcon className='cursor-pointer' onClick={() => handleSelect(prev => ({...prev, surgicalHistory: true}))} />
            </div>
          </div>
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
    </>
  );
};

export default MedicalHistory;
