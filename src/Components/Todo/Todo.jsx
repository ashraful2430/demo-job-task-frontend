import Lottie from "lottie-react";
import useLoadTodo from "../../Hooks/useLoadTodo";
import Container from "../../Shared/Container";
import loading from "../../assets/loading.json";
import TodoDetails from "./TodoDetails";
import useOngoing from "../../Hooks/useOngoing";
import OngoingDetails from "./OngoinDetails";
import useComplete from "../../Hooks/useComplete";
import CompletedDetails from "./CompletedDetails";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const Todo = () => {
  const [toDo, isLoading, refetch] = useLoadTodo();
  const [ongoing] = useOngoing();
  const [completed] = useComplete();
  if (isLoading) {
    return (
      <Lottie
        className="w-40 flex justify-center items-center mx-auto min-h-screen"
        animationData={loading}
      />
    );
  }
  return (
    <>
      <Container>
        <DragDropContext>
          <Droppable droppableId="tasks">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                <h3 className="mt-5 text-3xl text-center">To-Do List</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                  <div>
                    <h3 className="text-xl font-medium text-center mb-5 underline">
                      To-Do
                    </h3>
                    <div>
                      {toDo.map((item, index) => (
                        <TodoDetails
                          item={item}
                          key={item._id}
                          refetch={refetch}
                          index={index}
                        ></TodoDetails>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-center mb-5 underline">
                      Ongoing
                    </h3>
                    <div>
                      {ongoing.map((item, index) => (
                        <OngoingDetails
                          key={item._id}
                          item={item}
                          refetch={refetch}
                          index={index}
                        ></OngoingDetails>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-center mb-5 underline">
                      Completed
                    </h3>
                    {completed.map((item, index) => (
                      <CompletedDetails
                        key={item._id}
                        item={item}
                        refetch={refetch}
                        index={index}
                      ></CompletedDetails>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </Container>
    </>
  );
};

export default Todo;
