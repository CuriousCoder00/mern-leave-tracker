import { useEffect, useState } from "react";
import axios from "axios";
import FormLoader from "../components/loader/FormLoader";
import { MdDelete } from "react-icons/md";

const History = () => {
  const [leaves, setLeaves] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const user = localStorage.getItem("user");
  let number = 1;
  useEffect(() => {
    const fetchLeaves = async () => {
      const token = localStorage.getItem("token");

      try {
        const response = await axios.get(
          `https://mern-leave-tracker.onrender.com/api/get-all-leaves/${user._id}`,
          {
            headers: {
              "auth-token": token,
            },
          }
        );
        setLeaves(response.data.leaves);
        setLoading(false);
        console.log(leaves);
      } catch (error) {
        console.error(
          "Error fetching leaves:",
          error.response ? error.response.data : error.message
        );
        setError(error.response ? error.response.data : error.message);
        setLoading(false);
      }
    };
    fetchLeaves();
  }, [user._id]);
  if (loading) {
    return (
      <div className="overflow-hidden">
        <FormLoader />
      </div>
    );
  }

  if (error) {
    return <div>Error: {typeof error === "string" ? error : error.msg}</div>;
  }
  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString();
  };

  const deleteLeave = async (id) => {
    try {
      const response = await axios.delete(
        `https://mern-leave-tracker.onrender.com/api/delete-leave/${id}`,
        {
          headers: {
            "auth-token": localStorage.getItem("token"),
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center p-2">
      <h1 className="text-xl font-bold text-sky-800">Applied Leave History</h1>
      <div className="grid w-full grid-cols-6 gap-2 justify-center text-center p-2 bg-sky-700 text-sky-200 text-sm rounded shadow mt-5 font-bold">
        <div className="col-span-1 border-b-2 px-1 border-b-slate-300">
          S.No.
        </div>
        <div className="col-span-1 border-b-2 px-1 border-b-slate-300">
          Leave Type
        </div>
        <div className="col-span-1 border-b-2 px-1 border-b-slate-300">
          Start Date
        </div>
        <div className="col-span-1 border-b-2 px-1 border-b-slate-300">
          Leave Duration
        </div>
        <div className="col-span-1 border-b-2 px-1 border-b-slate-300">
          Reason
        </div>
        <div className="col-span-1 border-b-2 px-1 border-b-slate-300">
          Status
        </div>
      </div>
      <div className="px-2 bg-white w-full rounded-b-lg shadow-lg">
        <div className="overflow-y-auto w-full h-[67vh]">
          <div className="grid ">
            {leaves.map((leave) => (
              <div
                className="row bg-white text-slate-600 m-2 py-1 shadow-md"
                key={leave._id}
              >
                <div className="grid-cols-6 grid place-items-center">
                  <div className="col-span-1 border-b-slate-300 uppercase">
                    {number++}
                  </div>
                  <div className="col-span-1 border-b-slate-300 uppercase">
                    {leave.leaveType}
                  </div>
                  <div className="col-span-1 border-b-slate-300">
                    {formatDate(leave.startDate)}
                  </div>
                  <div className="col-span-1 border-b-slate-300">
                    {leave.leaveDuration}
                  </div>
                  <div className="col-span-1 border-b-slate-300 uppercase">
                    {leave.reason}
                  </div>
                  <div className="col-span-1 border-b-slate-300 uppercase">
                    {leave.status}
                    <button
                      className="bg-red-500 ml-4 text-white p-1 rounded-md"
                      onClick={() => {
                        deleteLeave(leave._id);
                      }}
                    >
                      <MdDelete />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
