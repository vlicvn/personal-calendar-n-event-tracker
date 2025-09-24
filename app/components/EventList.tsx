import { FaIdCard } from "react-icons/fa6";
import { MdOutlineTitle } from "react-icons/md";
import { MdDateRange } from "react-icons/md";
import { IoTimerSharp } from "react-icons/io5";
import { FaAudioDescription } from "react-icons/fa";
import { VscServerProcess } from "react-icons/vsc";
import { IEvent } from "@/types/events"
import Event from "./Event"


interface EventListProps {
    events: IEvent[]
}

const EventList: React.FC<EventListProps> = ({ events }) => {

  const sortedEvents = [...events].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
        <div className="overflow-x-auto mx-5 my-5">
            <table className="table w-full">
               {/* head */} 
                <thead>
                    <tr>
                        <th><FaIdCard size={20} className="inline-block mr-2" />Event UUID</th>
                        <th><MdOutlineTitle size={20} className="inline-block mr-2" />Event Title</th>
                        <th><MdDateRange size={20} className="inline-block mr-2" />Event Date</th>
                        <th><IoTimerSharp size={20} className="inline-block mr-2" />Event Time</th>
                        <th><FaAudioDescription size={20} className="inline-block mr-2" />Event Description</th>
                        <th><VscServerProcess size={20} className="inline-block mr-2" />Actions</th>
                    </tr>
                </thead>
                {/* body */}
                <tbody>
                    {sortedEvents.map((event) => (
                        <Event key={event.id} event={event} />
                    ))}
                </tbody>
            </table>
        </div>
  )
}


export default EventList