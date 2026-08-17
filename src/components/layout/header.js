import { page } from "@/db/page";
import { IconMenu } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function Header () {
    return (
        <header className="sticky w-full h bg-white z-header lg:h" style={{"--h": "60px", "--h-lg": "80px"}}>
            <div className="w m-auto h-full flex items-center justify-between" style={{"--w": "90%"}}>
                <Link href={'/'} className="relative block w h lg:w lg:h" style={{"--w": "120px", "--h": "45px", "--w-lg": "180px", "--h-lg": "50px"}}><Image src={'/LOGO - PRIMARY.svg'} alt="Logo" fill /></Link>
                <nav className="h-full">
                    <ul className="none lg:flex h-full items-center gap-md">
                        {page.navs.map((item, idx) => (
                            <li key={idx}><Link href={item.url} className="btn-link">{item.txt}</Link></li>
                        ))}
                    </ul>
                </nav>
                <div className="flex">
                    <Link href={'/'} target="_blank" className="btn btn-primary btn-sm rounded-full lg:btn-lg">Inscribirse</Link>
                    <button className="none btn-icon"><IconMenu/></button>
                </div>
            </div>
        </header>
    )
}