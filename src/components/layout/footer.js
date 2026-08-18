import { page } from "@/db/page";
import Link from "next/link";

export default function Footer () {

    const year = new Date().getFullYear();

    return (
        <footer className="w-full bg-primary py-lg text-white">
            <div className="w m-auto flex justify-between" style={{"--w": "90%"}}>
                <div></div>
                <div className="flex flex-col gap-4 lg:flex-row">
                    <div className="w-full">
                        <h3 className="text-white">Navegación</h3>
                        <ul className="flex flex-col gap-4">
                            {page.navs.map((nav, idx) => (
                                <li key={idx}><Link href={nav.url} className="text-white">{nav.txt}</Link></li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full">
                        <h3 className="text-white">Institucional</h3>
                        <ul className="flex flex-col gap-4">
                            {page.navs.map((nav, idx) => (
                                <li key={idx}><Link href={nav.url} className="text-white">{nav.txt}</Link></li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full">
                        <h3 className="text-white">Contacto</h3>
                        <ul className="flex flex-col gap-4">
                            {page.navs.map((nav, idx) => (
                                <li key={idx}><Link href={nav.url} className="text-white">{nav.txt}</Link></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="w m-auto flex flex-col items-center justify-between lg:flex-row" style={{"--w": "90%"}}>
                <p>© {year} Cámara de Comercio de Jauja. Todos los derechos reservados.</p>
                <p>Diseñado para el fortalecimiento empresarial jaujino.</p>
            </div>
        </footer>
    )
}