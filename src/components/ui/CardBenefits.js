export default function CardBenefits ({ icon: Icon, title, text }) {
    return (
        <article className="card card-interactive w-full h-full flex flex-col justify-between gap-md rounded-xl border border-slate-200 bg-white p-md shadow-sm" style={{ boxShadow: '0 12px 30px rgba(0, 48, 89, 0.06)' }}>
            <div className="flex items-center justify-between">
                <div className="center rounded-xl bg-secondary-20" style={{ width: '62px', height: '62px', color: 'var(--color-primary)' }}>
                    {Icon ? <Icon size={28} strokeWidth={1.8} /> : null}
                </div>
                <span className="inline-flex items-center justify-center rounded-full border border-slate-200 px-xs py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary" style={{ background: 'rgba(0, 48, 89, 0.04)', letterSpacing: '0.16em' }}>
                    CCJ
                </span>
            </div>
            <div className="flex flex-col gap-sm">
                <h3 className="text-xl font-semibold text-primary">{title}</h3>
                <p className="text-sm leading-6 text-muted">{text}</p>
            </div>
        </article>
    )
}