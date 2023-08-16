import { MovieProps } from "@/components/Movies";
import { create } from "zustand";

interface StoreProps {
    favorites: MovieProps[]
    addToFavorite: (movie: MovieProps) => void
    removeToFavorite: (id: number) => void
}

const useStore = create<StoreProps>((set) => ({
    favorites: [],
    addToFavorite: (movie: MovieProps) => set((state) => ({ favorites: [...state.favorites, movie] })),
    removeToFavorite: (id: number) => set((state) => ({ favorites: state.favorites.filter((favorite) => favorite.id !== id) }))
}))

export { useStore }
