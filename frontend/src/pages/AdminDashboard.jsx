import { useEffect, useState } from "react";
import axios from "axios";
import {
  FaClipboardList,
  FaClock,
  FaSpinner,
  FaCheckCircle,
  FaMapMarkerAlt,
} from "react-icons/fa";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

function AdminDashboard() {
  const [stats, setStats] =
    useState({});

  const [recent, setRecent] =
    useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const token =
        localStorage.getItem("token");

      const statRes =
        await axios.get(
          "http://localhost:8080/admin/dashboard/stats",
          {
            headers: {
              Authorization:
                `Bearer ${token}`,
            },
          }
        );

      const recentRes =
        await axios.get(
          "http://localhost:8080/admin/recent",
          {
            headers: {
              Authorization:
                `Bearer ${token}`,
            },
          }
        );

      setStats(statRes.data);
      setRecent(recentRes.data);

    } catch (err) {
      console.log(err);
    }
  };

  const chartData = [
    {
      name: "Pending",
      value:
        stats.pendingComplaints || 0,
    },
    {
      name: "Resolved",
      value:
        stats.resolvedComplaints || 0,
    },
  ];

  const COLORS = [
    "#F59E0B",
    "#10B981",
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-10">

      <h1 className="text-5xl font-bold text-slate-800">
        Admin Dashboard
      </h1>

      <p className="text-slate-500 mt-3">
        Monitor and manage civic issues.
      </p>

      {/* Cards */}
      <div className="grid md:grid-cols-4 gap-8 mt-12">

        <div className="bg-white rounded-[30px] shadow-lg p-8">
          <FaClipboardList className="text-4xl text-blue-500" />
          <p className="text-slate-500 mt-4">
            Total
          </p>
          <h2 className="text-5xl font-bold mt-3">
            {stats.totalComplaints}
          </h2>
        </div>

        <div className="bg-white rounded-[30px] shadow-lg p-8">
          <FaClock className="text-4xl text-yellow-500" />
          <p className="text-slate-500 mt-4">
            Pending
          </p>
          <h2 className="text-5xl font-bold mt-3">
            {stats.pendingComplaints}
          </h2>
        </div>

        <div className="bg-white rounded-[30px] shadow-lg p-8">
          <FaSpinner className="text-4xl text-cyan-500" />
          <p className="text-slate-500 mt-4">
            Progress
          </p>
          <h2 className="text-5xl font-bold mt-3">
            {stats.inProgressComplaints}
          </h2>
        </div>

        <div className="bg-white rounded-[30px] shadow-lg p-8">
          <FaCheckCircle className="text-4xl text-green-500" />
          <p className="text-slate-500 mt-4">
            Resolved
          </p>
          <h2 className="text-5xl font-bold mt-3">
            {stats.resolvedComplaints}
          </h2>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="grid lg:grid-cols-2 gap-10 mt-14">

        {/* Recent Complaints */}
        <div className="bg-white rounded-[30px] shadow-lg p-8">

          <h2 className="text-3xl font-bold text-slate-800 mb-8">
            Recent Complaints
          </h2>

          <div className="space-y-6">

            {recent.map((c) => (

              <div
                key={c.id}
                className="border border-slate-200 rounded-2xl p-5"
              >
                <h3 className="text-xl font-bold text-slate-800">
                  {c.title}
                </h3>

                <p className="text-slate-500 mt-2">
                  {c.description}
                </p>

                <div className="flex items-center gap-3 mt-4 text-slate-500">
                  <FaMapMarkerAlt />
                  <span>
                    {c.address}
                  </span>
                </div>

                <span className="inline-block mt-4 px-4 py-2 rounded-full bg-yellow-100 text-yellow-700">
                  {c.status}
                </span>

              </div>

            ))}

          </div>

        </div>

        {/* Chart */}
        <div className="bg-white rounded-[30px] shadow-lg p-8">

          <h2 className="text-3xl font-bold text-slate-800 mb-8">
            Complaint Analytics
          </h2>

          <div className="h-[350px]">

            <ResponsiveContainer>

              <PieChart>

                <Pie
                  data={chartData}
                  dataKey="value"
                  outerRadius={120}
                  label
                >

                  {chartData.map(
                    (entry, index) => (
                      <Cell
                        key={index}
                        fill={
                          COLORS[index]
                        }
                      />
                    )
                  )}

                </Pie>

                <Tooltip />

              </PieChart>

            </ResponsiveContainer>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;