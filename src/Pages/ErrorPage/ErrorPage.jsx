import Lottie from "lottie-react";
import errorAnimation from "../../assets/error.json";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <Lottie
        className=" md:w-[400px] lg:w-[600px] max-h-screen mx-auto"
        animationData={errorAnimation}
      ></Lottie>
      <div className="text-center">
        <Link to={"/"}>
          <button className="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
