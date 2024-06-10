import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context/DataContext";
import { Pie } from "react-chartjs-2";
import axios from "axios";
const AdminDashboard = () => {
  const { user, token } = useContext(DataContext);
  const [leaves, setLeaves] = useState(null);
  const url = import.meta.env.VITE_URL;
  const [chartData, setChartData] = useState({});
  
  const fetchData = async () => {
    try {
      const response = await axios.get(`${url}/api/leaves`,
        {
          headers: {
            "auth-token": token,
          },
        }
      );
      setLeaves(response.data.leaves);
      console.log(leaves)
      setChartData({
        labels: leaves?.map((leave) => leave.status),
        datasets: [
          {
            label: "Total Leaves",
            data: leaves?.map((leave) => leave.status),
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          },
        ],
      });
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex flex-col p-3 w-full h-full">
      <h1 className="text-slate-700 font-semibold text-2xl text-center">
        Admin Dashboard
      </h1>
      <h1 className="text-slate-700 font-semibold text-xl">
        Welcome, {user.name}
      </h1>
      <div className="flex justify-center items-center w-full">
        <div className="p-3 md:h-[70vh] h-full w-full md:w-[50vw] overflow-hidden">
          { leaves?
            <Pie
            data={chartData}
            options={{
              plugins: {
                title: {
                  display: true,
                  text: "Total Leaves",
                }
              },
            }}
          /> : null
          }
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
