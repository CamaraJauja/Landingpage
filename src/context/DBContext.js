'use client';
import { useCommunity } from "@/hooks/useCommunity";
import { useEvents } from "@/hooks/useEvents";
import { useExecutives } from "@/hooks/useExecutives";
import { createContext, useContext, useEffect } from "react";

const DBContext = createContext();

export const DBProvider = ({ children }) => {

    const events = useEvents();
    const community = useCommunity();
    const executives = useExecutives();

    useEffect(() => {
        (async () => {
            await Promise.all([
                events.getEvents(),
                community.getCommunitys(),
                executives.getExecutives()
            ])
        })();
    }, []);

    const contextValue = {
        events: events,
        community: community,
        executives: executives
    }

    return (
        <DBContext.Provider value={contextValue}>{children}</DBContext.Provider>
    )

}

export const useDB = () => useContext(DBContext);