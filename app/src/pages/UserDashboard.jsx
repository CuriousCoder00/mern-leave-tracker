import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Data } from "../utils/Data";
// import { getRelativePosition } from "chart.js/helpers";
import { Line } from "react-chartjs-2";

Chart.register(CategoryScale);

const UserDashboard = () => {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.month),
    datasets: [
      {
        label: "Leaves Applied ",
        data: Data.map((data) => data.leavesApplied),
        borderColor: "blue",
        borderWidth: 2,
      },
      {
        label: "Leaves Approved ",
        data: Data.map((data) => data.leavesApproved),
        borderColor: "green",
        borderWidth: 2,
      },
    ],
  });

  const { user } = useContext(DataContext);

  return (
    <div className="flex flex-col  p-3 w-full h-[86vh] overflow-hidden">
      <h1 className="text-slate-700 font-semibold text-xl text-start">
        Welcome, {user.name}
      </h1>
      <h1 className="text-slate-600 text-lg font-semibold">Your leaves</h1>
      <div className="h-[1px] bg-slate-300 shadow-xl"></div>
      <div className="flex justify-center items-center w-full">
        <div className="p-3 md:h-[70vh] h-full w-full md:w-[50vw] overflow-hidden">
          <h2 style={{ textAlign: "center" }}>Bar Chart</h2>
          <Line
            data={chartData}
            options={{
              plugins: {
                title: {
                  display: true,
                  text: "Leaves Applied by User Every Month",
                },
                legend: {
                  display: true,
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
