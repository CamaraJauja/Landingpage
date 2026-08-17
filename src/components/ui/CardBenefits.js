export default function CardBenefits ({ icon, title, text }) {
    return (
        <article className="w-full bg-white shadow elevated transition flex flex-col gap-4 justify-between p-md border-thin rounded-md">
            <div className="square bg-secondary-20 rounded-md" style={{"--sq": "60px"}}>{icon}</div>
            <div>
                <h3 className="text-xl">{title}</h3>
                <p className="text-muted text-xs">{text}</p>
            </div>
        </article>
    )
}