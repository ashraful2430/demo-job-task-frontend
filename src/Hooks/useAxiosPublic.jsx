import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://demo-job-task-backend.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
