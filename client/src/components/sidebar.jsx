import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-5">
      <h2 className="text-2xl font-bold mb-8">
        Planner
      </h2>

     <ul className="space-y-4">
  <li>
    <Link to="/dashboard">Dashboard</Link>
  </li>

  <li>
    <Link to="/tasks">Tasks</Link>
  </li>
</ul>
    </div>
  );
}

export default Sidebar;