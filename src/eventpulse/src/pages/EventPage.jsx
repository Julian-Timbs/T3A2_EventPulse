import { useEffect, useState } from "react";
import { asyncFetchEventById } from "../functions/fetchEventById";



export default function EventPage(){
  const [oneEvent, setOneEvent] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const event = await asyncFetchEventById(id)
      setOneEvent(event);
    };
    fetchData();
  }, [])

  return(<>
    <div>{event.eventName}</div>
  </>)
}
