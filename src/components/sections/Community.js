'use client';

import { useDB } from "@/context/DBContext";
import { page } from "@/db/page";
import Image from "next/image";
import Link from "next/link";

export default function Community () {

    const { community } = useDB();
    const { data = [], loading } = community;

    return (
        <section className="w-full py-xl">
            <div className="w m-auto flex flex-col items-center gap-md" style={{"--w": "90%"}}>
                <div className="text-center">
                    <h2 className="text-2xl lg:text-4xl">{page.community.title}</h2>
                    <p className="text-muted">{page.community.subtext}</p>
                </div>
                <ul className="w-full flex gap-sm scroll-x">
                    {loading ? (
                        <p className="text-center text-muted text-2xl">Cargando...</p>
                    ) : (
                        data.length > 0 ? (
                            data.map((item) => (
                                <li key={item.id} className="center w h rounded-md border-thin bg-white overflow-hidden" style={{"--w": "250px", "--mnw": "250px", "--h": "250px"}} title={item.nombre_comercial}>
                                    <Image src={item.logo || '/placeholder.png'} width={250} height={250} alt={`Logo de ${item.nombre_comercial}`} loading="eager" />
                                </li>
                            ))
                        ) : (
                            <p className="text-center text-muted text-2xl">No hay empresas ahora</p>
                        )
                    )}
                </ul>
                <Link href={'/'} className="btn btn-primary">Quiero formar parte</Link>
            </div>
        </section>
    )
}