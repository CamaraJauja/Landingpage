'use client';
import { useCommunity } from "@/hooks/useCommunity";
import { useEvents } from "@/hooks/useEvents";
import { useExecutives } from "@/hooks/useExecutives";
import { createContext, useContext, useEffect, useMemo } from "react";

const DBContext = createContext();

export const DBProvider = ({ children }) => {

    const events = useEvents();
    const community = useCommunity();
    const executives = useExecutives();

    const contextValue = {
        events,
        community,
        executives
    }

    return (
        <DBContext.Provider value={contextValue}>{children}</DBContext.Provider>
    )

}

export const useDB = () => useContext(DBContext);