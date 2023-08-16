'use client'

import { useEffect } from "react";
import { useQuery } from "react-query";
import { useRouter } from "next/navigation";
import { getGenres } from "@/services/api";
import { Movies } from "@/components/Movies";
import { BackdropLoading } from "@/components/BackdropLoading";
import { Header } from "@/components/Header";

export interface GenreProps {
    id: number
    name: string
}


export default function Dashboard() {

    const router = useRouter()

    useEffect(() => {
        if(localStorage.getItem('@token') === null && localStorage.key(0 || 1) !== '@token') {
            router.push('/login')
        }

    }, [])

    const { data: genres, isLoading } = useQuery<GenreProps[]>('genres', getGenres)

    return (
        <>
            {
            isLoading 
            ? <BackdropLoading /> 
            :
            <>
                <Header />
                <main className="w-full container mx-auto my-8">
                    <div className="w-full flex flex-col gap-8">
                        {
                            genres &&
                            genres.map((genre, index) => (
                                <Movies 
                                key={index} 
                                id={genre.id}
                                name={genre.name}
                                />
                                ))
                        }
                    </div>
                </main>
                <footer className="p-4 bg-emerald-500 flex flex-col gap-2 items-center justify-center">
                    <h4 className="font-bold text-2xl">&lt;devflix&gt;</h4>
                    <p className="text-xs">Desenvolvido por Wllysses Tavares</p>
                </footer>
            </>
            }
        </>
    )
}
