import Lottie from "lottie-react";
import loginImg from "../../assets/login.json";
import logoImg from "../../assets/logo.png";
import { FaEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const LogIn = () => {
  const [showPass, setShowPass] = useState();
  const { login } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    login(data.email, data.password).then((result) => {
      console.log(result);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User Logged in successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
    });
  };
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col md:flex-row w-full mx-auto overflow-hidden bg-white rounded-lg shadow-lg lg:max-w-4xl">
          <div className="flex justify-center items-center mx-auto ">
            <Lottie animationData={loginImg}></Lottie>
          </div>

          <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
            <div className="flex justify-center mx-auto">
              <img className="h-14" src={logoImg} alt="" />
            </div>

            <p className="mt-3 text-xl text-center text-gray-600 ">
              Welcome back!
            </p>

            <SocialLogin></SocialLogin>

            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b  lg:w-1/4"></span>

              <a className="text-xs text-center text-gray-500 uppercase  hover:underline">
                or login with email
              </a>

              <span className="w-1/5 border-b  lg:w-1/4"></span>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-4">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 "
                  htmlFor="LoggingEmailAddress"
                >
                  Email Address
                </label>
                <input
                  id="LoggingEmailAddress"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                  type="email"
                  name="email"
                  {...register("email", { required: true })}
                  placeholder="Your email"
                />
                {errors.email && (
                  <span className="text-red-500">Your email is required</span>
                )}
              </div>

              <div className="mt-4 relative">
                <div className="flex justify-between">
                  <label
                    className="block mb-2 text-sm font-medium text-gray-600 "
                    htmlFor="loggingPassword"
                  >
                    Password
                  </label>
                  <p className="text-xs text-gray-500  hover:underline">
                    Forget Password?
                  </p>
                </div>

                <input
                  id="loggingPassword"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg   focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                  type={showPass ? "text" : "password"}
                  name="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                  })}
                  placeholder="********"
                />
                {errors.password && (
                  <span className="text-red-500">
                    Your password is incorrect
                  </span>
                )}
                <p
                  onClick={() => setShowPass(!showPass)}
                  className="absolute inset-y-0 end-0 grid place-content-center px-4  top-5 hover:cursor-pointer"
                >
                  {showPass ? <FaEye /> : <IoMdEyeOff />}
                </p>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                >
                  Log In
                </button>
              </div>
            </form>

            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b md:w-1/4"></span>

              <Link to={"/sign-up"}>
                <p className="text-xs text-gray-500 uppercase  hover:underline">
                  or <span className="text-blue-500 font-medium">sign up</span>
                </p>
              </Link>

              <span className="w-1/5 border-b md:w-1/4"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
