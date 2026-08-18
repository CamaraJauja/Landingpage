import { page } from "@/db/page";
import FormContact from "../ui/FormContact";

export default function Contact () {
    return (
        <section className="w-full py-xl bg-white" id="contact">
            <div className="w m-auto flex flex-col gap-md" style={{"--w": "90%"}}>
                <div className="text-center">
                    <h2 className="text-2xl lg:text-4xl">{page.contact.title}</h2>
                    <p className="text-muted">{page.contact.subtext}</p>
                </div>
                <div className="w-full flex flex-col gap-lg lg:flex-row">
                    <div className="w-full">
                        <h3 className="text-xl mb-md">{page.contact.types.title}</h3>
                        <ul className="w-full flex flex-col gap-md">
                            {page.contact.types.items.map((item) => (
                                <li key={item.id} className="w-full flex gap-xs border-thin bg-white rounded-md p-xs">
                                    <div className="square bg-background rounded-full" style={{"--sq": "60px"}}>{item.icon}</div>
                                    <div>
                                        <h4>{item.title}</h4>
                                        <p className="text-xs text-muted">{item.content}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <FormContact/>
                </div>
            </div>
        </section>
    )
}