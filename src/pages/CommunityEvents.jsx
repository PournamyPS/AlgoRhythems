import { useState } from "react";
import EventCard from "../components/EventCard";
import EventModal from "../components/EventModal";
import bharatanatyamImg from "../assets/events/bharatanatyam.jpg";
import kathakImg from "../assets/events/kathak.jpg";
import mohiniyattamImg from "../assets/events/mohiniyattam.jpg";

export default function CommunityEvents() {

  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Bharatanatyam Heritage Festival",
      category: "Bharatanatyam",
      date: "25 July 2026",
      location: "Chennai",
      organizer: "Kalakshetra Foundation",
      image: bharatanatyamImg,
      description:
        "Experience the beauty of Bharatanatyam through workshops, performances and cultural discussions.",
    },
    {
      id: 2,
      title: "Kathak Workshop",
      category: "Kathak",
      date: "2 August 2026",
      location: "Lucknow",
      organizer: "Kathak Academy",
      image: kathakImg,
      description:
        "Learn Kathak basics from experienced artists with visual rhythm support.",
    },
    {
      id: 3,
      title: "Mohiniyattam Showcase",
      category: "Mohiniyattam",
      date: "10 August 2026",
      location: "Thrissur",
      organizer: "Kerala Kalamandalam",
      image: mohiniyattamImg,
      description:
        "Celebrate Kerala's graceful classical dance with live performances.",
    },
  ]);

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B1120] text-white">

      <div className="max-w-7xl mx-auto px-6 py-10">

        <h1 className="text-4xl font-bold">
          Community Events
        </h1>

        <p className="text-gray-400 mt-2">
          Explore workshops, festivals and performances celebrating Indian classical dance.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">

          {events.map((event) => (
            <EventCard
  key={event.id}
  event={event}
  onViewDetails={(event) => {
  console.log("Clicked:", event);
  alert(event.title);
  setSelectedEvent(event);
  setShowModal(true);
}}
/>
          ))}

        </div>

      </div>
    
    <EventModal
  open={showModal}
  event={selectedEvent}
  onClose={() => setShowModal(false)}
/>

    </div>
  );
}