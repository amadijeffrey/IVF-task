import React, { useState } from "react";

import ReportIcon from "../../../assets/sidebar/report.svg?react";
import TreatmentIcon from "../../../assets/sidebar/treatment.svg?react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import HomeIcon from "../../../assets/sidebar/dashboard.svg?react";
import PeopleIcon from "../../../assets/sidebar/users.svg?react";
import SchedulesIcon from "../../../assets/sidebar/calendar.svg?react";
import AccountIcon from "../../../assets/sidebar/profile.svg?react";
import LogoutIcon from "../../../assets/sidebar/logout.svg?react";
import TrackingIcon from "../../../assets/sidebar/tracking.svg?react";
import PaymentIcon from "../../../assets/sidebar/payment.svg?react";
import SpecimenIcon from "../../../assets/sidebar/beaker.svg?react";
import "./sidebar.scss";

const doctorCategory = [
  {
    title: "Dashboard",
    path: "/dashboard/doctor/home",
    icon: <HomeIcon />,
  },
  {
    title: "Patient management",
    path: "/dashboard/doctor/patients",
    icon: <PeopleIcon />,
  },
  {
    title: "Treatment",
    path: "/dashboard/doctor/treatments",
    icon: <TreatmentIcon />,
  },
  {
    title: "Schedules",
    path: "/dashboard/doctor/schedules",
    icon: <SchedulesIcon />,
  },
  {
    title: "Report",
    path: "/dashboard/doctor/reports",
    icon: <ReportIcon />,
  },
  {
    title: "Profile",
    path: "/dashboard/doctor/profile",
    icon: <AccountIcon />,
  },
];

export const patientCategory = [
  {
    title: "Dashboard",
    path: "/dashboard/patient/home",
    icon: <HomeIcon />,
  },
  {
    title: "Treatment",
    path: "/dashboard/patient/treatments",
    icon: <TreatmentIcon />,
  },
  {
    title: "Schedules",
    path: "/dashboard/patient/schedules",
    icon: <SchedulesIcon />,
  },
  {
    title: "Tracking",
    path: "/dashboard/patient/tracking",
    icon: <TrackingIcon />,
  },
  {
    title: "Report",
    path: "/dashboard/patient/reports",
    icon: <ReportIcon />,
  },
  {
    title: "Payment",
    path: "/dashboard/patient/payments",
    icon: <PaymentIcon />,
  },
  {
    title: "Profile",
    path: "/dashboard/patient/profile",
    icon: <AccountIcon />,
  },
];

export const adminCategory = [
  {
    title: "Dashboard",
    path: "/dashboard/admin/home",
    icon: <HomeIcon />,
  },
  {
    title: "Patients",
    path: "/dashboard/admin/patients",
    icon: <PeopleIcon />,
  },
  {
    title: "Staff",
    path: "/dashboard/admin/staff",
    icon: <TrackingIcon />,
  },
  {
    title: "Management",
    path: "/dashboard/admin/management",
    icon: <SpecimenIcon />,
    sublinks: [
      {
        title: "Lab Management",
        path: "/dashboard/admin/management/lab",
      },
      {
        title: "Specimen Management",
        path: "/dashboard/admin/management/specimen",
      },
    ],
  },
  {
    title: "Schedules",
    path: "/dashboard/admin/schedules",
    icon: <SchedulesIcon />,
  },
];

const Sidebar = ({ type }) => {
  const location = useLocation();

  const isActiveRoute = (route) => {
    return location.pathname === route.path || (route.sublinks && route.sublinks.some(sublink => location.pathname === sublink.path));
  };

  const [dropdownOpen, setDropdownOpen] = useState(() => {
    const initialState = {};
    adminCategory.forEach(route => {
      if (route.sublinks) {
        initialState[route.title] = isActiveRoute(route);
      }
    });
    return initialState;
  });

  const toggleDropdown = (title) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [title]: !prevState[title],
    }));
  };

  const handleLogout = () => {
    localStorage.removeItem(utils.tokenVar);
    localStorage.removeItem("SAVED_USER_INFO");
    window.location.href = "/login";
  };

  let sidebarRoutes;
  if (type === "doctor") {
    sidebarRoutes = doctorCategory;
  } else if (type === "patient") {
    sidebarRoutes = patientCategory;
  } else if (type === "admin") {
    sidebarRoutes = adminCategory;
  }

  return (
    <div className="relative flex flex-col w-full justify-between p-4 h-screen bg-[#f7f7f7]">
      <div className="space-y-4 mt-6 w-full">
        {/* Logo */}
        <Link to="/" className="pb-8">
          <div className="flex items-center">
            <img src={logo} alt="Brand logo" width="125" height="45" className="mb-5" />
          </div>
        </Link>

        {sidebarRoutes.map((route, index) => (
          <div key={index}>
            {route.sublinks ? (
              <div>
                <div
                  className="sidebartab flex items-center w-full rounded-md transition-all mt-4 duration-300 ease-in-out text-[#555557]"
                  onClick={() => toggleDropdown(route.title)}
                >
                  <div className="flex items-center justify-start w-full h-full gap-x-6 px-2 cursor-pointer">
                    {route.icon}
                    <div className="py-2 text-base">{route.title}</div>
                  </div>
                  <span>
                    {dropdownOpen[route.title] ? (
                      <svg
                        className="w-6 h-6 scale-[0.4] xl:scale-[0.5] text-gray-800"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 8"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-6 h-6 scale-[0.4] xl:scale-[0.5] text-gray-800"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 8"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
                        />
                      </svg>
                    )}
                  </span>
                </div>
                {dropdownOpen[route.title] && (
                  <div className="ml-6">
                    {route.sublinks.map((sublink, subIndex) => (
                      <NavLink to={sublink.path} key={subIndex}>
                        <div className="sublinktab flex w-full rounded-md transition-all mt-2 duration-300 ease-in-out text-[#555557]">
                          <div className="flex items-center justify-start w-full h-full gap-x-6 px-2 cursor-pointer">
                            <div className="py-2 text-base">{sublink.title}</div>
                          </div>
                        </div>
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink to={route.path} key={index}>
                <div className="sidebartab flex w-full rounded-md transition-all mt-4 duration-300 ease-in-out text-[#555557]">
                  <div className="flex items-center justify-start w-full h-full gap-x-6 px-2 cursor-pointer">
                    {route.icon}
                    <div className="py-2 text-base">{route.title}</div>
                  </div>
                </div>
              </NavLink>
            )}
          </div>
        ))}
      </div>

      <div
        className="flex items-center justify-start gap-x-6 cursor-pointer text-[14px]"
        onClick={handleLogout}
      >
        <div className="flex items-center justify-start w-full h-full gap-x-6 px-2 cursor-pointer">
          <LogoutIcon />
          <div className="py-2 text-base text-secondary">Logout</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
