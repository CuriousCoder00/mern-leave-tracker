const HistoryData = (props) => {
    // eslint-disable-next-line react/prop-types
    const {num} = props;
  return (
    <>
      <div className="grid bg-white text-slate-600 m-2 py-1 shadow-md">
        <div className="grid-flow-row ">
          <div className="grid-cols-6 grid place-items-start">
            <div className="col-span-1 border-b-slate-300">
              {num + 1}
            </div>
            <div className="col-span-1 border-b-slate-300">
              Paid
            </div>
            <div className="col-span-1 border-b-slate-300">
              2022-10-10
            </div>
            <div className="col-span-1 border-b-slate-300">
              5 days
            </div>
            <div className="col-span-1 border-b-slate-300">
              Family Function
            </div>
            <div className="col-span-1 border-b-slate-300">
              Approved
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HistoryData;
