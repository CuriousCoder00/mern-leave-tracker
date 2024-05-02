const LeaveApplicationForm = () => {
  return (
    <div className="flex mt-2 flex-col gap-5 shadow-md shadow-sky-900 w-full p-4 rounded-lg">
      <div>
        <h1 className="font-medium">Leave Application</h1>
      </div>
      <div className="flex gap-3 flex-wrap">
        <div className="flex flex-col w-full lg:w-1/3 md:w-1/4 sm:w-1/2">
          <label htmlFor="employeeName">Name</label>
          <input
            type="text"
            name="employeeName"
            id="employeeName"
            placeholder="Enter Your Name"
            className="outline-none p-1 text-slate-700 rounded-lg shadow-md"
          />
        </div>
        <div className="flex flex-col w-full lg:w-1/4 md:w-1/4 sm:w-1/3">
          <label htmlFor="leaveType">Leave Type</label>
          <select
            name="leaveType"
            id="leaveType"
            className="outline-none p-1 text-slate-700 rounded-lg shadow-md"
          >
            <option value="">Select Your Leave Type</option>
            <option value="paid">Paid</option>
            <option value="unpaid">Unpaid</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="flex flex-col w-full lg:w-1/6 md:w-1/6 sm:w-1/4">
          <label htmlFor="startDate">Start Date</label>
          <input
            type="date"
            name="startDate"
            id="startDate"
            className="outline-none p-1 text-slate-700 rounded-lg shadow-md"
          />
        </div>
        <div className="flex flex-col w-full lg:w-1/6 md:w-1/6 sm:w-1/4">
          <label htmlFor="endDate">End Date</label>
          <input
            type="date"
            name="endDate"
            id="endDate"
            className="outline-none p-1 text-slate-700 rounded-lg shadow-md"
          />
        </div>
        <div className="flex flex-col w-full md:w-1/3 sm:w-1/4">
          <label htmlFor="leaveDuration">Leave Duration</label>
          <input
            type="text"
            name="employeeName"
            id="employeeName"
            placeholder="Leave Duration"
            className="outline-none p-1 "
            disabled
          />
        </div>
        <div className="flex flex-col w-full lg:w-[60.56%] md:w-1/2 sm:w-[90%]">
          <label htmlFor="reason">Reason</label>
          <input
            name="reason"
            id="reason"
            className="outline-none p-1 text-slate-700 rounded-lg shadow-md"
          ></input>
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
