import React, { useState, useRef, useEffect} from "react";
import SignupImage from "../assets/signup.png";
import logo from "../assets/logo.svg";
import InvisibleIcon from "../assets/visibilityOff.svg";
import { VisibleIcon } from "../components/icons/visibilityIcon";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useLazySignupQuery } from "../redux/services/dashboardQueries";

const SignupPage = () => {
  const emailAddressRef = useRef();
  const passwordRef = useRef();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [doSignup] = useLazySignupQuery();
  const navigate = useNavigate();
  const userEmail =
    localStorage.getItem("local_storage_email") || "";

  useEffect(() => {
    if (userEmail) {
      emailAddressRef.current.value = userEmail;
      setRememberMe(true);
    }
  }, []);

  const handleShowpassword = (e) => {
    e.stopPropagation();
    setShowPassword((prevState) => !prevState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !validateEmail(emailAddressRef.current.value.trim()) ||
      passwordRef.current.value.trim() === ""
    ) {
      setIsError(true);
      return;
    }

    if (rememberMe) {
      const value = emailAddressRef.current.value;
      localStorage.setItem("local_storage_email", value);
    } else if (!rememberMe && userEmail) {
      localStorage.removeItem("local_storage_email");
    }

    setLoading(true);

    const data = {
      email: emailAddressRef.current.value,
      password: passwordRef.current.value,
    };

    mutate(data, {
      onSuccess: (data) => {
        setLoading(false);
        if (data.data.data.applicationName !== "rigourBusiness")
          return toast?.error(
            "You do not have permission to access this application"
          );
        window.localStorage.setItem(`${utils.tokenVar}`, `${data.data.token}`);
        navigate("/dashboard");
      },
      onError: (error) => {
        setLoading(false);
        toast?.error(error.response.data.message);
      },
    });
  };

  return (
    <div className="flex p-5 h-screen bg-[#f8f9fa]">
      <div className="w-full lg:w-[55%] flex justify-start ml-[30px]">
        <div className="flex flex-col  gap-y-16 xl:gap-y-28 w-[28.5rem]">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className="flex flex-col gap-y-[2rem]">
            <p className="text-3xl font-bold">Welcome to fertility clinic</p>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-[0.6375rem] mb-5">
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
                    {isError &&
                    !validateEmail(emailAddressRef.current.value.trim())
                      ? "enter a valid email"
                      : ""}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-[0.6375rem] mb-3">
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
                          <img src={InvisibleIcon} className="scale-[0.9] lg:scale-95"/>
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
              <div className="mb-12">
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
                  "Create Account"
                )}
              </button>
              <p className='text-base'>Already have an account? <Link>Login</Link></p>
            </form>
          </div>
        </div>
      </div>
      <div className="hidden lg:block w-[45%] relative rounded-lg">
        <div className="h-full w-full absolute right-0 bottom-0">
          <img
            src={SignupImage}
            className="h-full w-full"
            alt="signup page design"
          />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;

