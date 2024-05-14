import { useState } from "react";

const LeaveApplicationForm = () => {
  // calculate leave duration
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
    Math.abs((firstDate - secondDate) / oneDay)
  );
  const handleStartDateChange = (e) => {
    e.preventDefault();
    setStartDate(e.target.value);
    console.log(startDate);
  };
  const handleEndDateChange = (e) => {
    e.preventDefault();
    setEndDate(e.target.value);
  };

  return (
    <div className="flex mt-2 flex-col gap-5 shadow-md shadow-sky-900 w-full p-4 rounded-lg">
      <div>
        <h1 className="font-medium">Leave Application</h1>
      </div>
      <div className="flex gap-3 flex-wrap">
        <div className="flex flex-col w-full lg:w-1/4 md:w-1/4 sm:w-1/3">
          <label htmlFor="leaveType">Leave Type</label>
          <select
            name="leaveType"
            id="leaveType"
            className="outline-none p-1 text-slate-700 rounded-lg shadow-md"
          >
            <option value="">Select Your Leave Type</option>
            <option value="paid">Sick</option>
            <option value="unpaid">Casual</option>
            <option value="other">Earned</option>
          </select>
        </div>
        <div className="flex flex-col w-full lg:w-1/6 md:w-1/6 sm:w-1/4">
          <label htmlFor="startDate">Start Date</label>
          <input
            type="date"
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
            name="endDate"
            id="endDate"
            min={startDate}
            onChange={handleEndDateChange}
            className="outline-none p-1 text-slate-700 rounded-lg shadow-md"
          />
        </div>
        <div className="flex flex-col w-full md:w-1/3 sm:w-1/4">
          <label htmlFor="leaveDuration">Leave Duration</label>
          <input
            type="text"
            name="employeeName"
            id="employeeName"
            value={calculatedLeaveDuration ? calculatedLeaveDuration + 1 : ""}
            className="outline-none p-1 rounded-lg shadow-md"
            readOnly
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="reason">Reason</label>
          <textarea
            rows="3"
            name="reason"
            id="reason"
            className="resize-none outline-none p-1 text-slate-700 rounded-lg shadow-md"
          ></textarea>
        </div>
      </div>
      <div className="flex gap-4 justify-center">
        <button className="bg-green-700 hover:bg-green-600 text-sky-100 p-2 rounded-lg w-20">
          Submit
        </button>
        <button className="bg-red-700 hover:bg-red-600 text-sky-100 p-2 rounded-lg w-20">
          Reset
        </button>
      </div>
    </div>
  );
};

export default LeaveApplicationForm;
