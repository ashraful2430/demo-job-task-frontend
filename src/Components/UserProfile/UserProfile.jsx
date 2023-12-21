import useAuth from "../../Hooks/useAuth";
import Container from "../../Shared/Container";

const UserProfile = () => {
  const { user } = useAuth();
  const defaultPhoto =
    "https://i.ibb.co/Fhm4brM/Screenshot-2023-11-25-145934.jpg";
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
              <p>Todo Task : 0</p>
              <p>Ongoing Task : 0</p>
              <p>Completed Task : 0</p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default UserProfile;
