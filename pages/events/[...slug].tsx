import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { getFilteredEvents } from "../../dummy-data";
import { EventItemType } from "../../event-item.type";
import EventList from "../../components/events/event-list";

EventList
function FilteredEventsPage() {
  const router = useRouter();

  let filteredEvents: EventItemType[] = [];
  let selectedDate;
  let newSelectedDate;

  if (router.query.slug !== undefined) {
    selectedDate = { year: router.query.slug[0], month: router.query.slug[1] };
    filteredEvents = getFilteredEvents(selectedDate);

    newSelectedDate = new Date(
      parseInt(selectedDate.year),
      parseInt(selectedDate.month)
    );
    console.log(newSelectedDate);
  }

  console.log(filteredEvents);

  return (
    <div>
      <h1 className="px-10 py-2.5 text-2xl font-semibold mx-auto ">
        Events in {newSelectedDate?.getFullYear()}{" "}
        {newSelectedDate?.toLocaleString("en", { month: "short" })}
      </h1>
      {filteredEvents.length === 0 ? (
        <div className="flex flex-col justify-center items-center">
        <p className="text-center mt-24">No Events found</p>
        <Link
         className=" mx-auto text-white bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-emerald-300  font-extralight rounded-lg sm:text-lg px-5 py-1 text-center mt-10"
         href="/events">Show all Events</Link>
        </div>
      ) : (
        <EventList events={filteredEvents} />
      )}
    </div>
  );
}

export default FilteredEventsPage;
