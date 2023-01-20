import { useRouter } from "next/router";
import React from "react";
import { MdContactSupport } from "react-icons/md";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/event-search";
import { getAllEvents } from "../../dummy-data";



function AllEventsPage() {
  const allEvents = getAllEvents();
  const router = useRouter()
  
  function findEventsHandler(year:string, month:string){
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath);
  }

  return (
    <div>
      <h1 className="px-10 py-2.5 text-2xl font-semibold mx-auto ">
        All Events Page
      </h1>
      <EventSearch onSearch={findEventsHandler}/>
      <EventList events={allEvents} />
    </div>
  );
}

export default AllEventsPage;
