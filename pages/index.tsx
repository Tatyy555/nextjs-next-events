import React from "react";
import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../dummy-data";

function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <h1 className="px-10 py-2.5 text-2xl font-semibold mx-auto ">The Home Page</h1>
      <EventList events={featuredEvents} />
    </div>
  );
}

export default HomePage;
