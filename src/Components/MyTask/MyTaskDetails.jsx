import PropTypes from "prop-types";

const MyTaskDetails = ({ task }) => {
  const { title, description, status, deadLine, priority } = task;
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl my-3 z-10">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <p>Status: {status}</p>

          <p>Priority:{priority}</p>
          <p>Dead Line: {deadLine}</p>
        </div>
      </div>
    </div>
  );
};

MyTaskDetails.propTypes = {
  task: PropTypes.object,
};

export default MyTaskDetails;
