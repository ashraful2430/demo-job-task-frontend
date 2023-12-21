import PropTypes from "prop-types";

const OngoingDetails = ({ item }) => {
  const { title, description, status, deadLine, priority, _id } = item;
  const handleDelete = (id) => {
    console.log(id);
  };
  return (
    <div>
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
  );
};

OngoingDetails.propTypes = {
  item: PropTypes.object,
};

export default OngoingDetails;
