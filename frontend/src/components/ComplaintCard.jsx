function ComplaintCard({ complaint }) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm">

      <div className="flex justify-between">

        <div>

          <h3 className="text-2xl font-bold">
            {complaint.title}
          </h3>

          <p className="text-gray-500 mt-3">
            {complaint.description}
          </p>

          <p className="text-gray-400 mt-4">
            📍 {complaint.address}
          </p>

        </div>

        <div>

          <span className="bg-gray-100 px-4 py-2 rounded-xl">
            {complaint.status}
          </span>

        </div>

      </div>

    </div>
  );
}

export default ComplaintCard;