'use client'

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"; 
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getAuthUser } from "@/services/api";


export default function Login() {

    const router = useRouter()

    const authUserValidationSchema = z.object({
        email: z.string().nonempty('Campo obrigatório.').email("Formato de e-mail inválido."),
        password: z.string().nonempty("Campo obrigatório.").min(6, "Mínimo 6 caracteres.")
    })

    type AuthUserValidationSchema = z.infer<typeof authUserValidationSchema>

    const { register, handleSubmit, formState: { errors } } = useForm<AuthUserValidationSchema>({
        resolver: zodResolver(authUserValidationSchema)
    })

    async function handleUserLogin(data: AuthUserValidationSchema) {

        try {
            const fetchData = await getAuthUser(data)
            alert(fetchData.message)
            localStorage.setItem('@token', JSON.stringify(fetchData.user))
            router.push('/dashboard')
            
        } catch (err) {
            return alert('Algo deu errado...')
        }
    }

    
    return (
        <div className="h-screen flex flex-col gap-8 items-center justify-center">
            <h1 className="text-4xl font-bold animate-fade-down">&lt;dev<span className="text-emerald-500">flix</span>&gt;</h1>
            <div className="max-w-lg w-full flex flex-col animate-fade">
                <div className="flex flex-col">
                    <h2 className="text-2xl font-bold">Entrar</h2>
                    <p>Faça login na sua conta</p>
                </div>
                <form className="w-full mt-6 flex flex-col gap-4 animate-fade" onSubmit={handleSubmit(handleUserLogin)}>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email">E-mail</label>
                        <input 
                            type="email" 
                            id="email" 
                            className="bg-zinc-700 p-4 rounded outline-none border-none focus:outline-emerald-500" 
                            placeholder="Digite seu e-mail"
                            { ...register('email') }
                        />
                        { errors.email && <span className="text-red-500 text-sm font-bold">{errors.email.message}</span> }
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="password">Senha</label>
                        <input 
                            type="password" 
                            id="password" 
                            className="bg-zinc-700 p-4 rounded outline-none border-none focus:outline-emerald-500" 
                            placeholder="Digite sua senha" 
                            { ...register('password') }
                        />
                        { errors.password && <span className="text-red-500 text-sm font-bold">{errors.password.message}</span> }
                    </div>
                    <button className="mt-4 bg-emerald-500 hover:bg-emerald-400 p-4 rounded font-bold">Entrar</button>
                </form>
                <p className="mt-6 text-center animate-fade-up">Não possui conta? <Link href="/register" className="text-emerald-500">Cadastre-se.</Link></p>
            </div>
        </div>
    )
}
