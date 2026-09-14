'use client';
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { useDB } from "@/context/DBContext";
import { page } from "@/db/page";
import { IconClock } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage () {

    const { executives, community } = useDB();

    console.log(community);

    return (
        <>
            <Header/>
            <main className="w-full">
                <section className="w-full h flex lg:h" style={{"--h": "calc(100dvh - 60px)", "--h-lg": "calc(100dvh - 80px)"}}>
                    <div className="w center h-full bg-primary" style={{"--w": "60%"}}>
                        <div className="w m-auto flex flex-col gap-md" style={{"--w": "90%"}}>
                            <p className="text-secondary">{page.hero.eyebrow}</p>
                            <h1 className="text-6xl font-medium text-white">Impulsamos el <span className="block font-italic">crecimiento</span> empresarial de Jauja</h1>
                            <p className="text-lg text-gray">{page.hero.subtext}</p>
                            <div>
                                <Link href={'/#register'} className="btn btn-primary">Hazte socio</Link>
                                <Link href={'/#'} className="btn btn-outline">Conoce nuestros beneficios</Link>
                            </div>
                        </div>
                    </div>
                    <div className="relative w h-full" style={{"--w": "40%"}}>
                        <Image src={'/bg-hero.webp'} style={{objectFit: 'cover'}} alt="Plaza de Armas de Jauja" fill loading="eager"/>
                    </div>
                </section>
                <section className="w-full border-b">
                    <div className="w m-auto grid grid-cols-2 lg:grid-cols-4" style={{"--w": "90%"}}>
                        <div className="w-full p-md text-center border-r">
                            <h3 className="text-primary text-4xl font-medium">+{community.data.length}</h3>
                            <p className="text-sm text-gray">Empresas asociadas</p>
                        </div>
                        <div className="w-full p-md text-center border-r">
                            <h3 className="text-primary text-4xl font-medium">+20</h3>
                            <p className="text-sm text-gray">Actividades realizadas</p>
                        </div>
                        <div className="w-full p-md text-center border-r">
                            <h3 className="text-primary text-4xl font-medium">+10</h3>
                            <p className="text-sm text-gray">Alianzas estratégicas</p>
                        </div>
                        <div className="w-full p-md text-center">
                            <h3 className="text-primary text-4xl font-medium">+1</h3>
                            <p className="text-sm text-gray">Año fortaleciendo el sector</p>
                        </div>
                    </div>
                </section>
                <section className="w-full py-lg">
                    <div className="w m-auto flex gap-md flex-col lg:flex-row" style={{"--w": "90%"}}>
                        <div className="w-full flex flex-col gap-sm">
                            <p className="text-secondary font-medium">Ser parte transforma</p>
                            <h2 className="text-6xl text-primary">Crece junto a <span className="block font-italic font-medium text-secondary">la Cámara</span></h2>
                            <p className="text-gray text-md leading-relaxed">Conecta, aprende, representa y haz crecer tu empresa junto a una comunidad que apuesta por el futuro de Jauja.</p>
                            <Link href={'/'} className="btn btn-secondary">Conoce todos los beneficios</Link>
                        </div>
                        <div className="w-full">
                            <div className="w-full grid grid-cols-2">
                                {page.benefits.items.map((item, idx) => (
                                    <div key={idx} className="w-full p-md border">
                                        <div className="w-full flex items-center justify-between mb-md">
                                            <p className="text-primary font-medium">0{idx + 1}</p>
                                            <span>{item.icon}</span>
                                        </div>
                                        <div>
                                            <h3 className="mb-sm font-medium text-lg text-primary">{item.title}</h3>
                                            <p className="text-sm text-gray leading-snug">{item.content}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-lg flex flex-col gap-md bg-secondary-20">
                    <div className="w m-auto flex items-end justify-between" style={{"--w": "90%"}}>
                        <div>
                            <p className="text-primary font-bold uppercase">Nuestra comunidad empresarial</p>
                            <h2 className="text-6xl leading-snug">Empresas que crecen <span className="block font-italic font-bold text-secondary">con nosotros</span></h2>
                        </div>
                        <p className="w text-gray text-right" style={{"--mxw": "25%"}}>Una comunidad de empresarios que apuesta por el desarrollo de Jauja.</p>
                    </div>
                    <ul className="w m-auto grid grid-cols-2 lg:grid-cols-5 gap-md" style={{"--w": "90%"}}>
                        {community.data.map((item) => (
                            <li key={item.id} className="relative w center border bg-white h rounded-md" title={`Empresa - ${item.nombre_comercial}`} style={{"--w": "250px", "--mnw": "250px", "--h": "250px", overflow: 'hidden'}}>
                                <Image src={item.logo ? item.logo : '/placeholder.png'} style={{objectFit: 'cover'}} alt={`Logo de ${item.nombre_comercial}`} fill loading="lazy" />
                            </li>
                        ))}
                    </ul>
                    <div className="w m-auto" style={{"--w": "90%"}}>
                        <Link href={'/'} className="btn btn-primary">Conoce a nuestros asociados</Link>
                    </div>
                </section>
                <section className="w-full py-lg">
                    <div className="w m-auto flex flex-col gap-md" style={{"--w": "90%"}}>
                        <div className="w-full flex items-end justify-between">
                            <div>
                                <p className="text-primary font-bold uppercase">Agenda empresarial</p>
                                <h2 className="text-6xl leading-tight">Eventos que generan <span className="block font-italic font-bold text-secondary">oportunidades</span></h2>
                            </div>
                            <p className="w text-gray text-right" style={{"--mxw": "25%"}}>Capacitación, networking y encuentros para conectar y hacer negocios.</p>
                        </div>
                        <ul className="w-full flex border-b">
                            <li className={`py-sm px-md text-nowrap text-sm pointer`}>Todos</li>
                            {page.events.categories.map((event, idx) => (
                                <li key={idx} className="py-sm px-md text-nowrap text-sm">{event}</li>
                            ))}
                        </ul>
                        <ul>
                            <article className="bg-white border p-md flex">
                                <div className="border-r px-md">
                                    <h4 className="text-4xl text-primary">18</h4>
                                    <p className="uppercase text-sm">OCT - 2026</p>
                                </div>
                                <div className="w-full px-md">
                                    <p className="uppercase text-secondary font-medium">Networking</p>
                                    <h3 className="text-3xl font-medium mb-sm">Encuentro de Líderes Empresariales de Jauja</h3>
                                    <p className="text-sm text-gray mb-md">Un espacio para conectar empresarios, compartir ideas y generar nuevas alianzas.</p>
                                    <p className="flex items-center gap-xs text-gray"><IconClock strokeWidth={1.2} size={16}/> 09:00 a.m. — 1:00 p.m. | Auditorio de la Cámara</p>
                                </div>
                                <div className="px-md border-l flex flex-col gap-sm justify-center">
                                    <Link href={'/'} className="btn btn-block btn-secondary">Ver evento</Link>
                                    <Link href={'/'} className="btn btn-block btn-primary">Inscribirme</Link>
                                </div>
                            </article>
                        </ul>
                    </div>
                </section>
                <section className="w-full py-xl bg-primary">
                    <div className="w m-auto" style={{"--w": "90%"}}>
                        <div className="w-full flex items-end justify-between">
                            <div>
                                <p className="text-secondary font-bold uppercase">Institucional</p>
                                <h2 className="text-6xl leading-snug text-white">Nuestro Consejo <span className="font-italic text-secondary">Directivo</span></h2>
                            </div>
                            <p className="w text-gray text-right" style={{"--mxw": "25%"}}>Lideramos la Cámara con visión, representación y compromiso empresarial.</p>
                        </div>
                        <div className="w-full">
                            <div className="w-full grid grid-cols-2 gap-md lg:grid-cols-4">
                                {executives.executives.map((person, idx) => (
                                    <div key={person.id}>
                                        <div className="relative w-full bg-white h rounded-md" style={{"--h": "250px"}}>
                                            <p className="absolute text-3xl" style={{bottom: '10px', left: '10px'}}>0{idx+1}</p>
                                        </div>
                                        <div className="flex flex-col gap-xs py-sm px-sm">
                                            <p className="uppercase text-secondary font-medium">{person.post}</p>
                                            <h3 className="text-xl font-medium text-white">{person.name}</h3>
                                            <p className="text-gray">{person.post || person.about}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button className="btn btn-primary">Ver todos</button>
                        </div>
                        <div className="w-full">
                            <ul>
                                <li className="w-full border-b py-md px-sm">
                                    <span>Direcciones</span>
                                </li>
                                <li className="w-full grid grid-cols-2 border-b py-md px-sm">
                                    {page.about.directions.items.map((item) => (
                                        <span key={item.id}>{item.label}</span>
                                    ))}
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="w-full py-xl">
                    <div className="w m-auto flex gap-md" style={{"--w": "90%"}}>
                        <div>
                            <p className="text-primary font-bold uppercase">Transparencia y confianza</p>
                            <h2 className="text-6xl leading-thing">Verifica a <span className="block font-italic font-bold text-secondary">nuestros socios</span></h2>
                            <p className="w text-gray mb-md" style={{"--mxw": "60%"}}>Comprueba la autenticidad de un código de socio y verifica su condición en la Cámara.</p>
                            <form>
                                <div>
                                    <label>Código de socio</label>
                                    <div className="flex">
                                        <input type="number" inputMode="numeric" placeholder="CCJ-000123" />
                                        <button>Validar código</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div></div>
                    </div>
                </section>
                <section className="w-full py-xl bg-secondary">
                    <div className="w m-auto flex gap-md" style={{"--w": "90%"}}>
                        <div className="w-full flex flex-col gap-sm">
                            <h2 className="text-6xl leading-thing">Canal de denuncias <span className="block font-italic font-bold">al sector empresarial</span></h2>
                            <p className="w text-sm" style={{"--mxw": "60%"}}>Comunica de forma segura situaciones que afecten los derechos o intereses de tu empresa.</p>
                            <Link href={'/'} className="btn btn-primary-outline">Presentar una denuncia</Link>
                        </div>
                        <div className="w border-l px-md" style={{"--w": "60%"}}>
                            <h3 className="text-xl font-medium mb-md text-white">Tu información será tratada con responsabilidad y confidencialidad.</h3>
                            <ul className="flex flex-col gap-sm pl-sm">
                                <li className="text-sm text-white">Abuso o trato indebido</li>
                                <li className="text-sm text-white">Barreras a la actividad empresarial</li>
                                <li className="text-sm text-white">Prácticas que perjudiquen al sector</li>
                                <li className="text-sm text-white">Situaciones que requieran intervención</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="w-full py-xl">
                    <div className="w m-auto flex flex-col gap-lg" style={{"--w": "90%"}}>
                        <div className="w-full flex items-end justify-between">
                            <div>
                                <p className="text-primary font-bold uppercase">Estamos para orientarte</p>
                                <h2 className="text-6xl leading-thing">¿Necesitas más <span className="font-italic font-bold text-secondary">información</span>?</h2>
                            </div>
                            <p className="w text-right text-gray mb-md" style={{"--mxw": "40%"}}>Déjanos tu consulta, duda o propuesta.</p>
                        </div>
                        <div className="w-full flex gap-lg">
                            <ul className="w-full flex flex-col gap-md">
                                <li className="w-full border-b border-t py-md">
                                    <p className="uppercase font-medium text-secondary mb-md">01</p>
                                    <h3 className="text-2xl font-medium text-primary md-sm">Consultas y dudas</h3>
                                    <p className="text-gray text-xs">Resolvemos tus consultas sobre afiliación, servicios y beneficios.</p>
                                </li>
                                <li className="w-full border-b border-t py-md">
                                    <p className="uppercase font-medium text-secondary mb-md">02</p>
                                    <h3 className="text-2xl font-medium text-primary md-sm">Coorganizaciones</h3>
                                    <p className="text-gray text-xs">Propón eventos, ferias o capacitaciones junto a la Cámara.</p>
                                </li>
                                <li className="w-full border-b border-t py-md">
                                    <p className="uppercase font-medium text-secondary mb-md">03</p>
                                    <h3 className="text-2xl font-medium text-primary md-sm">Alianzas</h3>
                                    <p className="text-gray text-xs">Construyamos acuerdos para impulsar el desarrollo empresarial.</p>
                                </li>
                            </ul>
                            <div className="w-full">
                                <form className="w-full flex flex-col gap-md">
                                    <div className="w-full flex gap-md items-center justify-between">
                                        <div className="w-full">
                                            <label className="text-xs text-gray block mb-xs">Nombre y apellidos</label>
                                            <input type="text" placeholder="Nombre y apellidos" />
                                        </div>
                                        <div className="w-full">
                                            <label className="text-xs text-gray block mb-xs">Empresa / Institución</label>
                                            <input type="text" placeholder="Empresa / Institución" />
                                        </div>
                                    </div>
                                    <div className="w-full flex gap-md items-center justify-between">
                                        <div className="w-full">
                                            <label className="text-xs text-gray block mb-xs">Correo electrónico</label>
                                            <input type="text" placeholder="Correo electrónico" />
                                        </div>
                                        <div className="w-full">
                                            <label className="text-xs text-gray block mb-xs">Teléfono / WhatsApp</label>
                                            <input type="text" placeholder="Teléfono / WhatsApp" />
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <label className="text-xs text-gray block mb-xs">Tipo de solicitud</label>
                                        <select>
                                            <option value={''}>Seleccionar tipo de solicitud</option>
                                            <option>Consulta o duda</option>
                                            <option>Coorganización</option>
                                            <option>Alianza institucional</option>
                                            <option>Otro</option>
                                        </select>
                                    </div>
                                    <div className="w-full">
                                        <label className="text-xs text-gray block mb-xs">Mensaje</label>
                                        <textarea placeholder="Cuéntanos cómo podemos ayudarte." />
                                    </div>
                                    <div className="w-full">
                                        <button className="btn btn-block btn-primary">Enviar solicitud</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-xl bg-primary">
                    <div className="w m-auto flex items-center justify-between gap-lg" style={{"--w": "90%"}}>
                        <div className="w-full">
                            <p className="text-secondary font-bold uppercase">El siguiente paso es tuyo</p>
                            <h2 className="text-6xl leading-thing text-white">Hazte <span className="font-italic">socio</span></h2>
                            <p className="text-white text-xs mb-md">Forma parte de la Cámara y conecta tu empresa con nuevas oportunidades.</p>
                            <ul className="flex gap-sm">
                                <li className="px-sm py-xs text-xs text-white border rounded-full">Representación</li>
                                <li className="px-sm py-xs text-xs text-white border rounded-full">Capacitación</li>
                                <li className="px-sm py-xs text-xs text-white border rounded-full">Networking</li>
                                <li className="px-sm py-xs text-xs text-white border rounded-full">Promoción</li>
                                <li className="px-sm py-xs text-xs text-white border rounded-full">Eventos</li>
                                <li className="px-sm py-xs text-xs text-white border rounded-full">Convenios</li>
                            </ul>
                        </div>
                        <div className="w flex flex-col gap-sm justify-center" style={{"--w": "30%"}}>
                            <Link className="btn btn-primary" href={'/'}>Quiero ser socio</Link>
                            <Link className="btn btn-secondary" href={'https://wa.me/51977498134/?text=Hola+quiero+ser+socio'} target="_blank">Consultar por WhatsApp</Link>
                        </div>
                    </div>
                </section>
                <section className="w-full py-xl">
                    <div className="w m-auto" style={{"--w": "90%"}}>
                        <div className="w m-auto flex flex-col text-center items-center justify-center" style={{"--w": "60%"}}>
                            <p className="text-secondary font-bold uppercase md-sm">Construyamos futuro</p>
                            <h2 className="text-6xl leading-thing font-medium text-primary">Juntos impulsamos el desarrollo empresarial de <span className="block font-italic">Jauja</span></h2>
                            <p className="text-gray leading-relaxed mb-md">Sé parte de una comunidad que conecta empresas, genera oportunidades y fortalece nuestro sector privado.</p>
                            <div className="flex gap-sm">
                                <Link href={'/'} className="btn btn-primary">Hazte socio</Link>
                                <Link href={'/'} className="btn btn-outline">Contáctanos</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}