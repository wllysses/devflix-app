export function Hero() {
    return (
        <section className="min-h-[90vh]">
            <div className="w-full h-[90vh] flex flex-col gap-8 p-2 items-center justify-center text-center animate-fade-up">
                <h2 className="text-6xl font-bold">Suas séries e filmes preferidos <br /> <span className="text-emerald-500">em um só lugar.</span></h2>
                <p className="text-2xl">Conheça nossos planos e tenha acesso a todo conteúdo <br /> de forma exclusiva em 4K.</p>
                <button className="bg-emerald-500 rounded p-4">Quero conhecer</button>
            </div>
        </section>
    )
}