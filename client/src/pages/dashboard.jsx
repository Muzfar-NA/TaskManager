import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <div>
      <Navbar />

      <div className="flex">
        <Sidebar />

        <div className="p-8">
          <h1 className="text-3xl font-bold">
            Dashboard
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;