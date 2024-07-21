import React, { useEffect, useState, createContext } from "react";
import NotificationIcon from "../../../assets/bell.svg?react";
import { useGetProfileQuery } from "../../../redux/services/dashboardQueries";
import { useSelector } from "react-redux";
import NotificationModal from "../Modal/Notification";

function getInitials(name) {
  const words = name.split(" ");
  const initials = words.map((word) => word.charAt(0));

  return initials.join("");
}

const Navbar = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
    {showModal && <NotificationModal onClose={() => setShowModal(false)}/>}
    <nav className="flex justify-end py-[16px] px-[32px] items-center  w-full bg-white border-b border-[#E4E4E7] h-[50px]">
      <div className="flex items-center">
        <NotificationIcon  className='cursor-pointer' onClick={() => setShowModal(true)}/>
        <div className="flex items-center border-l border-[#eaecf0] gap-x-[12px] ml-[25px]">
          <div className="bg-primary w-[32px] h-[32px] text-white flex justify-center items-center rounded-full ml-[20px]">
            {getInitials("John Doe")}
          </div>
          <p className="text-[#344054] font-medium text-sm">John Doe</p>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
