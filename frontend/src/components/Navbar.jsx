import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md px-8 py-5 flex justify-between items-center">

      <h1 className="text-2xl font-bold text-blue-600">
        SmartCityFix
      </h1>

      <div className="flex gap-4">

        <Link to="/dashboard">
          <button className="text-slate-700 hover:text-blue-600">
            Dashboard
          </button>
        </Link>

        <Link to="/raise-complaint">
          <button className="text-slate-700 hover:text-blue-600">
            Raise Complaint
          </button>
        </Link>

        <Link to="/admin">
          <button className="text-slate-700 hover:text-blue-600">
            Admin
          </button>
        </Link>

        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded-xl"
        >
          Logout
        </button>

      </div>
    </nav>
  );
}

export default Navbar;