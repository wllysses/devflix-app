'use client'

import { Header } from "@/components/Header";
import { useStore } from "@/store/store";
import { MdRemoveCircle } from "react-icons/md";

export default function Favorites() {

    const { favorites, removeToFavorite } = useStore()

    return (
        <>
            <Header />
            <main className="container mx-auto my-8">
                <h2 className="font-bold text-2xl">Favoritos</h2>
                <div className="mt-8 flex items-center flex-wrap gap-4">
                    { !favorites.length && <span>Sem favoritos.</span> }
                    {
                        favorites &&
                        favorites.map((favorite) => (
                            <div className="relative">
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500${favorite.poster_path}`}
                                        alt={`Poster do filme ${favorite.original_title}`}
                                        className="max-w-[250px] rounded"
                                    />
                                    <MdRemoveCircle 
                                        size={22} 
                                        className="absolute top-2 right-2 cursor-pointer"
                                        title="Remover dos favoritos"
                                        onClick={() => removeToFavorite(favorite.id)}
                                    />
                                </div>
                        ))
                    }
                </div>
            </main>
        </>
    )
}