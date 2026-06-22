import { useState } from "react";
import axios from "axios";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "USER",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:8080/auth/register",
        form
      );

      alert("Registration Successful!");
      navigate("/login");
    } catch (err) {
      console.log(err);
      alert("Registration Failed");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center relative overflow-hidden">

      <div className="absolute top-20 left-20 h-80 w-80 rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="absolute bottom-20 right-20 h-80 w-80 rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="relative z-10 w-[450px] bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl">

        <h1 className="text-4xl font-bold text-center text-white">
          Create Account
        </h1>

        <p className="text-slate-400 text-center mt-3">
          Join SmartCityFix
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-6"
        >

          <div>
            <label className="text-slate-300">
              Name
            </label>

            <div className="flex items-center gap-3 mt-2 bg-slate-900 rounded-2xl px-5 py-4">
              <FaUser className="text-blue-400" />

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter name"
                className="bg-transparent outline-none text-white w-full"
              />
            </div>
          </div>

          <div>
            <label className="text-slate-300">
              Email
            </label>

            <div className="flex items-center gap-3 mt-2 bg-slate-900 rounded-2xl px-5 py-4">
              <FaEnvelope className="text-blue-400" />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter email"
                className="bg-transparent outline-none text-white w-full"
              />
            </div>
          </div>

          <div>
            <label className="text-slate-300">
              Password
            </label>

            <div className="flex items-center gap-3 mt-2 bg-slate-900 rounded-2xl px-5 py-4">
              <FaLock className="text-blue-400" />

              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="bg-transparent outline-none text-white w-full"
              />
            </div>
          </div>

          <button
            className="w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-2xl text-lg font-semibold transition"
          >
            Register
          </button>

        </form>

        <p className="text-slate-400 text-center mt-8">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-400"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Register;