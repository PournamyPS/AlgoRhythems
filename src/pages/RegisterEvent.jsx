import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function RegisterEvent() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const event = state?.event;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `Registration Successful!\n\n${name}\n${event.title}`
    );

    navigate("/events");
  };

  if (!event) {
    return (
      <div className="min-h-screen flex justify-center items-center text-white">
        No event selected.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B1120] text-white py-10">

      <div className="max-w-xl mx-auto bg-[#1E293B] rounded-2xl p-8">

        <h1 className="text-3xl font-bold">
          Register for Event
        </h1>

        <p className="text-cyan-400 mt-2">
          {event.title}
        </p>

        <form
          className="space-y-5 mt-8"
          onSubmit={handleSubmit}
        >

          <input
            required
            placeholder="Full Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className="w-full p-3 rounded-lg bg-[#0B1120]"
          />

          <input
            required
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full p-3 rounded-lg bg-[#0B1120]"
          />

          <input
            required
            placeholder="Phone Number"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            className="w-full p-3 rounded-lg bg-[#0B1120]"
          />

          <button
            className="w-full py-3 rounded-lg bg-cyan-600 hover:bg-cyan-500"
          >
            Confirm Registration
          </button>

        </form>

      </div>

    </div>
  );
}