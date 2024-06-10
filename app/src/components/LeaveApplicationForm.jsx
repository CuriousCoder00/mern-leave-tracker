import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const LeaveApplicationForm = () => {
  // calculate leave duration
  const notifySuccess = () => toast.success("Leave Submitted Successfully !");
  const notifyError = (err) => toast.error(err);
  const [leaveType, setLeaveType] = useState("");
  const [reason, setReason] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  // get current date
  var currentDate = new Date();
  var dd = String(currentDate.getDate()).padStart(2, "0");
  var mm = String(currentDate.getMonth() + 1).padStart(2, "0");
  var yyyy = currentDate.getFullYear();
  currentDate = yyyy + "-" + mm + "-" + dd;
  const oneDay = 24 * 60 * 60 * 1000;
  const firstDate = new Date(startDate);
  const secondDate = new Date(endDate);
  const calculatedLeaveDuration = Math.round(
    Math.abs(Math.ceil((firstDate - secondDate) / oneDay))
  );

  const handleLeaveTypeChange = (e) => {
    e.preventDefault();
    setLeaveType(e.target.value);
  };
  const handleStartDateChange = (e) => {
    e.preventDefault();
    setStartDate(e.target.value);
  };
  const handleEndDateChange = (e) => {
    e.preventDefault();
    setEndDate(e.target.value);
  };
  const handleReasonChange = (e) => {
    e.preventDefault();
    setReason(e.target.value);
  };

  const url = import.meta.env.VITE_URL;

  const handleLeaveSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `${url}/api/apply-leave`,
        {
          leaveType: leaveType,
          startDate: startDate,
          endDate: endDate,
          leaveDuration: calculatedLeaveDuration,
          reason: reason,
        },
        {
          headers: {
            "auth-token": token,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      notifySuccess()
      setLeaveType("");
      setStartDate("");
      setEndDate("");
      setReason("");
    } catch (error) {
      notifyError("invalid data or empty fields")
    }
  };

  const onReset = (e) => {
    e.preventDefault();
    setLeaveType("");
    setStartDate("");
    setEndDate("");
    setReason("");
    toast.info("Form reset successful !");
  };
  return (
    <div className="flex mt-2 flex-col gap-5 shadow-md shadow-sky-900 w-full p-4 rounded-lg">
      <div>
        <h1 className="font-bold">Fill the Form to Apply for Leave</h1>
      </div>
      <div className="flex gap-3 flex-wrap">
        <div className="flex flex-col w-full lg:w-1/4 md:w-1/4 sm:w-[45%]">
          <label htmlFor="leaveType">Leave Type</label>
          <select
            name="leaveType"
            id="leaveType"
            required
            value={leaveType}
            onChange={handleLeaveTypeChange}
            className="outline-none p-1 text-slate-700 rounded-lg shadow-md"
          >
            <option value="">Select Your Leave Type</option>
            <option value="sick">Sick</option>
            <option value="casual">Casual</option>
            <option value="earned">Earned</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="flex flex-col w-full lg:w-1/6 md:w-1/6 sm:w-1/4">
          <label htmlFor="startDate">Start Date</label>
          <input
            type="date"
            required
            value={startDate}
            name="startDate"
            id="startDate"
            min={currentDate}
            onChange={handleStartDateChange}
            className="outline-none p-1 text-slate-700 rounded-lg shadow-md"
          />
        </div>
        <div className="flex flex-col w-full lg:w-1/6 md:w-1/6 sm:w-1/4">
          <label htmlFor="endDate">End Date</label>
          <input
            type="date"
            required
            value={endDate}
            name="endDate"
            id="endDate"
            min={startDate}
            onChange={handleEndDateChange}
            className="outline-none p-1 text-slate-700 rounded-lg shadow-md"
          />
        </div>
        <div className="flex flex-col w-full xl:w-[38%] lg:w-[37.5%] md:w-[35.5%] sm:w-full">
          <label htmlFor="leaveDuration">Leave Duration</label>
          <input
            type="text"
            required
            name="duration"
            id="duration"
            value={
              calculatedLeaveDuration ? calculatedLeaveDuration + " Days" : ""
            }
            className="outline-none p-1 rounded-lg shadow-md"
            readOnly
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="reason">Reason</label>
          <textarea
            rows="3"
            value={reason}
            onChange={handleReasonChange}
            name="reason"
            id="reason"
            className="resize-none outline-none p-1 text-slate-700 rounded-lg shadow-md"
          ></textarea>
        </div>
      </div>
      <div className="flex gap-4 justify-center">
        <button
          className="bg-green-700 hover:bg-green-600 text-sky-100 outline-none p-2 rounded-lg w-20"
          onClick={handleLeaveSubmit}
        >
          Submit
        </button>
        <button
          className="bg-red-700 hover:bg-red-600 outline-none text-sky-100 p-2 rounded-lg w-20"
          onClick={onReset}
        >
          Reset
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
      </div>
    </div>
  );
};

export default LeaveApplicationForm;
