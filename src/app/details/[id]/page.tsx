'use client'

import { useQuery } from "react-query";
import { BiArrowBack } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { getMovieById } from "@/services/api";
import { BackdropLoading } from "@/components/BackdropLoading";
import { Header } from "@/components/Header";
import { GenreProps } from "@/app/dashboard/page";

import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

interface Props {
    id: number
    poster_path: string
    original_title: string
    overview: string
    vote_average?: number
    genres: GenreProps[]
}


export default function Details({ params }: Params) {

    const router = useRouter()

    const { data, isLoading } = useQuery<Props>('movie', () => getMovieById(params.id))

    return (
        <>
            {isLoading ? <BackdropLoading /> :

                <>
                    <Header />
                    <div className="container mx-auto my-12 p-4">
                        <header>
                            <button className="flex items-center gap-2 font-bold" onClick={() => router.back()}>
                                <BiArrowBack />
                                <span>Voltar</span>
                            </button>
                        </header>
                        <div className="mt-5 flex justify-center gap-8 max-md:flex-col max-md:items-center">
                            <div className="max-w-md w-full">
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
                                    alt={`Poster do filme ${data?.original_title}`}
                                    className="rounded w-full"
                                />
                            </div>
                            <div className="flex-1">
                                <div className="flex flex-col gap-4">
                                    <h2 className="font-bold text-3xl">{data?.original_title}</h2>
                                    <div className="flex items-center gap-4 flex-wrap">
                                        {
                                            data &&
                                            data?.genres.map((genre) => (
                                                <span className="border-2 rounded-full p-2 text-xs">{genre.name}</span>
                                            ))
                                        }
                                    </div>
                                    <Rating style={{ maxWidth: 200 }} value={Math.floor(data?.vote_average)} items={10} />
                                </div>
                                <div className="mt-8 flex flex-col gap-2">
                                    <h4 className="font-bold text-xl">Sinopse</h4>
                                    <p className="text-justify">{data?.overview ? data?.overview : 'Não disponível.'}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    )
}