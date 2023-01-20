import { useRouter } from "next/router";
import React, { Fragment } from "react";
import { getEventById } from "../../dummy-data";
import { EventItemType } from "../../event-item.type";
import { AiOutlineCalendar } from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";

function EventDetailPage() {
  const router = useRouter();
  const eventId = router.query.eventId;
  let event: EventItemType | undefined;

  if (typeof eventId === "string") {
    event = getEventById(eventId);
  }
  console.log(event);

  return (
    <div className="min-h-screen flex flex-col justify-start ">
      <div className="absolute w-full h-[40vh] bg-gradient-to-r from-cyan-500 to-blue-500 -z-10 flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl sm:text-7xl font-extrabold text-white ">
          {event?.title}
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center min-h-screen w-full">
        <div className="grid grid-cols-2 mx-6 mt-10 gap-0 ">
          <div
            id="left"
            className="relative h-0 w-full"
            style={{ paddingBottom: "100%" }}
          >
            <img
              className="absolute top-0 left-0 h-full w-full object-cover"
              src={event?.image}
              alt={event?.title}
            />
          </div>
          <div
            id="right"
            className="bg-gray-800 p-6 flex flex-col justify-center space-y-7 text-blue-200"
          >
            <div>
              <AiOutlineCalendar className="text-emerald-300" />
              <time>{event?.date}</time>
            </div>
            <div>
              {" "}
              <FiMapPin className="text-emerald-300" />
              <address>{event?.location}</address>
            </div>
          </div>
          <p className="col-span-2 text-center mt-8 mx-10">
            {event?.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default EventDetailPage;
