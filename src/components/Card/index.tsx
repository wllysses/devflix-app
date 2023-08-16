import { PlanProps } from "../Prices"

interface CardProps {
    data: PlanProps
}

export function Card({ data }: CardProps) {
    return (
        <div className="max-w-sm w-full bg-white px-6 py-12 rounded shadow-lg flex flex-col gap-8 text-zinc-800 max-lg:max-w-full" data-aos="fade-down">
            <>
                {
                    data.plan === 'Standard' 
                    ? 
                    <div className="flex items-center justify-between">
                        <span>{data.plan}</span>
                        <span className="bg-emerald-500 p-1 rounded text-white">Melhor oferta</span>
                    </div> 
                    
                    : <span>{data.plan}</span>
                }
            </>
            <h2 className="font-bold text-3xl">R${data.price}/mês</h2>
            <ul className="flex flex-col gap-2 text-sm">
                <li>Qualidade {data.benefits.quality}</li>
                <li>{data.benefits.chanels} títulos disponíveis</li>
                <li>{data.benefits.screens} tela</li>
                <li>{data.benefits.adverts}</li>
            </ul>
            <button className="bg-emerald-500 hover:bg-emerald-400 w-full rounded p-3 font-bold text-white">Contratar</button>
        </div>
    )
}
