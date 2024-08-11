export const asyncFetchEventById = async (eventId) => {
  const data = await fetch("http://localhost:3000/events/${eventId}")

  const json = await data.json()

  return json.result
}
