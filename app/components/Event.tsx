"use client";
import { IEvent } from "@/types/events"
import { CiEdit, CiTrash  } from "react-icons/ci";
import Modal from "./Modal";
import { FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import { deleteEvent, editEvent } from "@/api";

interface EventProps {
    event: IEvent
}

const Event: React.FC<EventProps> = ({ event }) => {
  const router = useRouter();
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const [editNewEventTitle, setEditNewEventTitle] = useState<string>(event.title);
  const [editNewEventDate, setEditNewEventDate] = useState<string>(event.date);
  const [editNewEventTime, setEditNewEventTime] = useState<string>(event.time);
  const [editNewEventDescription, setEditNewEventDescription] = useState<string>(event.description);
  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmitEditEvent: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setError(null);

    if (!editNewEventTitle.trim() || !editNewEventDate.match(/^\d{4}-\d{2}-\d{2}$/) || !editNewEventTime.match(/^\d{2}:\d{2}$/) || !editNewEventDescription.trim()) {
      setError("Please fill all fields correctly format.");
      return;
    }

    setLoading(true);
    const result = await editEvent({
      id: event.id,
      title: editNewEventTitle,
      date: editNewEventDate,
      time: editNewEventTime,
      description: editNewEventDescription,
    });
    setLoading(false);

    if (!result) {
      setError("An error occurred while updating the event.");
      return;
    }

    setOpenModalEdit(false);
    router.refresh();
  };

  const handleDeleteEvent = async (id: string) => {
    setError(null);
    setLoading(true);
    const success = await deleteEvent(id);
    setLoading(false);

    if (!success) {
      setError("An error occurred while deleting the event.");
      return;
    }

    setOpenModalDelete(false);
    router.refresh();
  };

  return (
    <tr key={event.id}>
      <td>{event.id}</td>
      <td>{event.title}</td>
      <td>{event.date}</td>
      <td>{event.time}</td>
      <td>{event.description}</td>
      <td className="flex gap-2">
        <CiEdit onClick={() => setOpenModalEdit(true)} className="cursor-pointer text-green-400" size={25} />
        {error && (
          <div className="alert alert-error mb-2">
            {error}
          </div>
        )}
        <Modal modalIsOpen={openModalEdit} setModalIsOpen={setOpenModalEdit}>
          <h3 className="font-bold text-lg mb-4">Edit Event</h3>
          <form onSubmit={handleSubmitEditEvent} className="flex flex-col gap-4 w-full">
            <input 
              type="text" 
              placeholder="Event Title" 
              className="input input-bordered w-full" 
              value={editNewEventTitle} 
              onChange={(e) => setEditNewEventTitle(e.target.value)} 
              required 
            />
            <input 
              type="date" 
              className="input input-bordered w-full" 
              value={editNewEventDate} 
              onChange={(e) => setEditNewEventDate(e.target.value)} 
              required 
            />
            <input 
              type="time" 
              className="input input-bordered w-full" 
              value={editNewEventTime} 
              onChange={(e) => setEditNewEventTime(e.target.value)} 
              required 
            />
            <textarea 
              placeholder="Event Description" 
              className="input input-bordered w-full h-32" 
              value={editNewEventDescription} 
              onChange={(e) => setEditNewEventDescription(e.target.value)} 
              required 
            />
            {error && <div className="text-red-500">{error}</div>}
            {loading && <div className="text-blue-500">Loading...</div>}
            <button type="submit" className="btn btn-primary" disabled={loading}>
              Save Changes
            </button>
          </form>
        </Modal>
        <CiTrash onClick={() => setOpenModalDelete(true)} className="cursor-pointer text-red-400" size={25} />
        <Modal modalIsOpen={openModalDelete} setModalIsOpen={setOpenModalDelete}>
          <div>
            <h3 className="font-bold text-lg mb-4">Are you sure you want to delete this event?</h3>
            {error && <div className="text-red-500">{error}</div>}
            <button className="btn btn-error w-full" onClick={() => handleDeleteEvent(event.id)} disabled={loading}>
              {loading ? "Deleting..." : "Delete"}
            </button>
          </div>
        </Modal>
      </td>
    </tr>
  );
};

export default Event;