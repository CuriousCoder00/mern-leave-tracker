import HistoryData from "../components/HistoryData";

const History = () => {
  let history = [];
  for (let i = 0; i < 1000; i++) {
    history.push(i)
  }
  return (
    <div className="flex flex-col justify-center items-center p-2">
      <h1 className="text-xl font-bold text-sky-800">Applied Leave History</h1>
      <div className="grid w-full grid-cols-6 gap-2 justify-start p-2 bg-sky-700 text-sky-200 text-sm rounded shadow mt-5 font-bold">
        <div className="col-span-1 border-b-2 px-2 border-b-slate-300">
          S.No
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
          {history.map((num) => (
            <>
              <HistoryData key={num} num={num} />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default History;
