import Sidebar from "../components/Sidebar";
import {
  FaExclamationTriangle,
  FaClock,
  FaCheckCircle,
  FaChartLine,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Dashboard() {
  return (
    <div className="flex min-h-screen bg-[#F5F5F5]">

      <Sidebar />

      <main className="flex-1 p-10 overflow-auto">

        {/* Hero Section */}
        <div className="bg-[#FF6B00] rounded-[32px] p-12 text-white shadow-lg">

          <h1 className="text-5xl font-bold">
            City Command Center
          </h1>

          <p className="mt-5 text-xl max-w-4xl leading-9 text-orange-100">
            Real-time urban infrastructure monitoring
            driven by citizens. Report issues, track
            progress, and improve our city together.
          </p>

          <div className="flex gap-5 mt-10">

            <button
              className="
                bg-[#1E2235]
                hover:bg-[#111827]
                px-8
                py-4
                rounded-xl
                font-semibold
                shadow-md
                transition
              "
            >
              REPORT NEW ISSUE
            </button>

            <button
              className="
                border
                border-orange-300
                bg-orange-500/10
                hover:bg-orange-400/20
                px-8
                py-4
                rounded-xl
                font-semibold
                transition
              "
            >
              VIEW LOGS
            </button>

          </div>

        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-10">

          <div className="bg-white rounded-[28px] p-7 shadow-sm border-t-4 border-orange-500">

            <FaExclamationTriangle className="text-gray-400 text-xl" />

            <p className="text-gray-500 text-sm mt-5 tracking-wider">
              TOTAL REPORTS
            </p>

            <h2 className="text-5xl font-bold mt-4">
              14
            </h2>

          </div>

          <div className="bg-white rounded-[28px] p-7 shadow-sm border-t-4 border-blue-500">

            <FaClock className="text-gray-400 text-xl" />

            <p className="text-gray-500 text-sm mt-5 tracking-wider">
              OPEN ISSUES
            </p>

            <h2 className="text-5xl font-bold mt-4">
              11
            </h2>

          </div>

          <div className="bg-white rounded-[28px] p-7 shadow-sm border-t-4 border-green-500">

            <FaCheckCircle className="text-gray-400 text-xl" />

            <p className="text-gray-500 text-sm mt-5 tracking-wider">
              RESOLVED
            </p>

            <h2 className="text-5xl font-bold mt-4">
              1
            </h2>

          </div>

          <div className="bg-white rounded-[28px] p-7 shadow-sm border-t-4 border-yellow-500">

            <FaChartLine className="text-gray-400 text-xl" />

            <p className="text-gray-500 text-sm mt-5 tracking-wider">
              RESOLUTION RATE
            </p>

            <h2 className="text-5xl font-bold mt-4">
              7%
            </h2>

          </div>

        </div>

        {/* Live Feed */}
        <div className="mt-14">

          <div className="flex justify-between items-center">

            <h2 className="text-3xl font-bold text-gray-800">
              Live Feed
            </h2>

            <button className="text-gray-500 font-semibold hover:text-black">
              VIEW ALL →
            </button>

          </div>

          {/* Feed Card */}
          <div className="bg-white rounded-[28px] p-8 mt-6 shadow-sm">

            <div className="flex justify-between items-start">

              <div>

                <div className="flex gap-3 mb-5">

                  <span className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full font-semibold">
                    OPEN
                  </span>

                  <span className="bg-orange-100 text-orange-600 text-xs px-3 py-1 rounded-full font-semibold">
                    MEDIUM
                  </span>

                </div>

                <h3 className="text-3xl font-bold text-gray-800">
                  Big pothole near school
                </h3>

                <div className="flex items-center gap-3 mt-5 text-gray-500">

                  <FaMapMarkerAlt />

                  <span>
                    NH319D, Machhlishahr,
                    Jaunpur, Uttar Pradesh, India
                  </span>

                </div>

              </div>

              <span className="bg-gray-100 px-4 py-2 rounded-xl text-sm font-semibold text-gray-500">
                POTHOLE
              </span>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Dashboard;