import Link from "next/link"

export default function CardExecutive ({ item }) {

    const image = item?.image ? item.image : '/directivos.png'

    return (
        <article className="w-full bg-white rounded-md border-thin">
            <div className="w-full">
                <img src={image} alt={`${item.name} | ${item.post} | Cámara de Comercio de Jauja`} />
            </div>
            <div className="p-sm flex flex-col gap-sm">
                <p className="text-secondary uppercase font-medium">{item.post}</p>
                <h3 className="text-primary text-2xl lg:text-3xl">{item.name}</h3>
                <p className="text-sm text-muted">{item.about}</p>
                <Link href={`/about/executives/${item.code}`} className="btn btn-primary">Ver perfil completo</Link>
            </div>
        </article>
    )
}