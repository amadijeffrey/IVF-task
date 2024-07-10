import React from "react";
import DashboardWrapper from "../../components/dashboard/DashboardWrapper";
import UsersIcon from "../../assets/sidebar/users.svg?react";
import CalendarIcon from "../../assets/sidebar/calendar.svg?react";
import DoughnutChart from "../../components/dashboard/Charts/donut";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

const recentActivities = [
  {
    title: "Created new treatment plan",
    user: "Rachel Mark",
    description: "Diagnosed for endometroisis",
    date: new Date().toLocaleString(),
  },
  {
    title: "Update treatment plan",
    user: "Lana Robinson",
    description: "Diagnosed for endometroisis",
    date: new Date().toLocaleString(),
  },
  {
    title: "Created new treatment plan",
    user: "Rachel Mark",
    description: "Diagnosed for endometroisis",
    date: new Date().toLocaleString(),
  },
  {
    title: "Created new treatment plan",
    user: "Rachel Mark",
    description: "Diagnosed for endometroisis",
    date: new Date().toLocaleString(),
  },
];

const AdminDashboardPage = () => {
  return (
    <DashboardWrapper>
      <div className="flex flex-col gap-y-[24px]">
        <p className="text-2xl font-bold">Welcome, Oriaku</p>
        <div className="h-[122px] flex gap-x-[16px] doctorDashboard">
          <div className="p-6 w-[33%] flex gap-x-[16px] items-center border border-[#eaecf0] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
            <div className="w-[48px] h-[48px] bg-[#f0effb] flex justify-center items-center rounded-full">
              <UsersIcon />
            </div>
            <div>
              <p className="text-base text-secondary font-medium mb-[8px]">
               Total Appointments
              </p>
              <p className="font-bold text-[32px] leading-[41px]">57</p>
            </div>
          </div>
          <div className="p-6 w-[33%] flex gap-x-[16px] items-center border border-[#eaecf0] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
            <div className="w-[48px] h-[48px] bg-[#f0effb] flex justify-center items-center rounded-full">
              <CalendarIcon />
            </div>
            <div>
              <p className="text-base text-secondary font-medium mb-[8px]">
                Number of consultations
              </p>
              <p className="font-bold text-[32px] leading-[41px]">124</p>
            </div>
          </div>
          <div className="p-6 w-[33%] flex gap-x-[16px] items-center border border-[#eaecf0] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
            <div className="w-[48px] h-[48px] bg-[#f0effb] flex justify-center items-center rounded-full">
              <UsersIcon />
            </div>
            <div>
              <p className="text-base text-secondary font-medium mb-[8px]">
                Number of Staff
              </p>
              <p className="font-bold text-[32px] leading-[41px]">57</p>
            </div>
          </div>
        </div>
        <div className="h-[400px] flex gap-x-[24px]">
          <div className="p-[20px] w-[51%] flex gap-x-[16px] items-center border border-[#eaecf0] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
           <DoughnutChart />
          </div>
          <div className="p-[20px] w-[49%] flex flex-col gap-y-[16px] border border-[#eaecf0] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
            <p className="font-bold text-lg">Today's appointment</p>
            <div className="flex flex-col gap-y-[16px] max-h-[80%]">
              <div className="h-[124px] rounded-[6px] flex p-[12px] bg-[#090f47] text-white flex flex-col justify-between">
                <p className="text-[10px]">now</p>
                <div className="flex justify-between">
                  <p className="font-bold text-sm">Ovulation Induction</p>
                  <p className="text-xs">Lana Robinson</p>
                </div>
                <hr className="bg-white h-[1px]" />
                <div>
                  <p className="font-bold text-lg">12pm - 1pm</p>
                  <p className="text-[10px]">{new Date().toDateString()}</p>
                </div>
              </div>
              <div className="h-[64px] rounded-[6px] flex p-[12px] border-l-[4px] border-[#090f47] bg-[#f0effb] justify-between items-center">
                <div className="flex items-center">
                  <div className="mr-[16px] ">
                    <p className="text-xs text-secondary mb-[2px] leading-[18px]">
                      {daysOfWeek[new Date().getDay()]}
                    </p>
                    <p className="text-lg text-primary font-medium">
                      {new Date().getDate()}
                    </p>
                  </div>
                  <div>
                    <p className="text-[15px] font-medium leading-[20px] text-primary mb-[2px]">
                      Follow up care
                    </p>
                    <p className="text-xs text-secondary">12pm - 1pm</p>
                  </div>
                </div>
                <p className="text-primary text-xs">Lana Robinson</p>
              </div>
            </div>
          </div>
        </div>
        <p className="font-bold">Recent Activity</p>
        <div className="py-[8px] px-[16px] border border-[#eaecf0] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
          {recentActivities.map((activity, index) => {
            return (
              <div key={index}>
                <div className="flex gap-x-[16px] justify-between py-[12px]">
                  <div className="w-[40px] h-[40px] bg-[#f0effb] rounded-full"></div>
                  <div className="flex flex-col w-[85%] gap-y-[5px] pb-[5px]">
                    <p className="text-base font-medium text-primary">{`${activity?.title} - ${activity?.user}`}</p>
                    <p className="text-sm text-secondary">
                      {activity?.description}
                    </p>
                    <p className="text-sm text-secondary">{activity?.date}</p>
                  </div>
                  <button className="bg-[#f0effb] text-sm border border-[#e9d7fe] text-[#6941c6] h-[40px] flex justify-center items-center shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] w-[140px]">
                    View Details
                  </button>
                </div>
                <hr className="bg-[#eaecf0] h-[1px]" />
              </div>
            );
          })}
        </div>
      </div>
    </DashboardWrapper>
  );
};

export default AdminDashboardPage;
