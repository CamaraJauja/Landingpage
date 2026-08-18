'use client';

import { useDB } from "@/context/DBContext";
import { page } from "@/db/page";
import CardExecutive from "../ui/CardExecutive";

export default function Executives () {

    const { executives } = useDB();
    const { data = [], loading } = executives;

    return (
        <div className="w-full flex flex-col gap-md">
            <div className="text-center">
                <h2 className="text-2xl lg:text-4xl">{page.about.executives.title}</h2>
                <p className="text-muted">{page.about.executives.subtext}</p>
            </div>
            <div className="w-full flex gap-md scroll-x">
                {loading ? (
                    <p>Cargando...</p>
                ) : (
                    data.length > 0 ? (
                        data.map((item) => (
                            <CardExecutive key={item.id} item={item} />
                        ))
                    ) : (
                        <p>No hay ejecutivos para mostrar</p>
                    )
                )}
            </div>
        </div>
    )
}