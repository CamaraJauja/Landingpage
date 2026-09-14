import { page } from "@/db/page";
import Image from "next/image";
import Link from "next/link";

export default function Footer () {

    const year = new Date().getFullYear();

    return (
        <footer className="w-full bg-primary-dark text-white">
            <div className="w m-auto flex flex-col lg:flex-row py-md gap-md" style={{"--w": "90%"}}>
                <div className="w" style={{"--w": "35%"}}>
                    <Image src={'/LOGO - WHITE.svg'} alt="Logo de la Cámara de Comercio de Jauja" width={180} height={100}/>
                    <h3 className="text-secondary uppercase font-medium mb-md">La Primera Capital del Perú</h3>
                    <p className="text-xs text-white leading-relaxed">Impulsamos el crecimiento empresarial y fortalecemos el sector privado de nuestra provincia.</p>
                </div>
                <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-md">
                    <div className="w-full px-md">
                        <h3 className="text-white text-sm mb-md">Institucional</h3>
                        <ul className="flex flex-col gap-sm">
                            <li><Link className="text-xs text-white-20" href={'/'}>Nosotros</Link></li>
                            <li><Link className="text-xs text-white-20" href={'/'}>Consejo Directivo</Link></li>
                            <li><Link className="text-xs text-white-20" href={'/'}>Direcciones</Link></li>
                            <li><Link className="text-xs text-white-20" href={'/'}>Nuestros aliados</Link></li>
                        </ul>
                    </div>
                    <div className="w-full px-md">
                        <h3 className="text-white text-sm mb-md">Empresarial</h3>
                        <ul className="flex flex-col gap-sm">
                            <li><Link className="text-xs text-white-20" href={'/'}>Beneficios</Link></li>
                            <li><Link className="text-xs text-white-20" href={'/'}>Hazte socio</Link></li>
                            <li><Link className="text-xs text-white-20" href={'/'}>Eventos</Link></li>
                            <li><Link className="text-xs text-white-20" href={'/'}>Formación empresarial</Link></li>
                        </ul>
                    </div>
                    <div className="w-full px-md">
                        <h3 className="text-white text-sm mb-md">Atención</h3>
                        <ul className="flex flex-col gap-sm">
                            <li><Link className="text-xs text-white-20" href={'/'}>Más información</Link></li>
                            <li><Link className="text-xs text-white-20" href={'/'}>Consultas</Link></li>
                            <li><Link className="text-xs text-white-20" href={'/'}>Coorganizaciones</Link></li>
                            <li><Link className="text-xs text-white-20" href={'/'}>Canal de denuncias</Link></li>
                        </ul>
                    </div>
                    <div className="w-full px-md">
                        <h3 className="text-white text-sm mb-md">Contacto</h3>
                        <ul className="flex flex-col gap-sm">
                            <li className="text-xs text-white-20">Jauja, Junín, Perú</li>
                            <li className="text-xs text-white-20">+51 977 498 134</li>
                            <li className="text-xs text-white-20">contacto@camaradejauja.org.pe</li>
                            <li className="text-xs text-white-20 leading-snug">Av. Clodoaldo Espinoza Bravo - Terrapuerto Hatun Xauxa - 2do nivel</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="w m-auto flex flex-col items-center border-t py-md justify-between lg:flex-row" style={{"--w": "90%"}}>
                <p className="text-xs">© {year} Cámara de Comercio de Jauja. Todos los derechos reservados.</p>
                <p className="text-xs"><Link href={'/'}>Política de privacidad</Link> · <Link href={'/'}>Términos y condiciones</Link></p>
                <p className="text-xs"><Link href={'/'}>Facebook</Link> · <Link href={'/'}>Instagram</Link> · <Link href={'/'}>LinkedIn</Link></p>
            </div>
        </footer>
    )
}