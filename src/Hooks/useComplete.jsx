import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useComplete = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const {
    data: completed = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["completed", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/tasks/${user.email}/completed`);
      return res.data;
    },
  });
  return [completed, isLoading, refetch];
};

export default useComplete;
