'use client';

import { useDB } from "@/context/DBContext";
import { page } from "@/db/page";
import { IconBuildingStore } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function Community () {

    const { community } = useDB();
    const { data = [], loading } = community;

    return (
        <section className="w-full py-xl bg-background">
            <div className="w m-auto flex flex-col items-center gap-md" style={{"--w": "90%"}}>
                <div className="text-center">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Comunidad</p>
                    <h2 className="mt-sm text-2xl lg:text-4xl">{page.community.title}</h2>
                    <p className="mt-sm text-muted max-w-2xl">{page.community.subtext}</p>
                </div>
                <ul className="w-full grid grid-cols-4 pb-sm">
                    {loading ? (
                        <p className="text-center text-muted text-2xl">Cargando...</p>
                    ) : (
                        data.length > 0 ? (
                            data.map((item) => (
                                <li key={item.id} className="card card-interactive center overflow-hidden rounded-2xl bg-white p-0" style={{ width: '250px', minWidth: '250px', height: '250px', boxShadow: '0 12px 28px rgba(0, 48, 89, 0.08)' }} title={item.nombre_comercial}>
                                    <Image src={item.logo || '/placeholder.png'} width={250} height={250} alt={`Logo de ${item.nombre_comercial}`} loading="eager" className="object-contain" />
                                </li>
                            ))
                        ) : (
                            <div className="flex w-full items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white p-xl text-center text-muted text-xl">
                                <div className="flex flex-col items-center gap-sm">
                                    <IconBuildingStore size={38} />
                                    <p>No hay empresas ahora</p>
                                </div>
                            </div>
                        )
                    )}
                </ul>
                <Link href={'/'} className="btn btn-primary">Quiero formar parte</Link>
            </div>
        </section>
    )
}