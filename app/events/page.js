"use client";

import React, { useState } from "react";
import { Calendar, MapPin, Clock, Info } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Tech Innovation Summit",
    date: "November 15, 2024",
    time: "9:00 AM - 5:00 PM",
    location: "San Francisco Convention Center",
    description: "Join leading tech experts for a day of cutting-edge innovation and networking.",
    category: "Technology",
    price: "$299",
    speakers: [
      { name: "Dr. Emily Chen", role: "AI Research Lead" },
      { name: "Michael Rodriguez", role: "Blockchain Innovator" },
    ],
  },
  {
    id: 2,
    title: "Sustainable Design Workshop",
    date: "December 5, 2024",
    time: "10:00 AM - 3:00 PM",
    location: "Green Innovation Hub",
    description: "Hands-on workshop exploring sustainable design principles and practices.",
    category: "Design",
    price: "Free",
    speakers: [{ name: "Sarah Green", role: "Sustainability Architect" }],
  },
  {
    id: 3,
    title: "Startup Founders Meetup",
    date: "January 20, 2025",
    time: "6:00 PM - 9:00 PM",
    location: "Startup Incubator",
    description: "Networking event for entrepreneurs and startup founders.",
    category: "Entrepreneurship",
    price: "$50",
    speakers: [
      { name: "Alex Thompson", role: "Serial Entrepreneur" },
      { name: "Jessica Liu", role: "Venture Capitalist" },
    ],
  },
];

const EventCard = ({ event, onDetailsClick }) => {
  return (
    <div className="bg-black border border-gray-800 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
      <div className="px-6 py-4 flex justify-between items-center border-b border-gray-800">
        <h2 className="text-xl font-bold text-white">{event.title}</h2>
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium 
          ${
            event.category === "Technology"
              ? "bg-blue-900 text-blue-300"
              : event.category === "Design"
              ? "bg-green-900 text-green-300"
              : "bg-purple-900 text-purple-300"
          }`}
        >
          {event.category}
        </span>
      </div>
      <div className="p-6 space-y-3">
        <div className="flex items-center text-gray-400">
          <Calendar className="mr-2 h-5 w-5 text-gray-500" />
          <span>{event.date}</span>
        </div>
        <div className="flex items-center text-gray-400">
          <Clock className="mr-2 h-5 w-5 text-gray-500" />
          <span>{event.time}</span>
        </div>
        <div className="flex items-center text-gray-400">
          <MapPin className="mr-2 h-5 w-5 text-gray-500" />
          <span>{event.location}</span>
        </div>
        <div className="font-semibold text-white">{event.price}</div>
        <button
          onClick={() => onDetailsClick(event)}
          className="w-full mt-4 px-4 py-2 border border-gray-700 rounded-md text-white hover:bg-gray-900 transition-colors"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

const EventDetailsModal = ({ event, isOpen, onClose }) => {
  if (!isOpen || !event) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="bg-black border border-gray-800 rounded-lg max-w-md w-full p-6 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center border-b border-gray-800 pb-4 mb-4">
          <h2 className="text-2xl font-bold text-white">{event.title}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            ✕
          </button>
        </div>
        <div className="space-y-4">
          <div className="flex items-center text-gray-400">
            <Calendar className="mr-2 h-5 w-5 text-gray-500" />
            <span>
              {event.date} | {event.time}
            </span>
          </div>
          <div className="flex items-center text-gray-400">
            <MapPin className="mr-2 h-5 w-5 text-gray-500" />
            <span>{event.location}</span>
          </div>
          <p className="text-gray-300">{event.description}</p>

          <div>
            <h3 className="text-lg font-semibold mb-2 text-white">Speakers</h3>
            {event.speakers.map((speaker, index) => (
              <div key={index} className="flex items-center mb-2">
                <Info className="mr-2 h-5 w-5 text-gray-500" />
                <div>
                  <p className="font-medium text-white">{speaker.name}</p>
                  <p className="text-sm text-gray-400">{speaker.role}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full px-4 py-2 bg-blue-900 text-blue-300 rounded-md hover:bg-blue-800 transition-colors">
            Register for Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEventDetailsClick = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-black min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-white">Upcoming Events</h1>
        <p className="text-xl text-gray-400">
          Discover exciting opportunities to learn, network, and grow.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {events.map((event) => (
          <EventCard key={event.id} event={event} onDetailsClick={handleEventDetailsClick} />
        ))}
      </div>

      <EventDetailsModal event={selectedEvent} isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
