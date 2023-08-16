import { Accordion } from "../Accordion";

export function FAQ() {

    return (
        <section id="faq" className="min-h-[60vh] flex flex-col gap-8 items-center justify-center">
            <h2 className="font-bold text-3xl" data-aos="fade-up">Perguntas Frequentes</h2>
            <div className="container mx-auto" data-aos="fade-down">
                <ul className="w-full flex flex-col gap-1 p-4">
                    <Accordion />
                    <Accordion />
                    <Accordion />
                    <Accordion />
                </ul>
            </div>
        </section>
    )
}
