import {
  FaMapMarkerAlt,
  FaCheckCircle,
  FaBolt,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden relative">

      {/* Background Blurs */}
      <div className="absolute top-20 left-20 h-96 w-96 rounded-full bg-blue-600/20 blur-[140px]" />
      <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-[140px]" />

      {/* Navbar */}
      <nav className="relative z-10 flex justify-between items-center px-8 md:px-16 py-6">

        <h1 className="text-3xl font-bold">
          Smart
          <span className="text-blue-500">
            CityFix
          </span>
        </h1>

        <div className="flex gap-4">
          <Link to="/login">
  <button className="px-5 py-2 rounded-xl border border-slate-700 hover:bg-slate-800 transition">
    Login
  </button>
</Link>

<Link to="/register">
  <button className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 transition">
    Register
  </button>
</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-8 md:px-16 pt-20">

        {/* Left */}
        <div className="max-w-3xl">

          <div className="inline-block px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-blue-400 mb-8">
            Smart Civic Issue Reporting Platform
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Report Civic
            <br />
            Issues
            <span className="text-blue-500">
              {" "}Instantly
            </span>
          </h1>

          <p className="text-slate-400 text-lg md:text-xl mt-8 max-w-2xl">
            Empowering citizens to report potholes,
            garbage overflow, water leakage,
            electricity failures and other civic issues
            with live location and image uploads.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <Link to="/raise-complaint">
  <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-2xl font-semibold">
    Raise Complaint
  </button>
</Link>

<Link to="/dashboard">
  <button className="border border-slate-700 hover:bg-slate-900 px-8 py-4 rounded-2xl font-semibold">
    Explore Dashboard
  </button>
</Link>

          </div>
        </div>

        {/* Right Stats Card */}
        <div className="mt-20 lg:mt-0">

          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl w-[360px]">

            <h2 className="text-2xl font-bold mb-8">
              Live Statistics
            </h2>

            <div className="space-y-8">

              <div className="flex justify-between items-center">

                <div className="flex items-center gap-4">
                  <FaCheckCircle className="text-green-400 text-2xl" />
                  <span>Complaints Solved</span>
                </div>

                <span className="text-2xl font-bold">
                  1200+
                </span>

              </div>

              <div className="flex justify-between items-center">

                <div className="flex items-center gap-4">
                  <FaMapMarkerAlt className="text-cyan-400 text-2xl" />
                  <span>Areas Covered</span>
                </div>

                <span className="text-2xl font-bold">
                  300+
                </span>

              </div>

              <div className="flex justify-between items-center">

                <div className="flex items-center gap-4">
                  <FaBolt className="text-yellow-400 text-2xl" />
                  <span>Resolution Rate</span>
                </div>

                <span className="text-2xl font-bold">
                  95%
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Features Section */}
      <section className="relative z-10 mt-32 px-8 md:px-16 pb-20">

        <h2 className="text-4xl font-bold text-center mb-16">
          Why SmartCityFix?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:-translate-y-2 transition">
            <h3 className="text-2xl font-bold text-blue-500 mb-4">
              📍 Live Location
            </h3>

            <p className="text-slate-400">
              Report issues with precise location
              and GPS coordinates.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:-translate-y-2 transition">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">
              📷 Image Upload
            </h3>

            <p className="text-slate-400">
              Upload photos of civic issues for
              quick identification.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:-translate-y-2 transition">
            <h3 className="text-2xl font-bold text-green-400 mb-4">
              📊 Smart Dashboard
            </h3>

            <p className="text-slate-400">
              Track complaints, analytics and
              resolution status in real time.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default LandingPage;