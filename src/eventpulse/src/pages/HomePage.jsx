import { useEffect, useState } from "react";
import { asyncFetchAllEvents } from "../contexts/allEventContext";
import handleEventClick from "../functions/navigateToEvent";

export default function HomePage() {
  const [allEvents, setAllEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const events = await asyncFetchAllEvents();
      setAllEvents(events);
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Find an event near you!</h1>
      <div id="eventPreview">
        {allEvents.map((event, index) => (
          <div key={index} onClick={() => handleEventClick(event.id)}>
            <h3>{event.eventName}</h3>
            <p>{event.location}</p>
            <p>{event.dateTime}</p>
            <p>{event.host.name}</p>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
