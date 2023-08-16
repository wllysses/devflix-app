import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useWindowDimensions } from "@/hooks/useWindowSize"
import { Dropdown } from "../Dropdown";

interface HeaderProps {
    type?: string
}

export function Header({ type }: HeaderProps) {

    const router = useRouter()

    const { width } = useWindowDimensions()

    const [userData] = useState(JSON.parse(localStorage.getItem('@token')!))

    function handleUserLogOut() {
        localStorage.removeItem('@token')
        router.push('/')
    }


    return (
        <>
            {
                type === 'initial' ?
                    < header className="py-8 px-4">
                        <div className="container mx-auto">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-16">
                                    <h1 className="font-bold text-4xl">&lt;dev<span className="text-emerald-500">flix</span>&gt;</h1>
                                    <nav className="max-lg:hidden">
                                        <ul className="flex items-center gap-10 cursor-pointer">
                                            <li className="hover:text-emerald-500">Home</li>
                                            <li className="hover:text-emerald-500">
                                                <a href="#prices">Preços</a>
                                            </li>
                                            <li className="hover:text-emerald-500">
                                                <a href="#faq">FAQ</a>
                                            </li>
                                            <li className="hover:text-emerald-500">
                                                <a href="#contacts">Contatos</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                {
                                    width > 1024
                                        ?
                                        <div className="flex items-center gap-4 max-lg:hidden">
                                            <Link href="/login">
                                                <button className="border-2 border-emerald-500 text-emerald-500 w-32 h-10 rounded">Entrar</button>
                                            </Link>
                                            <Link href="/register">
                                                <button className="bg-emerald-500 w-32 h-10 rounded">Cadastrar</button>
                                            </Link>
                                        </div>
                                        :
                                        <Dropdown />
                                }
                            </div>
                        </div>
                    </header >
                    :
                    <header className="p-4 bg-zinc-950">
                        <div className="container mx-auto">
                            <div className="flex items-center justify-between">
                                <nav className="max-lg:hidden">
                                    <ul className="flex items-center gap-10 cursor-pointer">
                                        <li className="hover:text-emerald-500">
                                            <Link href="/dashboard">
                                                Home
                                            </Link>
                                        </li>
                                        <li className="hover:text-emerald-500">
                                            <Link href="/favorites">
                                                Favoritos
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                                <h1 className="font-bold text-4xl">&lt;dev<span className="text-emerald-500">flix</span>&gt;</h1>
                                <div className="flex items-center gap-4">
                                    <span>{userData && userData.name}</span>
                                    <button
                                        className="border-2 border-emerald-500 text-emerald-500 w-16 h-8 rounded"
                                        onClick={handleUserLogOut}
                                    >
                                        Sair
                                    </button>
                                </div>
                            </div>
                        </div>
                    </header>
            }
        </>
    )
}