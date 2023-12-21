import Lottie from "lottie-react";
import useLoadTodo from "../../Hooks/useLoadTodo";
import Container from "../../Shared/Container";
import loading from "../../assets/loading.json";
import TodoDetails from "./TodoDetails";
import useOngoing from "../../Hooks/useOngoing";
import OngoingDetails from "./OngoinDetails";
import useComplete from "../../Hooks/useComplete";
import CompletedDetails from "./CompletedDetails";

const Todo = () => {
  const [toDo, isLoading, refetch] = useLoadTodo();
  const [ongoing] = useOngoing();
  const [completed] = useComplete();
  if (isLoading) {
    <Lottie
      className="w-40 flex justify-center items-center mx-auto min-h-screen"
      animationData={loading}
    ></Lottie>;
  }
  return (
    <>
      <Container>
        <div>
          <h3 className="mt-5 text-3xl text-center">To-Do List</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4  mt-8">
            <div>
              <h3 className="text-xl font-medium text-center mb-5 underline">
                To-Do
              </h3>
              <div>
                {toDo.map((item) => (
                  <TodoDetails
                    key={item._id}
                    item={item}
                    refetch={refetch}
                  ></TodoDetails>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-medium text-center mb-5 underline">
                Ongoing
              </h3>
              <div>
                {ongoing.map((item) => (
                  <OngoingDetails
                    key={item._id}
                    item={item}
                    refetch={refetch}
                  ></OngoingDetails>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-medium text-center mb-5 underline">
                Completed
              </h3>
              {completed.map((item) => (
                <CompletedDetails
                  key={item._id}
                  refetch={refetch}
                  item={item}
                ></CompletedDetails>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Todo;
