import { useContext, useEffect, useState } from "react";
import axios from "axios";
import FormLoader from "../components/loader/FormLoader";
import { MdDelete } from "react-icons/md";
import { DataContext } from "../context/DataContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const History = () => {
  const [leaves, setLeaves] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setError] = useState(null);
  const { user, token, setLeavesNum } = useContext(DataContext);
  const url = import.meta.env.VITE_URL;
  let number = 1;
  const notifySuccess = (msg) => toast.success(msg);
  const notifyError = (msg) => toast.error(msg);
  const fetchLeaves = async () => {
    try {
      const response = await axios.get(
        `${url}/api/get-all-leaves/${user._id}`,
        {
          headers: {
            "auth-token": token,
          },
        }
      );
      setLeaves(response.data.leaves);
      setLoading(false);
      setLeavesNum(leaves.length);
    } catch (error) {
      console.error(
        "Error fetching leaves:",
        error.response ? error.response.data : error.message
      );
      notifyError(err.msg)
      setError(error.response ? error.response.data : error.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchLeaves();
  }, [user._id]);

  if (loading) {
    return (
      <div className="overflow-hidden">
        <FormLoader />
      </div>
    );
  }

  if (err) {
    return <div>Error: {typeof error === "string" ? err : err.msg}</div>;
  }
  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString();
  };

  const openModal = (modalId) => {
    return () => {
      const modal = document.getElementById(modalId);
      modal.classList.remove("hidden");
    };
  };

  const closeModal = (modalId) => {
    return () => {
      const modal = document.getElementById(modalId);
      modal.classList.add("hidden");
    };
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`${url}/api/delete-leave/${id}`, {
        headers: {
          "auth-token": token,
        },
      });
      console.log(response.data)
      closeModal("modelConfirm");
      notifySuccess("Deleted Successfully!")
      fetchLeaves();
    } catch (error) {
      notifyError(error.response.data.msg)
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
                      onClick={openModal("modelConfirm")}
                    >
                      <MdDelete />
                    </button>
                    <ToastContainer
                      position="top-center"
                      autoClose={5000}
                      hideProgressBar={false}
                      newestOnTop={false}
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover
                      theme="light"
                      transition:Bounce
                    />
                    <div
                      id="modelConfirm"
                      className="fixed hidden z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4 "
                    >
                      <div className="relative top-40 mx-auto shadow-xl rounded-md bg-white max-w-md">
                        <div className="flex justify-end p-2">
                          <button
                            onClick={closeModal("modelConfirm")}
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </button>
                        </div>

                        <div className="p-6 pt-0 text-center">
                          <svg
                            className="w-20 h-20 text-red-600 mx-auto"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                          </svg>
                          <h3 className="text-xl font-normal text-gray-500 mt-5 mb-6">
                            Are you sure you want to delete this Leave?
                          </h3>
                          <button
                            onClick={() => {
                              handleDelete(leave._id);
                            }}
                            className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center mr-2"
                          >
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            Yes, I'm sure
                          </button>
                          <button
                            onClick={closeModal("modelConfirm")}
                            className="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-cyan-200 border border-gray-200 font-medium inline-flex items-center rounded-lg text-base px-3 py-2.5 text-center"
                            data-modal-toggle="delete-user-modal"
                          >
                            No, cancel
                          </button>
                        </div>
                      </div>
                    </div>
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
