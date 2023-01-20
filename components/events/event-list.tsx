import React from "react";
import EventItem from "./event-item";
import { EventItemType } from "../../event-item.type";

type EventListProps = {
  events: EventItemType[];
};

function EventList(props: EventListProps) {
  return (
    <ul className="grid md:grid-cols-2">
      {props.events.map((item) => (
        <EventItem key={item.id} event={item} />
      ))}
    </ul>
  );
}

export default EventList;
