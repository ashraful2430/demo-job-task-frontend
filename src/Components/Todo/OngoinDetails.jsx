import PropTypes from "prop-types";

const OngoingDetails = ({ item }) => {
  const { title, description, status, deadLine, priority } = item;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl my-3">
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

OngoingDetails.propTypes = {
  item: PropTypes.object,
};

export default OngoingDetails;
