import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import CardBenefits from "@/components/ui/CardBenefits";
import { page } from "@/db/page";
import Image from "next/image";
import Link from "next/link";

export default function HomePage () {
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
                                <Link href={'/'} className="btn btn-soft">Conoce nuestros servicios</Link>
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
                <section className="w-full py-xl" id="events">
                    <div className="w m-auto flex flex-col gap-md" style={{"--w": "90%"}}>
                        <div className="text-center">
                            <h2 className="text-2xl lg:text-4xl">{page.events.title}</h2>
                            <p className="text-muted">{page.events.subtext}</p>
                        </div>
                        <ul className="w-full flex items-center gap-sm scroll-x">
                            <button className={`filter active`}>Todos</button>
                            {page.events.categories.map((category, idx) => (
                                <button key={idx} className={`filter`}>{category}</button>
                            ))}
                        </ul>
                        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md">
                            {page.events.items.map((item) => (
                                <article key={item.id} className="w-full bg-white rounded-md border-thin shadow" style={{overflow: "hidden"}}>
                                    <div className="relative w-full h bg-background" style={{"--h": "180px"}}>
                                        <span className="absolute inline-flex bg-primary text-white p-xs rounded-sm" style={{top: "10px", left: "10px"}}>{item.category}</span>
                                    </div>
                                    <div className="w-full flex flex-col gap-sm p-sm">
                                        <div className="w-full flex items-center justify-between">
                                            <p>{item.date}</p>
                                            <p>{item.hours}</p>
                                        </div>
                                        <h3 className="text-lg lg:text-xl">{item.title}</h3>
                                        <p className="text-xs text-muted">{item.content}</p>
                                        <div className="w-full flex gap-sm">
                                            <button className="btn btn-primary">Inscribirme</button>
                                            <button className="btn btn-secondary">Detalles</button>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="w-full py-xl bg-white" id="about">
                    <div className="w m-auto flex flex-col gap-md" style={{"--w": "90%"}}>
                        <div className="w-full flex flex-col gap-md">
                            <div className="text-center">
                                <h2 className="text-2xl lg:text-4xl">{page.about.executives.title}</h2>
                                <p className="text-muted">{page.about.executives.subtext}</p>
                            </div>
                            <div className="w-full flex gap-md scroll-x">
                                {page.about.executives.items.map((item) => (
                                    <article key={item.id} className="w-full bg-white rounded-md border-thin">
                                        <div className="w-full">
                                            <img src="/directivos.png" />
                                        </div>
                                        <div className="p-sm flex flex-col gap-sm">
                                            <p className="text-secondary uppercase font-medium">{item.post}</p>
                                            <h3 className="text-primary text-2xl lg:text-3xl">{item.name}</h3>
                                            <p className="text-sm text-muted">{item.about}</p>
                                            <Link href={'/'} className="btn btn-primary">Ver perfil completo</Link>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
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
            </main>
        </>
    )
}