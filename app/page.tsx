import { getAllEvents } from "@/api";
import AddEvent from "./components/AddEvent";
import EventList from "./components/EventList";


export default async function Home() {

  const events = await getAllEvents();
  return (
    <main className="">
      <div className="max-w-lg mx-auto mt-5">
        <h1 className="text-center text-2xl font-bold underline">Personal Calendar and Event Tracker</h1>
        <AddEvent />
      </div>
      <EventList events={events} />
    </main>
  );
}
