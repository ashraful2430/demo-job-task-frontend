import Lottie from "lottie-react";
import Container from "../../Shared/Container";
import addAnimation from "../../assets/task-add.json";

const AddTask = () => {
  return (
    <>
      <Container>
        <section className=" bg-white mt-10  md:max-w-screen-xl mx-auto">
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
                <form className="mt-8 grid grid-cols-6 gap-6  w-full">
                  <div className="col-span-6 sm:col-span-3 w-full ">
                    <label
                      htmlFor="FirstName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Title
                    </label>

                    <input
                      type="text"
                      id="FirstName"
                      name="product_name"
                      className="mt-1 w-full p-3 border rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
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
                        name="brand_name"
                        className="select select-bordered w-full"
                        required
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
                      name="photo"
                      className="mt-1 w-full p-3 border  rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                  </div>
                  <div className="col-span-6">
                    <label className="block text-sm font-medium text-gray-700">
                      Description
                    </label>

                    <textarea
                      type="text"
                      name="photo"
                      className="mt-1 w-full p-3 border  rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
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
