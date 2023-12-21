import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useLoadTodo = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const { data: toDo = [], isLoading } = useQuery({
    queryKey: ["to-do", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/tasks/${user.email}/to-do`);
      return res.data;
    },
  });
  return [toDo, isLoading];
};

export default useLoadTodo;
