import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { DataContext } from "../../context/DataContext";
import FormLoader from "../../components/loader/FormLoader";
import { useNavigate } from "react-router-dom";
const AdminDashboard = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  const url = import.meta.env.VITE_URL;
  const { token } = useContext(DataContext);
  const getUsers = async () => {
    try {
      const response = await axios.get(`${url}/api/users`, {
        headers: {
          "auth-token": token,
        },
      });
      setUserData(response.data.users);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="p-2 h-[82vh] overflow-auto">
      <div className="flex flex-col gap-4">
        {userData ? (
          userData.map((user) => (
            <div
              key={user._id} onClick={()=>navigate(`/users/user/${user._id}`)}
              className="flex flex-col p-4 bg-sky-700 hover:bg-sky-800 rounded-md hover:cursor-pointer"
            >
              <h3 className="text-lg text-slate-200 font-bold uppercase">
                {user.name}
              </h3>
              <p className="text-slate-300 text-sm">{user.email}</p>
            </div>
          ))
        ) : (
          <FormLoader />
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
