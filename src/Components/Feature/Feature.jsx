import { FaComputer } from "react-icons/fa6";
import { MdCorporateFare, MdEmojiPeople, MdAddHomeWork } from "react-icons/md";
import { RiBankFill } from "react-icons/ri";
import { GiBrain } from "react-icons/gi";

const Feature = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Who Benefits from{" "}
              <span className="text-[#66b888]">Task Ninja</span>
            </h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Discover how <span className="text-[#66b888]">Task Ninja</span>{" "}
              caters to diverse needs, bringing efficiency to various
              professional domains.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {/* developer card */}
            <div className="xl:w-1/3 md:w-1/2 p-4 hover:shadow-xl">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                  <FaComputer className="text-2xl" />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Developers Delight
                </h2>
                <p className="leading-relaxed text-base">
                  Streamline coding projects, track milestones, and enhance
                  collaboration among development teams.
                </p>
              </div>
            </div>
            {/* corporate card */}
            <div className="xl:w-1/3 md:w-1/2 p-4 hover:shadow-xl">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                  <MdCorporateFare className="text-2xl" />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Corporate Professionals Corner
                </h2>
                <p className="leading-relaxed text-base">
                  Elevate project management for corporate initiatives, ensuring
                  seamless coordination and timely execution.
                </p>
              </div>
            </div>
            {/* Bankers'  card */}
            <div className="xl:w-1/3 md:w-1/2 p-4 hover:shadow-xl">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                  <RiBankFill className="text-2xl" />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Bankers Boost
                </h2>
                <p className="leading-relaxed text-base">
                  Manage financial tasks with precision, track critical
                  deadlines, and foster teamwork within the banking sector.
                </p>
              </div>
            </div>
            {/* Entrepreneurs card */}
            <div className="xl:w-1/3 md:w-1/2 p-4 hover:shadow-xl">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                  <MdEmojiPeople className="text-2xl" />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Entrepreneurs Ally
                </h2>
                <p className="leading-relaxed text-base">
                  Empower startup founders and small business owners to organize
                  tasks, set goals, and achieve business milestones.
                </p>
              </div>
            </div>
            {/* creative card */}
            <div className="xl:w-1/3 md:w-1/2 p-4 hover:shadow-xl">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                  <GiBrain className="text-2xl" />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Creative Minds Hub
                </h2>
                <p className="leading-relaxed text-base">
                  Inspire creative professionals by providing an organized space
                  for brainstorming, idea management, and project execution.
                </p>
              </div>
            </div>
            {/* remote work card */}
            <div className="xl:w-1/3 md:w-1/2 p-4 hover:shadow-xl">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                  <MdAddHomeWork className="text-2xl" />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Remote Work Champions
                </h2>
                <p className="leading-relaxed text-base">
                  Facilitate remote teams with tools for efficient task
                  delegation, progress tracking, and collaborative success. Help
                  you in every section.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center my-6 max-w-xl mx-auto">
            <p>
              No matter your industry or work style,{" "}
              <span className="text-[#66b888]">Task Ninja</span> adapts to your
              workflow, fostering collaboration and efficiency across diverse
              professional landscapes.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature;
