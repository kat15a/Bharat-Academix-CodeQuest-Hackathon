import { useState } from "react";
import axios from "axios";
import {
  FaMapMarkerAlt,
  FaUpload,
  FaPaperPlane,
} from "react-icons/fa";

function RaiseComplaint() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "Roads",
    address: "",
    latitude: "",
    longitude: "",
  });

  const [image, setImage] = useState(null);
  const [loadingLocation, setLoadingLocation] =
    useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const detectLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported");
      return;
    }

    setLoadingLocation(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setForm((prev) => ({
          ...prev,
          latitude:
            position.coords.latitude,
          longitude:
            position.coords.longitude,
          address:
            "Current Location Detected",
        }));

        setLoadingLocation(false);
      },
      () => {
        setLoadingLocation(false);
        alert(
          "Unable to fetch location"
        );
      }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token =
        localStorage.getItem("token");

      if (image) {
        const data = new FormData();

        data.append(
          "request",
          new Blob(
            [JSON.stringify(form)],
            {
              type: "application/json",
            }
          )
        );

        data.append(
          "imageFile",
          image
        );

        await axios.post(
          "http://localhost:8080/complaints/user/1/upload",
          data,
          {
            headers: {
              Authorization:
                `Bearer ${token}`,
              "Content-Type":
                "multipart/form-data",
            },
          }
        );
      } else {
        await axios.post(
          "http://localhost:8080/complaints/user/1",
          form,
          {
            headers: {
              Authorization:
                `Bearer ${token}`,
            },
          }
        );
      }

      alert(
        "Complaint Submitted Successfully!"
      );

      setForm({
        title: "",
        description: "",
        category: "Roads",
        address: "",
        latitude: "",
        longitude: "",
      });

      setImage(null);
    } catch (err) {
      console.log(err);
      alert(
        "Failed to submit complaint"
      );
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 py-12 px-6">

      <div className="max-w-4xl mx-auto bg-white rounded-[35px] shadow-xl p-10">

        <h1 className="text-4xl font-bold text-slate-800">
          Report an Issue
        </h1>

        <p className="text-slate-500 mt-3">
          Help improve your city by
          reporting civic issues.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 mt-10"
        >

          {/* Title */}
          <div>
            <label className="block text-slate-700 mb-2 font-medium">
              Title
            </label>

            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Street Light Broken"
              className="w-full p-4 rounded-2xl border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-slate-700 mb-2 font-medium">
              Description
            </label>

            <textarea
              rows="5"
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Describe the issue..."
              className="w-full p-4 rounded-2xl border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-slate-700 mb-2 font-medium">
              Category
            </label>

            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full p-4 rounded-2xl border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Roads</option>
              <option>Water</option>
              <option>Electricity</option>
              <option>Sanitation</option>
            </select>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-slate-700 mb-2 font-medium">
              Upload Image
            </label>

            <div className="border-2 border-dashed border-slate-300 rounded-2xl p-6 text-center">

              <FaUpload className="text-3xl mx-auto text-slate-400" />

              <input
                type="file"
                onChange={(e) =>
                  setImage(
                    e.target.files[0]
                  )
                }
                className="mt-4"
              />

              {image && (
                <p className="mt-3 text-slate-500">
                  {image.name}
                </p>
              )}
            </div>
          </div>

          {/* Detect Location */}
          <div>
            <button
              type="button"
              onClick={detectLocation}
              className="w-full bg-teal-500 hover:bg-teal-600 text-white p-4 rounded-2xl font-semibold flex items-center justify-center gap-3"
            >
              <FaMapMarkerAlt />

              {loadingLocation
                ? "Detecting..."
                : "Use Current Location"}
            </button>
          </div>

          {/* Location Preview */}
          {form.latitude && (
            <div className="bg-slate-100 rounded-2xl p-5">

              <h3 className="font-semibold text-slate-700">
                Location Detected
              </h3>

              <p className="text-slate-500 mt-2">
                Latitude:
                {" "}
                {form.latitude}
              </p>

              <p className="text-slate-500">
                Longitude:
                {" "}
                {form.longitude}
              </p>
            </div>
          )}

          {/* Submit */}
          <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-2xl font-semibold flex items-center justify-center gap-3"
          >
            <FaPaperPlane />
            Submit Complaint
          </button>

        </form>

      </div>

    </div>
  );
}

export default RaiseComplaint;