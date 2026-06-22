function StatCard({
  title,
  value,
  color = "orange",
}) {
  return (
    <div
      className={`
      bg-white
      rounded-3xl
      p-8
      shadow-sm
      border-t-4
      border-${color}-500
    `}
    >
      <p className="text-gray-500 text-sm">
        {title}
      </p>

      <h2 className="text-5xl font-bold mt-4">
        {value}
      </h2>
    </div>
  );
}

export default StatCard;