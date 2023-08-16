import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export function Dropdown() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <GiHamburgerMenu className="cursor-pointer" size={22} onClick={() => setIsOpen(!isOpen)} />

            {
                isOpen
                    ?
                    <div className="w-full p-4 absolute top-0 left-0 min-h-[350px] bg-zinc-800 flex flex-col z-50" data-aos="fade-down">
                        <header className="self-end">
                            <button className="text-xl" onClick={() => setIsOpen(!isOpen)}>x</button>
                        </header>
                        <nav>
                            <ul className="flex items-center flex-col gap-4 cursor-pointer">
                                <li className="hover:text-emerald-500">Home</li>
                                <li className="hover:text-emerald-500">Preços</li>
                                <li className="hover:text-emerald-500">FAQ</li>
                                <li className="hover:text-emerald-500">Contatos</li>
                            </ul>
                        </nav>
                        <div className="mt-8 flex items-center gap-4 flex-col justify-center">
                            <Link href="/login">
                                <button className="border-2 border-emerald-500 text-emerald-500 w-32 h-10 rounded">Entrar</button>
                            </Link>
                            <Link href="/register">
                                <button className="bg-emerald-500 w-32 h-10 rounded">Cadastrar</button>
                            </Link>
                        </div>
                    </div>
                    :
                    null
            }

        </>
    )
}