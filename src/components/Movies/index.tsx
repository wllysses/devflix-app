import { useQuery } from "react-query";
import { MdFavorite } from 'react-icons/md'
import Carousel from "better-react-carousel";
import Link from "next/link";
import { getMovies } from "@/services/api";
import { useStore } from "@/store/store";

interface Props {
    id: number
    name: string
}

export interface MovieProps {
    id: number
    poster_path: string
    original_title: string
}


export function Movies({ id, name }: Props) {

    const { data: movies, isLoading } = useQuery<MovieProps[]>(['movies', id], () => getMovies(id))

    const { addToFavorite, favorites } = useStore()

    function movieHasFavorited(id: number) {
        const filteredMovies = favorites.filter((movie) => movie.id === id)

        if(!filteredMovies.length) {
            return false
        } else {
            return true
        }
    }

    return (
        <div className="flex flex-col gap-4">
            <h2 className="font-bold text-2xl">{name}</h2>
            <Carousel cols={5} rows={1} gap={15} loop>
                {isLoading && <span>Carregando...</span>}
                {
                    movies &&
                    movies.map((movie) => (
                        <Carousel.Item key={id}>
                            <div className="relative">
                                <Link href={`/details/${movie.id}`}>
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                        alt={`Poster do filme ${movie.original_title}`}
                                        className="rounded hover:opacity-60"
                                    />
                                </Link>
                                <MdFavorite
                                    size={22}
                                    className="absolute top-2 right-2"
                                    title="Adicionar aos favoritos"
                                    onClick={() => addToFavorite(movie)}
                                    style={{ color: movieHasFavorited(movie.id) ? 'red' : 'white' }}
                                />
                            </div>
                        </Carousel.Item>
                    ))
                }
            </Carousel>
        </div>
    )
}
