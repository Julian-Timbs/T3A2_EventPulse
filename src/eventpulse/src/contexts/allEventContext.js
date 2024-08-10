

export const asyncFetchAllEvents = async () => {
  const data = await fetch("http://localhost:3000/events/").catch(error => console.error(error))

  const json = await data.json();

  return json.result
}
