"use client";

import { useState } from "react";
import {
  Plane,
  TrainFront,
  Bus,
  Hotel,
  FileText,
  Search
} from "lucide-react";

interface Stat {
  label: string;
  value: string;
}

const tabs = [
  { id: "flight", label: "Flights", icon: Plane },
  { id: "train", label: "Trains", icon: TrainFront },
  { id: "bus", label: "Bus", icon: Bus },
  { id: "hotel", label: "Hotels", icon: Hotel },
  { id: "visa", label: "Visa", icon: FileText }
];

export default function SearchBox() {
  const [tab, setTab] = useState("flight");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  function search() {
    setMessage(
      `Demo search: ${tab} | ${
        from || "Any"
      } → ${to || "Any"} | ${
        date || "Flexible date"
      }`
    );
  }

  return (
    <div className="card p-3 text-slate-900">

      <div className="flex gap-2 overflow-x-auto pb-3">
        {tabs.map((tabItem) => {
          const Icon = tabItem.icon;

          return (
            <button
              key={tabItem.id}
              onClick={() => setTab(tabItem.id)}
              className={`tab flex items-center gap-2 ${
                tab === tabItem.id ? "active" : ""
              }`}
            >
              <Icon size={18} />
              {tabItem.label}
            </button>
          );
        })}
      </div>

      <div className="grid md:grid-cols-[1fr_1fr_180px_130px] gap-3">

        <input
          className="input"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          placeholder={
            tab === "hotel"
              ? "City or hotel"
              : "From"
          }
        />

        <input
          className="input"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          placeholder={
            tab === "hotel"
              ? "Destination"
              : "To"
          }
        />

        <input
          className="input"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <button
          className="btn btn-primary gap-2"
          onClick={search}
        >
          <Search size={18} />
          Search
        </button>

      </div>

      {message && (
        <p className="px-2 pt-3 text-sm font-bold text-blue-700">
          {message}
        </p>
      )}
    </div>
  );
}
export const stats: Stat[] = [
    { label: "Bookings", value: "1,284" },
    { label: "Users", value: "8,421" },
    { label: "Revenue", value: "₹18.4L" },
    { label: "Pending visas", value: "43" },
];
