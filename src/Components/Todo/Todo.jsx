import Lottie from "lottie-react";
import useLoadTodo from "../../Hooks/useLoadTodo";
import Container from "../../Shared/Container";
import loading from "../../assets/loading.json";
import TodoDetails from "./TodoDetails";

const Todo = () => {
  const [toDo, isLoading] = useLoadTodo();
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
              <h3>To-Do</h3>
              <div>
                {toDo.map((item) => (
                  <TodoDetails key={item._id} item={item}></TodoDetails>
                ))}
              </div>
            </div>
            <div className="text-center">Ongoing</div>
            <div className="text-center">Completed</div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Todo;
