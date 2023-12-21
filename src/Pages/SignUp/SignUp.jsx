import { Link } from "react-router-dom";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import Lottie from "lottie-react";
import signUpImg from "../../assets/signUp.json";
import logoImg from "../../assets/logo.png";

const SignUp = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col md:flex-row-reverse w-full mx-auto overflow-hidden bg-white rounded-lg shadow-lg lg:max-w-4xl">
          <div className="flex justify-center items-center mx-auto ">
            <Lottie animationData={signUpImg}></Lottie>
          </div>

          <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
            <div className="flex justify-center mx-auto">
              <img className="h-14" src={logoImg} alt="" />
            </div>

            <p className="mt-3 text-xl text-center text-gray-600 ">
              Sign Up for more fun!
            </p>

            <SocialLogin></SocialLogin>

            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b  lg:w-1/4"></span>

              <a className="text-xs text-center text-gray-500 uppercase  hover:underline">
                or login with email
              </a>

              <span className="w-1/5 border-b  lg:w-1/4"></span>
            </div>
            <form>
              <div className="mt-4">
                <label className="block mb-2 text-sm font-medium text-gray-600 ">
                  Name
                </label>
                <input
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg   focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                />
              </div>
              <div className="mt-4">
                <label className="block mb-2 text-sm font-medium text-gray-600 ">
                  Email Address
                </label>
                <input
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg   focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                  type="email"
                />
              </div>

              <div className="mt-4">
                <div className="flex justify-between">
                  <label className="block mb-2 text-sm font-medium text-gray-600 ">
                    Password
                  </label>
                </div>

                <input
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                  type="password"
                />
              </div>

              <div className="mt-6">
                <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                  Sign Up
                </button>
              </div>
            </form>

            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b md:w-1/4"></span>

              <Link to={"/login"}>
                <p className="text-xs text-gray-500 uppercase  hover:underline">
                  Have an account?{" "}
                  <span className="text-blue-500 font-medium">Log in</span>
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

export default SignUp;
