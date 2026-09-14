import Image from "next/image";
import Link from "next/link";

export default function CardExecutive ({ item }) {

    const image = item?.image ? item.image : '/directivos.png';

    return (
        <article className="card card-interactive w-full min-w-[270px] overflow-hidden rounded-xl border border-slate-100 bg-white p-0" style={{ boxShadow: '0 14px 28px rgba(0, 48, 89, 0.08)' }}>
            <div className="relative w-full h-[280px]" style={{ background: 'linear-gradient(180deg, rgba(248,181,59,0.25), var(--color-background))' }}>
                <Image src={image} alt={`${item.name} | ${item.post} | Cámara de Comercio de Jauja`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 30vw" />
            </div>
            <div className="flex flex-col gap-sm p-md">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">{item.post}</p>
                <h3 className="text-primary text-xl lg:text-2xl font-semibold leading-tight">{item.name}</h3>
                <p className="text-sm leading-6 text-muted">{item.about || 'Líder comprometido con la representación y el desarrollo empresarial de nuestra provincia.'}</p>
                <Link href={`/about/executives/${item.code}`} className="btn btn-primary btn-sm mt-sm">Ver perfil</Link>
            </div>
        </article>
    )
}