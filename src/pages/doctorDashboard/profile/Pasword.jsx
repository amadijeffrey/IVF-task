import React, { useState } from 'react'
import InputComponent from '../../../components/dashboard/Input'
import Button from '../../../components/dashboard/ButtonComponent'

const Password = () => {
    const [formData, setFormData] = useState({
        old: '',
        new: '',
        confirm: ''
    })
    const [isError, setIsError] = useState(false)
    return (
 <div className='py-[32px] px-[24px] border border-[#dde5e8] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] flex flex-col gap-y-[16px] rounded-[7px]'>
   <p className="text-xl font-bold text-primary">Change Password</p>
   <form className='flex flex-col gap-y-[16px]'>
   <div className='w-1/2'>
                <label
                  htmlFor="firstName"
                  className="block text-primary text-sm font-bold mb-[10px]"
                >
                  Old Password
                </label>
                <InputComponent
                placeholder="old password"
                  readOnly={true}
                  className="bg-white w-full"
                  showLeftIcon={false}
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstname}
                />
              </div>
      <div className='w-1/2'>
        <label className="block text-sm font-bold text-primary mb-[10px]">
          New password
        </label>
        <InputComponent
          placeholder="new password"
          className="bg-white w-full border border-[#dde5e8]"
          showLeftIcon={false}
          type="number"
          id="priceLimit"
          name="priceLimit"
          value={formData.new}
          handleChange={(e) =>
            isError
              ? setIsError(false)
              : setFormData({ ...formData, limit: e.target.value })
          }
        />
        <p className="text-red-600 text-sm mt-1">
          {isError && formData.limit.trim() === "" ? "required" : ""}
        </p>
      </div>
      <div className='w-1/2'>
        <label className="block text-sm font-bold text-primary mb-[10px]">
          Confirm New password
        </label>
        <InputComponent
          placeholder="confirm new password"
          className="bg-white w-full"
          showLeftIcon={false}
          type="number"
          id="priceLimit"
          name="priceLimit"
          value={formData.confirm}
          handleChange={(e) =>
            isError
              ? setIsError(false)
              : setFormData({ ...formData, limit: e.target.value })
          }
        />
        <p className="text-red-600 text-sm mt-1">
          {isError && formData.limit.trim() === "" ? "required" : ""}
        </p>
      </div>
      <Button className='bg-primary text-white w-[200px]' text='Change password' />
   </form>
 </div>
    )
}

export default Password