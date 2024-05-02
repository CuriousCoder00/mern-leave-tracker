import LeaveApplicationForm from "../components/LeaveApplicationForm"

const Home = () => {
  return (
    <div className="p-4  h-[87vh] overflow-auto">
    <h1 className="text-xl font-bold text-sky-700">Fill the Form to Apply for Leaves</h1>
      <LeaveApplicationForm/>
    </div>
  )
}

export default Home
