import React from "react";
import ReactDOM from "react-dom";
import Button from "../ButtonComponent";
import closeIcon from '../../../assets/close.svg'



const NotificationModal = ({modalTitle, children, onClick, onClose, loading, submitText}) => {
  return ReactDOM.createPortal(
    <div
      className='fixed inset-0 flex items-start justify-end z-10 top-0 left-0 bottom-0 right-0'
    >
      <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
      <div className="modal-container bg-white w-[640px] rounded shadow-lg z-50 overflow-y-auto">
      <div className="modal-content text-left flex flex-col">
          <div className="flex justify-between items-center border-b border-[#eaecf0] px-[32px] py-[19px]">
            <p className="text-2xl font-bold">Notification</p>
            <div className="cursor-pointer z-50 h-[40px] w-[40px] flex justify-center items-center rounded-md" onClick={onClose}>
              <img src={closeIcon} />
            </div>
          </div>
          <div className="p-[32px]">
          <div className="relative z-30 max-h-[500px] overflow-auto">
            {children}
          </div>
    

            </div>
        </div>
      </div>
    </div>, document.getElementById('modal-root')
  );
};

export default NotificationModal