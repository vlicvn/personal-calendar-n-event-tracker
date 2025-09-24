"use client"

import { FiPlusCircle } from "react-icons/fi";
import Modal from "./Modal";
import { addNewEvent } from "@/api";
import { FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from 'uuid';


const AddEvent = () => {

  const router = useRouter();
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [newEventTitle, setNewEventTitle] = useState<string>("");
  const [newEventDate, setNewEventDate] = useState<string>("");
  const [newEventTime, setNewEventTime] = useState<string>("");
  const [newEventDescription, setNewEventDescription] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleAddNewEvent: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setError(null);

    
    if (!newEventTitle || !newEventDate || !newEventTime || !newEventDescription) {
      setError("All fields are required.");
      return;
    }

    setLoading(true);

    const result = await addNewEvent({
      id: uuidv4(),
      title: newEventTitle,
      date: newEventDate,
      time: newEventTime,
      description: newEventDescription
    });

    setLoading(false);

    if (!result) {
      setError("Failed to add event. Please try again.");
      return;
    }

    setModalIsOpen(false);
    setNewEventTitle("");
    setNewEventDate("");
    setNewEventTime("");
    setNewEventDescription("");
    router.refresh();
  }

  return (
    <div>
      <button onClick={() => setModalIsOpen(true)} className="btn btn-secondary w-full my-5 mx-auto">
        Add Event
        <FiPlusCircle size={25} className="inline-block" />
      </button>

      <Modal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}>
        <h3 className="font-bold text-lg mb-4">Add New Event</h3>
        <form onSubmit={handleAddNewEvent} className="flex flex-col gap-4 w-full">
          <input 
            type="text" 
            placeholder="Title" 
            className="input input-bordered w-full" 
            value={newEventTitle} 
            onChange={(e) => setNewEventTitle(e.target.value)} 
            required 
          />
          <input 
            type="date" 
            className="input input-bordered w-full" 
            value={newEventDate} 
            onChange={(e) => setNewEventDate(e.target.value)} 
            required 
          />
          <input 
            type="time" 
            className="input input-bordered w-full" 
            value={newEventTime} 
            onChange={(e) => setNewEventTime(e.target.value)} 
            required 
          />
          <textarea 
            placeholder="Description" 
            className="input input-bordered w-full h-32" 
            value={newEventDescription} 
            onChange={(e) => setNewEventDescription(e.target.value)} 
            required 
          />
          {error && <div className="text-red-500">{error}</div>}
          {loading && <div className="text-blue-500">Loading...</div>}
          <button type="submit" className="btn btn-secondary" disabled={loading}>
            Add
          </button>
        </form>
      </Modal>
    </div>
  )
}

export default AddEvent