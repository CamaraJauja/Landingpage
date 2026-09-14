import { formatterDate } from "@/helpers/date.helper";
import { IconCalendar, IconClock, IconMapPin, IconArrowUpRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function CardEvent ({ item }) {
    const image = item?.image || '/bg-hero.webp';

    return (
        <article className="card card-interactive w-full h-full overflow-hidden rounded-xl bg-white p-0" style={{ boxShadow: '0 14px 28px rgba(0, 48, 89, 0.07)' }}>
            <div className="relative w-full h-[190px] bg-background">
                <Image src={image} alt={item.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 25vw" />
                <span className="absolute left-md top-md inline-flex items-center rounded-full bg-primary px-sm py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">{item.category}</span>
            </div>
            <div className="flex flex-col gap-sm p-md">
                <div className="flex items-center justify-between gap-sm text-[11px] text-muted">
                    <span className="inline-flex items-center gap-xs"><IconCalendar size={16} strokeWidth={1.8} /> {formatterDate(item.date) || 'Próximamente'}</span>
                    <span className="inline-flex items-center gap-xs"><IconClock size={16} strokeWidth={1.8} /> {item.hours || 'Por confirmar'}</span>
                </div>
                <h3 className="text-lg lg:text-xl font-semibold text-primary leading-tight">{item.title}</h3>
                <p className="text-sm leading-6 text-muted">{item.content}</p>
                <div className="mt-xs inline-flex items-center gap-xs text-sm font-medium text-primary">
                    <IconMapPin size={16} strokeWidth={1.8} />
                    {item.location || 'Jauja'}
                </div>
                <div className="mt-sm flex gap-sm">
                    <button className="btn btn-primary btn-sm">Inscribirme</button>
                    <Link href={`/events/${item.code}`} className="btn btn-secondary btn-sm gap-xs">
                        Detalles <IconArrowUpRight size={16} />
                    </Link>
                </div>
            </div>
        </article>
    )
}