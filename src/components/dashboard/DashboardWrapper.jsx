import React from "react";
import { useState } from "react";
import Sidebar from "./SideBar";
import Navbar from "./NavBar";

const DashboardWrapper = ({ children }) => {
  const [navOpened, setNavOpened] = useState(false);

  const handleNavToggle = () => {
    setNavOpened(!navOpened);
  };
  return (
    <div>
      <div className="flex flex-col items-center overflow-hidden md:h-screen w-full mx-auto">
        <div className=" flex w-full h-full">
            <div
              className='w-1/5 z-10 h-full border-r'
            >
              <Sidebar type={'patient'} />
            </div>

          <div className=" w-4/5">
              <Navbar/>
            <div
              className={`w-full h-[calc(100vh-50px)] p-[40px] overflow-y-scroll`}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardWrapper;
