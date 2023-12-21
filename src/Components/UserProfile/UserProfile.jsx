import Lottie from "lottie-react";
import useAuth from "../../Hooks/useAuth";
import useLoadTodo from "../../Hooks/useLoadTodo";
import Container from "../../Shared/Container";
import loading from "../../assets/login.json";
import useOngoing from "../../Hooks/useOngoing";
import useComplete from "../../Hooks/useComplete";

const UserProfile = () => {
  const { user } = useAuth();
  const defaultPhoto =
    "https://i.ibb.co/Fhm4brM/Screenshot-2023-11-25-145934.jpg";
  const [toDo, isLoading] = useLoadTodo();
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
        <div className="flex flex-col md:flex-row gap-24  my-20">
          <div className="mx-auto">
            <img
              className="w-44 h-44 rounded-full object-cover"
              src={user.photoURL ? user.photoURL : defaultPhoto}
              alt="user photo"
            />
            <p className=" mt-5">
              Welcome Back
              <br /> <span className="text-[#66b888] ">
                {user.displayName}
              </span>{" "}
            </p>
          </div>
          <div className="flex-1">
            <h3 className="text-center text-3xl">Your Tasks</h3>
            <div className="flex flex-col md:flex-row justify-evenly items-center mt-7">
              <p>Todo Task : {toDo.length}</p>
              <p>Ongoing Task : {ongoing.length}</p>
              <p>Completed Task : {completed.length} </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default UserProfile;
