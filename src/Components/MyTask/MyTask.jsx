import Lottie from "lottie-react";
import useAllTasks from "../../Hooks/useAllTasks";
import loading from "../../assets/loading.json";
import Container from "../../Shared/Container";
import MyTaskDetails from "./MyTaskDetails";

const MyTask = () => {
  const [allTasks, isLoading] = useAllTasks();
  if (isLoading) {
    <Lottie
      className="w-40 flex justify-center items-center mx-auto min-h-screen"
      animationData={loading}
    ></Lottie>;
  }
  return (
    <div>
      <Container>
        {allTasks.length === 0 ? (
          <>
            <h3 className="text-center flex justify-center items-center min-h-[50vh] text-3xl font-medium">
              You do not have any task added yet !
            </h3>
          </>
        ) : (
          <>
            <h3 className="text-3xl font-medium text-center my-10">
              All Tasks
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-8 z-0">
              {allTasks.map((task) => (
                <MyTaskDetails key={task._id} task={task}></MyTaskDetails>
              ))}
            </div>
          </>
        )}
      </Container>
    </div>
  );
};

export default MyTask;
