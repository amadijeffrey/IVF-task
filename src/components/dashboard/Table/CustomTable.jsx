import React from 'react';
import './customTable.scss'
import Button from '../ButtonComponent';
import EmptyIcon from '../../../assets/empty.svg'

const CustomTable = ({ columns, data, showPagination }) => {
  return (
    <>
    <div className="border border-[#eaecf0] rounded-[4px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.1)]">
      {data.length > 0 ?
      <table className="relative bg-white w-full table-fixed text-left text-[#475467] font-medium table rounded-b-[4px]">
        <thead>
          <tr className='h-[44px] border-b border-[#eaecf0] sticky top-0 z-10 bg-[#f5f6f7]'>
            {columns.map((col) => (
              <th key={col.key} style={{ width: col.width }} className={`text-xs px-[24px] font-bold`}>
                {col.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, rowIndex) => (
            <tr key={rowIndex} className='h-9 md:h-12 border-b border-[#eaecf0]'>
              {columns.map((col) => (
                <td key={col.key} className='text-sm font-normal px-[24px] py-[16px] truncate'>{col.render ? col.render(item[col.dataIndex]) : item[col.dataIndex]}
</td>
              ))}
            </tr>
          ))
        }
        </tbody>
      </table>
      :
       <div className='flex justify-center items-center w-full h-[250px]'>
        <img src={EmptyIcon} />
        </div>}
    </div>
     {showPagination && <div className="flex justify-between items-center bg-white py-[12px] px-[24px]">
      {/* <p>{`page ${employeesData?.meta?.current_page || 0} of ${
        employeesData?.meta?.last_page || 0
      }`}</p> */}
      <div className="flex gap-x-2">
        <Button
        //   onClick={() => handlePagination("prev")}
        //   disabled={currentPage === 1}
          text="Previous"
          border={true}
          className="text-[#344054] bg-white !rounded-lg"
        />
        <Button
        //   onClick={() => handlePagination("next")}
        //   disabled={currentPage === employeesData?.meta?.last_page}
          text="Next"
          border={true}
          className="text-[#344054] bg-white !rounded-lg"
        />
      </div>
    </div>}
    </>
  );
};

export default CustomTable;
