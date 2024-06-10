import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context/DataContext";
import FormLoader from "../../components/loader/FormLoader";
const Admins = () => {
  const url = import.meta.env.VITE_URL;
  const { token } = useContext(DataContext);
  const [admins, setAdmins] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setError] = useState(null);
  const fetchAdmins = async () => {
    try {
      const response = await axios.get(`${url}/api/admins`, {
        headers: {
          "auth-token": token,
        },
      });
      setAdmins(response.data.admins);
      setLoading(false);
    } catch (error) {
      console.error(
        "Error fetching admins:",
        error.response ? error.response.data : error.message
      );
      setError(error.response ? error.response.data : error.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchAdmins();
  }, []);
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
  return (
    <div className="p-2 h-[87vh]">
      <div className="flex flex-col gap-4">
        {admins ? (
          admins.map((admin) => (
            <div
              key={admin._id}
              className="flex flex-col p-4 bg-sky-700 hover:bg-sky-800 rounded-md hover:cursor-pointer"
            >
              <h3 className="text-lg text-slate-200 font-bold uppercase">{admin.name}</h3>
              <p className="text-slate-300 text-sm">{admin.email}</p>
            </div>
          ))
        ) : (
          <FormLoader />
        )}
      </div>
    </div>
  );
};

export default Admins;
