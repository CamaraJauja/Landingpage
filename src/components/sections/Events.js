'use client';

import { useDB } from "@/context/DBContext";
import { page } from "@/db/page";
import CardEvent from "../ui/CardEvent";
import { useState } from "react";

export default function Events () {

    const { events } = useDB();

    const { data = [], loading } = events;

    const [filter, setFilter] = useState('all');

    const filteredEvents = filter === 'all' ? data : data.filter((item) => item.category === filter);

    return (
        <section className="w-full py-xl bg-white" id="events">
            <div className="w m-auto flex flex-col gap-md" style={{"--w": "90%"}}>
                <div className="text-center">
                    <h2 className="text-2xl lg:text-4xl">{page.events.title}</h2>
                    <p className="text-muted">{page.events.subtext}</p>
                </div>
                <ul className="w-full flex items-center gap-sm scroll-x">
                    <button className={`filter ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>Todos</button>
                    {page.events.categories.map((category, idx) => (
                        <button key={idx} className={`filter ${filter === category ? 'active' : ''}`} onClick={() => setFilter(category)}>{category}</button>
                    ))}
                </ul>
                <div className="w-full">
                    {loading ? (
                        <p className="text-center text-muted text-2xl">Cargando...</p>
                    ) : (
                        filteredEvents.length > 0 ? (
                            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md">
                                {filteredEvents.map((item) => (
                                    <CardEvent key={item.id} item={item} />
                                ))}
                            </div>
                        ) : (
                            <p className="text-center text-muted text-2xl">No hay eventos en la categoria seleccionada</p>
                        )
                    )}
                </div>
            </div>
        </section>
    )
}