import { formatterDate } from "@/helpers/date.helper";
import { IconCalendar, IconClock } from "@tabler/icons-react";
import Link from "next/link";

export default function CardEvent ({ item }) {
    return (
        <article className="w-full bg-white rounded-md border-thin shadow" style={{overflow: "hidden"}}>
            <div className="relative w-full h bg-background" style={{"--h": "180px"}}>
                <span className="absolute inline-flex bg-primary text-white p-xs rounded-sm" style={{top: "10px", left: "10px"}}>{item.category}</span>
            </div>
            <div className="w-full flex flex-col gap-sm p-sm">
                <div className="w-full flex items-center justify-between">
                    <p className="text-muted text-xs flex items-center gap-xs"><IconCalendar size={18} strokeWidth={1.2} /> {formatterDate(item.date)}</p>
                    <p className="text-muted text-xs flex items-center gap-xs"><IconClock size={18} strokeWidth={1.2} /> {item.hours}</p>
                </div>
                <h3 className="text-lg lg:text-xl">{item.title}</h3>
                <p className="text-xs text-muted">{item.content}</p>
                <div className="w-full flex gap-sm">
                    <button className="btn btn-primary">Inscribirme</button>
                    <Link href={`/events/${item.code}`} className="btn btn-secondary">Detalles</Link>
                </div>
            </div>
        </article>
    )
}