import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
function Dashboard() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Navbar />

      <div className="flex">
        <Sidebar />

        <div className="p-8">
          <h1 className="text-3xl font-bold">
            Dashboard
          </h1>
          <h1>
  Welcome {user?.email}
</h1>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;