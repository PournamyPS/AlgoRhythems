export default function EventCard({
  event,
  onViewDetails,
}) {
  return (
    <div className="bg-[#1E293B] rounded-2xl overflow-hidden border border-gray-700 hover:border-violet-500 hover:scale-[1.02] transition duration-300">

      <img
        src={event.image}
        alt={event.title}
        className="w-full h-56 object-cover"
      />

      <div className="p-5">

        <span className="inline-block px-3 py-1 rounded-full bg-cyan-600 text-sm">
          {event.category}
        </span>

        <h2 className="text-2xl font-bold mt-4">
          {event.title}
        </h2>

        <p className="text-gray-400 mt-2">
          📅 {event.date}
        </p>

        <p className="text-gray-400">
          📍 {event.location}
        </p>

        <p className="text-gray-400">
          👤 {event.organizer}
        </p>

        <button
 onClick={() => {
  console.log("Clicked");
  alert(event.title);
  onViewDetails(event);
}}
  className="mt-5 w-full bg-violet-600 hover:bg-violet-500 py-3 rounded-xl font-semibold"
>
  View Details
</button>

      </div>
    </div>
  );
}