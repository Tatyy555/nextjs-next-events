import Link from "next/link";
import React from "react";
import { EventItemType } from "../../event-item.type";
import { AiOutlineCalendar } from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";
import { BsArrowRight } from "react-icons/bs";

type EventItemProps = {
  event: EventItemType;
};

function EventItem(props: EventItemProps) {
  const humanReadableDate = new Date(props.event.date).toLocaleDateString(
    "en-US",
    {
      day: "numeric",
      month: "short",
      year: "numeric",
    }
  );

  return (
    <li className="cursor-pointer transition-all duration-200 hover:scale-105 m-10 rounded-lg bg-gray-100 shadow-xl  grid grid-cols-2">
      <div id="left" className="relative rounded-lg h-0 w-full square">
        <img
          className="absolute top-0 left-0 h-full w-full object-cover"
          src={props.event.image}
          alt={props.event.title}
        />
      </div>
      <div
        id="right"
        className="px-8 sm:px-6 md:px-4 flex flex-col justify-center items-center "
      >
        <div className="flex flex-col space-y-2 my-auto">
        <h2 className=" text-center sm:text-xl font-semibold w-full overflow-x-scroll whitespace-nowrap">
            {props.event.title}
          </h2>
          <div className="text-sm flex items-center">
            <AiOutlineCalendar className="mr-2 h-5 w-5" />
            <time className="font-semibold  ">{humanReadableDate}</time>
          </div>
          <div className="text-sm flex items-center">
            <FiMapPin className="mr-2 h-5 w-5" />
            <address>{props.event.location}</address>
          </div>
          <Link
            className=" mx-auto text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300  font-extralight rounded-lg sm:text-lg px-5 py-1 text-center my-4 flex items-center"
            href={`/events/${props.event.id}`}
          >
            Explore
            <BsArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
