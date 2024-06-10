import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../context/DataContext";
import FormLoader from "../../components/loader/FormLoader";
import { useNavigate } from "react-router-dom";
const UserData = () => {
  const [userData, setUserData] = useState(null);
  const [leaves, setLeaves] = useState([]);
  const [loading, setLoading] = useState(false);
  const [leaveStatus, setLeaveStatus] = useState("");
  const [err, setError] = useState(null);
  const navigate = useNavigate();
  const url = import.meta.env.VITE_URL;
  const params = useParams();
  const { token } = useContext(DataContext);
  const getUserDetails = async () => {
    try {
      const response = await axios.get(`${url}/api/user/${params.id}`, {
        headers: {
          "auth-token": token,
        },
      });
      setUserData(response.data.user);
      console.log(response.data.user);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchLeaves = async () => {
    try {
      const response = await axios.get(`${url}/api/get-leaves/${params.id}`);
      setLeaves(response.data.leaves);
      setLoading(false);
    } catch (error) {
      console.error(
        "Error fetching leaves:",
        error.response ? error.response.data : error.message
      );
      setError(error.response ? error.response.data : error.message);
      setLoading(false);
    }
  };
  // make admin
  const makeAdmin = async () => {
    try {
      const response = await axios.put(
        `${url}/api/make-admin/${params.id}`,
        {},
        {
          headers: {
            "auth-token": token,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  // delete user
  const deleteUser = async () => {
    try {
      const response = await axios.delete(
        `${url}/api/delete-user/${params.id}`,
        {
          headers: {
            "auth-token": token,
          },
        }
      );
      console.log(response.data);
      navigate("/users");
    } catch (error) {
      console.error(error);
    }
  };
  // update leave status
  const updateLeaveStatus = async (id, status) => {
    try {
      const response = await axios.put(
        `${url}/api/update-leave-status/${id}`,
        { status },
        {
          headers: {
            "auth-token": token,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const onStatusChange = (id) => (e) => {
    setLeaveStatus(e.target.value);
    updateLeaveStatus(id, e.target.value);
    fetchLeaves();
  };
  useEffect(() => {
    getUserDetails();
    fetchLeaves();
    console.log(userData);
  }, [params.id]);
  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString();
  };
  const breakText = (text) => {
    return text.length > 20 ? text.substring(0, 20) + "..." : text;
  };
  return (
    <div className="p-4 h-[82vh] overflow-auto">
      <div className="flex flex-col gap-4">
        {loading ? (
          <div className="overflow-hidden">
            <FormLoader />
          </div>
        ) : (
          <div className="flex flex-col">
            <div className="flex items-center justify-between my-2">
              <h3 className="text-lg text-slate-700 font-bold uppercase">
                {userData?.name}
              </h3>
              <span
                className="border-2 bg-emerald-700 rounded-xl p-2 cursor-pointer hover:bg-emerald-500 text-white hover:text-slate-800"
                onClick={makeAdmin}
              >
                Make Admin
              </span>
              <span
                className="border-2 bg-red-700 rounded-xl p-2 cursor-pointer hover:bg-red-600 text-white hover:text-slate-900"
                onClick={deleteUser}
              >
                Delete User
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <div className="grid">
                {leaves.map((leave) => (
                  <div key={leave._id} className="row my-2 shadow-md">
                    <div className="grid-cols-4 grid place-items-center p-4 bg-sky-700 rounded-md">
                      <h3 className=" col-span-1 place-self-center text-lg text-slate-200 font-bold uppercase">
                        {leave.leaveType} Leave
                      </h3>
                      <h3 className="col-span-1 place-self-center text-lg text-slate-200 font-bold uppercase">
                        {breakText(leave.reason)}
                      </h3>
                      <p className=" col-span-1 place-self-center text-slate-300 text-sm">
                        {formatDate(leave.startDate)} -{" "}
                        {formatDate(leave.endDate)}
                      </p>
                      <select
                        name="leaveType"
                        id="leaveType"
                        required
                        onChange={onStatusChange(leave._id)}
                        value={leave.status}
                        className="col-span-1 place-self-center outline-none p-1 text-slate-200 rounded-lg bg-sky-700 shadow-md"
                      >
                        <option value="pending">Pending</option>
                        <option value="approved">Approved</option>
                        <option value="rejected">Rejected</option>
                      </select>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserData;
