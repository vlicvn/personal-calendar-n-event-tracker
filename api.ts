import { IEvent } from "./types/events";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;
if (!baseUrl) {
    throw new Error("API URL is not defined. Please set NEXT_PUBLIC_API_URL in your environment variables.");
}


const handleResponse = async (response: Response) => {
    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`API Error: ${response.status} - ${errorText}`);
    }
    return response.json();
};

export const getAllEvents = async (): Promise<IEvent[]> => {
    try {
        const response = await fetch(`${baseUrl}/events`, { cache: "no-store" });
        return await handleResponse(response);
    } catch (error: unknown) {
        console.error(error);
        if (error instanceof Error) {
            throw new Error(error.message || "Event fetching error.");
        }
        throw new Error("Event fetching error.");
    }
};

export const addNewEvent = async (event: IEvent): Promise<IEvent | null> => {
    try {
        const response = await fetch(`${baseUrl}/events`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(event)
        });
        return await handleResponse(response);
    } catch (error: unknown) {
        console.error(error);
        if (error instanceof Error) {
            throw new Error(error.message || "Event creation error.");
        }
        throw new Error("Event creation error.");
    }
};

export const editEvent = async (event: IEvent): Promise<IEvent | null> => {
    try {
        const response = await fetch(`${baseUrl}/events/${event.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(event)
        });
        return await handleResponse(response);
    } catch (error: unknown) {
        console.error(error);
        if (error instanceof Error) {
            throw new Error(error.message || "Event updating error.");
        }
        throw new Error("Event updating error.");
    }
};

export const deleteEvent = async (id: string): Promise<boolean> => {
    try {
        const response = await fetch(`${baseUrl}/events/${id}`, { method: "DELETE" });
        await handleResponse(response);
        return true;
    } catch (error: unknown) {
        console.error(error);
        if (error instanceof Error) {
            throw new Error(error.message || "Event deletion error.");
        }
        throw new Error("Event deletion error.");
    }
};