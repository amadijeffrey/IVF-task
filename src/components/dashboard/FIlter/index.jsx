import React from 'react'

const PageFilters = () => {
    return (
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
            />
          </div>
          <div className="flex gap-x-[5px]">
            <NewDropdown
              className="bg-white"
              options={["Active", "Inactive", "All"]}
            />
          </div>
        </div>
        </div>
    )
}