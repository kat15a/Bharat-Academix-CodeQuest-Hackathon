import {
  FaHome,
  FaClipboardList,
  FaChartBar,
  FaExclamationTriangle,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  const menu = [
    {
      name: "Overview",
      icon: <FaHome size={18} />,
      path: "/dashboard",
    },
    {
      name: "Issues Log",
      icon: <FaClipboardList size={18} />,
      path: "/issues",
    },
    {
      name: "Dashboard",
      icon: <FaChartBar size={18} />,
      path: "/admin",
    },
    {
      name: "Report Issue",
      icon: <FaExclamationTriangle size={18} />,
      path: "/raise-complaint",
    },
  ];

  return (
    <aside className="w-[300px] min-w-[300px] h-screen bg-white border-r border-gray-200 flex flex-col">

      {/* Logo */}
      <div className="h-[90px] flex items-center px-8 border-b border-gray-200">

        <div className="h-10 w-10 bg-orange-500 rounded-md flex items-center justify-center text-white font-bold text-xl">
          ⚡
        </div>

        <h1 className="ml-4 text-3xl font-bold text-gray-900">
          SmartCity
          <span className="text-orange-500">Fix</span>
        </h1>

      </div>

      {/* Navigation */}
      <div className="flex-1 px-5 py-8">

        <p className="text-gray-400 text-sm font-semibold tracking-widest mb-6">
          NAVIGATION
        </p>

        <div className="space-y-3">

          {menu.map((item) => (
            <Link key={item.name} to={item.path}>
              <div
                className={`flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-200
                  ${
                    location.pathname === item.path
                      ? "bg-[#1E2235] text-white shadow-md"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
              >
                {item.icon}

                <span className="text-lg font-medium">
                  {item.name}
                </span>
              </div>
            </Link>
          ))}

        </div>
      </div>

      {/* Bottom Button */}
      <div className="p-5 border-t border-gray-200">

        <Link to="/raise-complaint">

          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-xl py-4 font-semibold text-lg flex items-center justify-center gap-3 transition-all duration-200">

            <FaExclamationTriangle />

            REPORT ISSUE

          </button>

        </Link>

      </div>
    </aside>
  );
}

export default Sidebar;