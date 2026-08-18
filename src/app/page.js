'use client';

import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Community from "@/components/sections/Community";
import Contact from "@/components/sections/Contact";
import Events from "@/components/sections/Events";
import Executives from "@/components/sections/Executives";
import CardBenefits from "@/components/ui/CardBenefits";
import { page } from "@/db/page";
import Image from "next/image";
import Link from "next/link";

export default function HomePage () {

    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    return (
        <>
            <Header/>
            <main className="w-full">
                <section className="relative w-full h lg:h" style={{"--h": "calc(100dvh - 60px)", "--h-lg": "calc(100dvh - 80px)"}}>
                    <div className="w h-full flex items-center m-auto" style={{"--w": "90%"}}>
                        <div className="w flex flex-col gap-md lg:w" style={{"--w": "100%", "--w-lg": "60%"}}>
                            <p className="text-secondary uppercase font-medium">{page.hero.eyebrow}</p>
                            <h1 className="text-3xl text-white lg:text-6xl">{page.hero.title}</h1>
                            <p className="text-white">{page.hero.subtext}</p>
                            <div className="flex gap-md flex-col lg:flex-row">
                                <Link href={'/'} className="btn btn-primary">Hazte socio</Link>
                                <Link href={'/#benefits'} className="btn btn-soft">Conoce nuestros beneficios</Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset w-full h-full bg-hero" style={{"zIndex": "-1"}}/>
                    <Image src={'/bg-hero.webp'} style={{"zIndex": "-2"}} fill alt="Plaza" />
                </section>
                <section className="relative w-full bg-white py-xl" id="benefits">
                    <div className="absolute w-full" style={{top: "-40px"}}>
                        <div className="w h-full bg-white grid md:grid-cols-2 lg:grid-cols-4 rounded-lg m-auto p-md shadow" style={{"--w": "80%"}}>
                            {page.numbers.map((item, idx) => (
                                <div key={idx} className="w-full text-center">
                                    <h3 className="text-secondary text-5xl">{item.value}</h3>
                                    <p className="text-primary uppercase font-medium text-sm">{item.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w m-auto flex flex-col gap-lg pt-2xl" style={{"--w": "90%"}}>
                        <div className="w-full text-center">
                            <h2 className="text-2xl lg:text-4xl">{page.benefits.title}</h2>
                            <p className="text-muted">{page.benefits.subtext}</p>
                        </div>
                        <div className="w-full grid grid-cols-1 gap-md md:grid-cols-2 lg:grid-cols-4">
                            {page.benefits.items.map((item, idx) => (
                                <CardBenefits key={idx} icon={item.icon} title={item.title} text={item.content} />
                            ))}
                        </div>
                    </div>
                </section>
                <Community/>
                <Events/>
                <section className="w-full py-xl" id="about">
                    <div className="w m-auto flex flex-col gap-md" style={{"--w": "90%"}}>
                        <Executives/>
                        <div className="w-full flex flex-col gap-md border-thin p-md bg-background rounded-md">
                            <div className="text-center">
                                <h2 className="text-2xl lg:text-4xl">{page.about.directions.title}</h2>
                                <p className="text-muted">{page.about.directions.subtext}</p>
                            </div>
                            <div className="w-full grid grid-cols-2 gap-md md:grid-cols-3 lg:grid-cols-4">
                                {page.about.directions.items.map((item) => (
                                    <Link key={item.id} href={'/'} className="flex w-full flex-col gap-sm items-center">
                                        <div className="square bg-primary rounded-full center" style={{"--sq": "80px"}}></div>
                                        <h3 className="text-center">{item.label}</h3>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="w-full flex flex-col items-center gap-md bg-primary text-center text-white rounded-md p-md">
                            <h2 className="text-2xl lg:text-4xl">{page.about.know.title}</h2>
                            <p className="text-muted">{page.about.know.subtext}</p>
                            <Link href={'/'} className="btn btn-primary">{page.about.know.link}</Link>
                        </div>
                    </div>
                </section>
                <section className="w-full py-xl bg-white">
                    <div className="w m-auto flex flex-col gap-md" style={{"--w": "90%"}}>
                        <div className="text-center">
                            <p>{page.complaints.eyebrow}</p>
                            <h2 className="text-2xl lg:text-4xl">{page.complaints.title}</h2>
                            <p className="text-muted">{page.complaints.subtext}</p>
                        </div>
                    </div>
                </section>
                <section className="w-full py-xl">
                    <div className="w m-auto flex flex-col gap-md" style={{"--w": "90%"}}>
                        <div className="text-center">
                            <h2 className="text-2xl lg:text-4xl">{page.validator.title}</h2>
                            <p className="text-muted">{page.validator.subtext}</p>
                        </div>
                    </div>
                </section>
                <Contact/>
            </main>
            <Footer/>
        </>
    )
}