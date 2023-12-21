import Lottie from "lottie-react";
import Container from "../../Shared/Container";
import addAnimation from "../../assets/task-add.json";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const AddTask = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const status = "to-do";
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const info = {
      email: user.email,
      title: data.title,
      description: data.description,
      deadLine: data.deadLine,
      priority: data.priority,
      status,
    };
    const res = await axiosPublic.post("/tasks", info);
    console.log(res);
    if (res.data.insertedId) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your task has been added successfully",
        showConfirmButton: false,
        timer: 2000,
      });
      reset();
    }
  };
  return (
    <>
      <Container>
        <section className=" bg-white mt-10  md:max-w-screen-xl mx-auto -z-10">
          <div className="mb-10">
            <h1 className="text-center text-4xl font-medium">Add your Tasks</h1>
          </div>
          <div className="lg:grid lg:grid-cols-12">
            <section className="relative flex h-32 items-end  lg:col-span-5 lg:h-full xl:col-span-6 mt-36 md:mt-56 lg:mt-0">
              <Lottie
                className="w-64 md:w-96 lg:w-full mx-auto"
                animationData={addAnimation}
              ></Lottie>
            </section>

            <main className=" px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
              <div className="max-w-xl lg:max-w-3xl">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="mt-8 grid grid-cols-6 gap-6  w-full"
                >
                  <div className="col-span-6 sm:col-span-3 w-full ">
                    <label
                      htmlFor=""
                      className="block text-sm font-medium text-gray-700"
                    >
                      Title
                    </label>

                    <input
                      type="text"
                      id=""
                      name=""
                      {...register("title", { required: true })}
                      className="mt-1 w-full p-3 border rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                    {errors.title && (
                      <span className="text-red-500">Title is required</span>
                    )}
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="LastName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Priority
                    </label>
                    <label className="input-group">
                      <select
                        className="select select-bordered w-full"
                        required
                        value={watch("priority") || ""}
                        name="priority"
                        {...register("priority", { required: true })}
                      >
                        <option value="" disabled selected>
                          Select Priority
                        </option>
                        <option value="Low">Low</option>
                        <option value="Moderate">Moderate</option>
                        <option value="High">High</option>
                      </select>
                    </label>
                  </div>

                  <div className="col-span-6">
                    <label className="block text-sm font-medium text-gray-700">
                      Dead Line
                    </label>

                    <input
                      type="date"
                      name=""
                      className="mt-1 w-full p-3 border  rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                      {...register("deadLine", { required: true })}
                    />
                    {errors.deadLine && (
                      <span className="text-red-500">
                        Please Pick Your Dead Line
                      </span>
                    )}
                  </div>
                  <div className="col-span-6">
                    <label className="block text-sm font-medium text-gray-700">
                      Description
                    </label>

                    <textarea
                      type="text"
                      name=""
                      className="mt-1 w-full p-3 border  rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                      {...register("description", { required: true })}
                    />
                    {errors.description && (
                      <span className="text-red-500">
                        Description is needed
                      </span>
                    )}
                  </div>

                  <div className="col-span-6 sm:flex sm:items-center sm:gap-4  border">
                    <button
                      type="submit"
                      className="inline-block shrink-0 rounded-md border w-full border-green-400 bg-green-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-black focus:outline-none focus:ring active:text-green-500"
                    >
                      Add Task
                    </button>
                  </div>
                </form>
              </div>
            </main>
          </div>
        </section>
      </Container>
    </>
  );
};

export default AddTask;
