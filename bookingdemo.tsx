"use client";

import { useState } from "react";

export default function BookingDemo() {
  const [message, setMessage] = useState("");

  async function createBooking() {
    setMessage("Creating demo booking...");

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          type: "FLIGHT",
          amount: 4999,
          details: {
            route: "DEL → HYD",
            passengers: 1
          }
        })
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.error || "Booking failed");
        return;
      }

      setMessage(
        `Demo booking created: ${data.reference}`
      );
    } catch {
      setMessage("Server error");
    }
  }

  return (
    <div className="card p-6">

      <h3 className="text-xl font-black">
        Test Tripora booking
      </h3>

      <p className="text-slate-500 mt-2">
        This creates a test booking in PostgreSQL.
        It does not issue a real ticket or charge money.
      </p>

      <button
        className="btn btn-primary mt-5"
        onClick={createBooking}
      >
        Create demo booking
      </button>

      {message && (
        <p className="mt-4 font-bold text-blue-700">
          {message}
        </p>
      )}

    </div>
  );
}