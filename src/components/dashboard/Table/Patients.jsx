import React, { useCallback, useEffect, useRef, useState } from "react";
import NewDropdown from "../Dropdown/newDropDown";
import SecondaryButton from "../ButtonComponent/secondaryButton";
import InputComponent from "../InputComponent";
import {
  useGetAllEmployeesQuery,
  useGetSubscriptionPlansQuery,
} from "../../../redux/services/dashboardQueries";
import { addQueryParams } from "../../../utils";
import { useDebounce } from "../../../helpers/hooks/useDebounce";



const EmployeeTable = ({ isLitePlan, handleSelected }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [name, setName] = useState("");
  const debouncedSearchValue = useDebounce(name, 1000);
  const [formData, setFormData] = useState({
    plan: "",
  });
  const [filterParams, setFilterParams] = useState<FilterParams>({
    name: "",
    has_active_lite: "",
    no_lite: "",
    subscription_plan_id: "",
    is_active_account_status: "",
  });
  const [updatedPlansArray, setUpdatedPlansArray] = useState([])

  const { data: employeesData, isFetching } = useGetAllEmployeesQuery({
    page: currentPage,
    searchQuery: addQueryParams(filterParams),
  });
  const { data: plansData } = useGetSubscriptionPlansQuery({});


  useEffect(() => {
    const newArray = plansData?.data && plansData?.data.map(({name,id}) => {
      return {
        name,
        id,
      }
    })
    if (newArray) {
      setUpdatedPlansArray([{name: "All", id: ""}, ...newArray])
    }
  }, [plansData])

  useEffect(() => {
    setFilterParams({ ...filterParams, name: debouncedSearchValue });
  }, [debouncedSearchValue]);

  const handlePagination = useCallback((type) => {
    if (type === "prev") {
      setCurrentPage((prev) => prev - 1);
    }
    if (type === "next") {
      setCurrentPage((prev) => prev + 1);
    }
  }, []);


  const handleSelectedPlan = useCallback((option) => {
    setFormData({
      ...formData,
      plan: option?.name,
    });
    setFilterParams({ ...filterParams, subscription_plan_id: option.id });
  }, []);

  return (
    <>
      <div>
        <div className="flex justify-between items-center mb-[30px]">
          <div className="relative flex items-center rounded-[5px] md:w-[30%] border focus:border-afColor bg-[#fcfcfd]  border-[#dde5e8] ">
            <InputComponent
              placeholder="search by name"
              className={"bg-white"}
              showLeftIcon={true}
              type="search"
              id="employeeSearch"
              // name="lastName"
              value={name}
              handleChange={(e) => setName(e.target.value?.trim())}
            />
          </div>
          <div className="flex gap-x-[5px]">
            {!isLitePlan ? (
              <NewDropdown
                className="bg-white"
                objectOptions={updatedPlansArray}
                keySelector={"name"}
                value={formData?.plan || "Sub Plans"}
                onChange={(option) => handleSelectedPlan(option)}
              />
            ) : (
              <NewDropdown
                className="bg-white"
                options={["Active", "Inactive", "All"]}
                value={
                  filterParams?.has_active_lite === 1
                    ? "Active"
                    : filterParams?.has_active_lite === 0
                    ? "Inactive"
                    : "Lite plan"
                }
                onChange={(option) =>
                  setFilterParams({
                    ...filterParams,
                    has_active_lite:
                      option === "Active" ? 1 : option === "All" ? "" : 0,
                  })
                }
              />
            )}
            <NewDropdown
              className="bg-white"
              options={["Active", "Inactive", "All"]}
              value={
                filterParams?.is_active_account_status === 1
                  ? "Active"
                  : filterParams?.is_active_account_status === 0
                  ? "Inactive"
                  : "Acct status"
              }
              onChange={(option) =>
                setFilterParams({
                  ...filterParams,
                  is_active_account_status:
                    option === "Active" ? 1 : option === "All" ? "" : 0,
                })
              }
            />
          </div>
        </div>
        <div className="rounded-t-lg border border-[#eaecf0]">
          <table className="relative bg-white w-full table-fixed text-left text-[#475467] font-medium max-h-[60%] overflow-auto">
            <thead>
              <tr className="h-[44px] border-[#eaecf0] sticky top-0 z-10 bg-[#f5f6f7]">
                <th className="text-xs xl:text-sm w-[15%] px-[24px] font-medium">
                  First Name
                </th>
                <th className="text-xs xl:text-sm w-[15%] px-[24px] font-medium">
                  Last Name
                </th>
                <th className="text-xs xl:text-sm w-[20%] px-[24px] font-medium">
                  Email
                </th>
                {!isLitePlan && (
                  <th className="text-xs xl:text-sm w-[20%] px-[24px] font-medium">
                    Subscription Plan
                  </th>
                )}
                <th className="text-xs xl:text-sm w-[15%] px-[24px] font-medium">
                  Acct Status
                </th>
                <th className="text-xs xl:text-sm w-[15%] px-[24px] font-medium">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {employeesData?.data.length > 0 ? (
                employeesData?.data?.map((el, i) => {
                  return (
                    <tr
                      key={i}
                      className="h-9 md:h-12 border-b border-[#eaecf0]"
                    >
                      <td className="text-xs xl:text-base px-[24px] py-[16px]">
                        {el?.firstName}
                      </td>
                      <td className="text-xs xl:text-base px-[24px] py-[16px]">
                        {el?.lastName}
                      </td>
                      <td className="text-xs xl:text-base truncate px-[24px] py-[16px]">
                        {el?.email}
                      </td>
                      {!isLitePlan && (
                        <td className="text-xs xl:text-base px-[24px] py-[16px]">
                          {el?.currentSubscription?.subscriptionPlan?.name ||
                            "Nil"}
                        </td>
                      )}
                      <td className="text-xs xl:text-base px-[24px] py-[16px]">
                        {
                          <div
                            className={`flex items-center border p-2 rounded-[16px] gap-x-2  w-[80px] ${
                              el?.isActive === 1
                                ? "text-[#14804A] border-[#14804A] bg-[#ecfdf3]"
                                : "text-[#667085] border-[#667085] bg-[#f9fafb]"
                            } `}
                          >
                            <div
                              className={`h-3 w-3 rounded-full ${
                                el?.isActive === 1
                                  ? "bg-[#17b26a]"
                                  : "bg-[#667085]"
                              }`}
                            />
                            <p className="text-xs font-medium">
                              {el?.isActive === 1 ? "Active" : "Inactive"}
                            </p>
                          </div>
                        }
                      </td>
                      <td className="text-xs xl:text-sm px-[24px] py-[16px]">
                        {" "}
                        <SecondaryButton
                          onClick={() => handleSelected(el?.userID)}
                          text="View Account"
                          border={true}
                          className="text-[#344054] bg-white"
                        />
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
        <div className="flex justify-between items-center bg-[#f5f6f7] py-[12px] px-[24px] border-x border-b border-[#eaecf0] rounded-b-lg">
          <p>{`page ${employeesData?.meta?.current_page || 0} of ${
            employeesData?.meta?.last_page || 0
          }`}</p>
          <div className="flex gap-x-2">
            <SecondaryButton
              onClick={() => handlePagination("prev")}
              disabled={currentPage === 1}
              text="Previous"
              border={true}
              className="text-[#344054] bg-white"
            />
            <SecondaryButton
              onClick={() => handlePagination("next")}
              disabled={currentPage === employeesData?.meta?.last_page}
              text="Next"
              border={true}
              className="text-[#344054] bg-white"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeTable;
