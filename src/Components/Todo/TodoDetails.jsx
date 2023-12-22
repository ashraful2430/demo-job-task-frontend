import PropTypes from "prop-types";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Draggable } from "react-beautiful-dnd";

const TodoDetails = ({ item, refetch, index }) => {
  const { title, description, status, deadLine, priority, _id } = item;
  const axiosPublic = useAxiosPublic();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/tasks/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your post has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };
  return (
    <>
      <Draggable draggableId={_id} index={index}>
        {(provided) => (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <div className="card w-96 bg-base-100 shadow-xl my-3">
              <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <p>Status: {status}</p>

                <p>Priority:{priority}</p>
                <p>Dead Line: {deadLine}</p>
                <div>
                  <button
                    onClick={() => handleDelete(_id)}
                    className="btn btn-block bg-green-500 text-white"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </Draggable>
    </>
  );
};

TodoDetails.propTypes = {
  item: PropTypes.object,
  refetch: PropTypes.func,
  index: PropTypes.number,
};

export default TodoDetails;
