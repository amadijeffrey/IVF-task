import React,{useRef, useState} from "react";
import InvisibleIcon from "../assets/visibilityOff.svg";
import { VisibleIcon } from "../components/icons/visibilityIcon";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "../components/dashboard/DropDown/DropDown";
import { useDispatch } from "react-redux";
import { updateClientData } from "../redux/features/client";

const LoginpPage = () => {
const emailAddressRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [formData, setFormData] = useState({
    userType: ''
  })
  const dispatch = useDispatch()
  // const { mutate } = useLogin();


  const handleShowpassword = (e) => {
    e.stopPropagation();
    setShowPassword((prevState) => !prevState);
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    // dispatch(
    //   updateClientData({
    //     userType: formData.userType,
    //   })
    // )
    window.localStorage.setItem('userType', formData.userType)

    if(formData.userType === 'patient'){
      navigate('/dashboard/patient/home')
    }
    else if(formData.userType === 'doctor'){
      navigate('/dashboard/doctor/home')
    }
    else if(formData.userType === 'admin'){
      navigate('/dashboard/admin/home')
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-[#f8f9fa]">
      <div className="flex flex-col gap-y-[2rem] bg-white w-[539px] p-6 rounded-[4px]">
        <p className="text-2xl font-bold text-center">Welcome to fertility clinic</p>
        <form className="flex flex-col gap-y-5" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-[0.6375rem]">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div>
              <div className="relative">
                <input
                  ref={emailAddressRef}
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="email address"
                  className="block w-full h-10 xl:h-12 bg-[#F3F3F5] border-1 rounded-[0.3125rem] border-[#DDE5E9] text-gray-900 shadow-sm placeholder:text-gray-400 outline-none focus:border-indigo-500 focus:border-2 text-xs md:text-sm sm:leading-6"
                  onChange={() => (isError ? setIsError(false) : "")}
                />
              </div>
              <p className="text-red-600 text-sm mt-1">
                {isError && !validateEmail(emailAddressRef.current.value.trim())
                  ? "enter a valid email"
                  : ""}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[0.6375rem]">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <div>
              <div className="relative">
                <input
                  ref={passwordRef}
                  id="paswword"
                  type={showPassword ? "text" : "password"}
                  autoComplete="password"
                  placeholder="password"
                  className="block w-[90%] h-10 xl:h-12 bg-[#F3F3F5] border-1 rounded-l-[0.3125rem] border-[#DDE5E9] text-gray-900 shadow-sm placeholder:text-gray-400 outline-none focus:border-2 focus:border-indigo-600 text-xs md:text-sm sm:leading-6"
                  onChange={() => (isError ? setIsError(false) : "")}
                />
                <div className="w-[10%] absolute inset-y-0 right-0 px-3 flex items-center justify-center border-[1px] rounded-r-[0.3125rem] bg-[#F3F3F5]">
                  <span
                    className="text-gray-500 sm:text-sm"
                    onClick={handleShowpassword}
                  >
                    {showPassword ? (
                      <VisibleIcon className="scale-[0.7] lg:scale-75" />
                    ) : (
                      <img
                        src={InvisibleIcon}
                        className="scale-[0.9] lg:scale-95"
                      />
                    )}
                  </span>
                </div>
              </div>
              <p className="text-red-600 text-sm mt-1">
                {isError && passwordRef.current.value.trim() === ""
                  ? "required"
                  : ""}
              </p>
            </div>
          </div>
          <div>
          <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              User type
            </label>
          <Dropdown
            options={["patient", "doctor", 'admin']}
            value={formData.userType}
            onChange={(item) =>
              isError
                ? setIsError(false)
                : setFormData({ ...formData, userType: item })
            }
          />
          </div>
          <div className="">
            <p className="text-sm text-[#8487A3] flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <span>Remember me</span>
            </p>
          </div>
          <button
            type="submit"
            className="h-12 w-full bg-[#6B5DD3] text-white rounded-lg mt-2 flex items-center justify-center"
          >
            {loading ? (
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
            ) : (
              "Submit"
            )}
          </button>
          <p className='text-base'>Don't have an account? <Link>Sign up</Link></p>
        </form>
      </div>
    </div>
  );
};

export default LoginpPage