import { Card } from "../Card";

interface Benefit {
    quality: string
    chanels: number
    screens: number
    adverts: string
}

export interface PlanProps {
    plan: string
    price: number
    benefits: Benefit
}

export function Prices() {

    const plans = [
        { id: 1, plan: 'Basic', price: 24.99, benefits: { quality: 'HD', chanels: 100, screens: 1, adverts: 'Sem propagandas' } },
        { id: 2, plan: 'Standard', price: 34.99, benefits: { quality: 'Full HD', chanels: 500, screens: 3, adverts: 'Sem propagandas' }},
        { id: 3, plan: 'Premium', price: 54.90, benefits: { quality: '4K', chanels: 900, screens: 5, adverts: 'Sem propagandas' } }
    ]
    
    return (
        <section id="prices" className="bg-emerald-500 min-h-[60vh] flex flex-col items-center justify-center gap-8 max-xl:py-8">
            <h2 className="font-bold text-3xl" data-aos="fade-up">Conheça nossas ofertas</h2>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-center flex-wrap gap-8">
                    {
                        plans.map((plan, index) => (
                            <Card
                                key={index}
                                data={plan}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}