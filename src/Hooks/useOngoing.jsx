import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useOngoing = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const {
    data: ongoing = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["ongoing", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/tasks/${user.email}/ongoing`);
      return res.data;
    },
  });
  return [ongoing, isLoading, refetch];
};

export default useOngoing;
