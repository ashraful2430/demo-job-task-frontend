import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useAllTasks = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const { data: allTasks = [], isLoading } = useQuery({
    queryKey: ["all-tasks", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/tasks/${user.email}`);
      return res.data;
    },
  });
  return [allTasks, isLoading];
};

export default useAllTasks;
