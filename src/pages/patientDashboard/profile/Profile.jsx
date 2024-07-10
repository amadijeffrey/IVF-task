import React, { useState } from "react";
import picture1 from "../../../assets/picture1.png";
import ScanIcon from "../../../assets/scan.svg?react";
import InputComponent from "../../../components/dashboard/Input";
import Dropdown from "../../../components/dashboard/DropDown/DropDown";
import Button from "../../../components/dashboard/ButtonComponent";

const Profile = () => {
  const [isError, setIsError] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "chibuike",
    lastname: "amadi",
    email: "amadichibuike72@gmail.com",
  });
  return (
    <>
      <p className="text-xl font-bold text-primary">Profile</p>
      <div className="flex gap-x-[32px]">
        <div className="w-[20%] flex flex-col gap-y-[12px]">
          <div className="w-[80px] h-[80px] rounded-full">
            <img src={picture1} className="w-full h-full object-cover" />
          </div>
          <p className="font-bold text-lg">Bulaba Nibuti</p>
          <p className="text-sm">bulabanibuti@gmail.com</p>
          <div className="px-[10px] py-[6px] border border-[[#eaecf0] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] rounded-[56px] bg-[#f5f6f7] flex justify-between items-center">
            <p className="text-primary text-sm font-medium">
              Patient ID:{" "}
              <span className="text-secondary text-sm">user_4536464</span>
            </p>
            <ScanIcon />
          </div>
        </div>
        <div className="w-[80%] ">
        <div className="rounded-[4px] border border-[[#eaecf0] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] flex flex-col gap-y-[16px] mb-[24px]">
          <div className="py-[16px] px-[24px] bg-[#f5f6f7] border-b border-[#eaecf0] font-bold text-primary">
           Personal Profile
          </div>
          <form className="px-[24px] pb-[24px] flex flex-col gap-y-[16px]">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-primary text-sm font-bold mb-[10px]"
                >
                  First Name
                </label>
                <InputComponent
                  readOnly={true}
                  className="bg-white w-full"
                  showLeftIcon={false}
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstname}
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-primary text-sm font-bold mb-[10px]"
                >
                  Last Name <span className="text-red-600">*</span>
                </label>
                <InputComponent
                  readOnly={true}
                  className="bg-white w-full"
                  showLeftIcon={false}
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastname}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-primary text-sm font-bold mb-[10px]"
                >
                  Email <span className="text-red-600">*</span>
                </label>
                <InputComponent
                  className="bg-white w-full"
                  showLeftIcon={false}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                />
              </div>
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-primary text-sm font-bold mb-[10px]"
                >
                  Phone Number <span className="text-red-600">*</span>
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
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-primary text-sm font-bold mb-[10px]"
                >
                  Date of Birth
                </label>
                <InputComponent
                  placeholder="Enter email"
                  className="bg-white w-full"
                  showLeftIcon={false}
                  type="date"
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
                  className="block text-primary text-sm font-bold mb-[10px]"
                >
                Gender
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
          </form>
        </div>
        <div className="rounded-[4px] border border-[#eaecf0] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] flex flex-col gap-y-[16px]">
          <div className="py-[16px] px-[24px] bg-[#f5f6f7] border-b border-[#eaecf0] font-bold text-primary">
            Emergency Contact
          </div>
          <form className="px-[24px] pb-[24px] flex flex-col gap-y-[16px]">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-primary text-sm font-bold mb-[10px]"
                >
                  First Name
                </label>
                <InputComponent
                  readOnly={true}
                  className="bg-white w-full"
                  showLeftIcon={false}
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstname}
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-primary text-sm font-bold mb-[10px]"
                >
                  Last Name <span className="text-red-600">*</span>
                </label>
                <InputComponent
                  readOnly={true}
                  className="bg-white w-full"
                  showLeftIcon={false}
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastname}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-primary text-sm font-bold mb-[10px]"
                >
                  Email <span className="text-red-600">*</span>
                </label>
                <InputComponent
                  className="bg-white w-full"
                  showLeftIcon={false}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                />
              </div>
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-primary text-sm font-bold mb-[10px]"
                >
                  Phone Number <span className="text-red-600">*</span>
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
                  className="block text-primary text-sm font-bold mb-[10px]"
                >
                  Relationship
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
        </div>
      </div>
    </>
  );
};

export default Profile;
