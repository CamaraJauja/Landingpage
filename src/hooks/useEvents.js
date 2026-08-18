import { getEventsAll } from "@/services/events.service";
import { useState } from "react"

export const useEvents = () => {

    const [ events, setEvents ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    const getEvents = async () => {
        try {
            const data = await getEventsAll();
            setEvents(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    return {
        data: events,
        loading,
        getEvents
    }

}