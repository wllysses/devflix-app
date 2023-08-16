'use client'

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { registerUser } from "@/services/api";


export default function Register() {

    const registerUserValidationSchema = z.object({
        name: z.string().nonempty("Campo obrigatório"),
        email: z.string().nonempty("Campo obrigatório.").email("Formato de e-mail inválido."),
        password: z.string().nonempty("Campo obrigatório.").min(6, "Mínimo 6 caracteres."),
        confirm_password: z.string().nonempty("Campo obrigatório.").min(6, "Mínimo 6 caracteres"),
        terms: z.literal(true, {
            errorMap: () => ({ message: "Você precisa aceitar os termos." })
        })
    }).refine((data) => data.password === data.confirm_password, {
        path: ["confirm_password"],
        message: "As senhas precisam ser iguais."
    })

    type RegisterUserValidationSchema = z.infer<typeof registerUserValidationSchema>

    const { register, handleSubmit, formState: { errors } } = useForm<RegisterUserValidationSchema>({
        resolver: zodResolver(registerUserValidationSchema)
    })

    async function handleRegisterUser(data: RegisterUserValidationSchema) {
        
        try {
            const fetchData = await registerUser(data)
            console.log(fetchData)
        } catch (err) {
            return alert('Algo deu errado.')
        }
    }



    return (
        <div className="h-screen flex flex-col gap-8 items-center justify-center">
            <h1 className="text-4xl font-bold animate-fade-down">&lt;dev<span className="text-emerald-500">flix</span>&gt;</h1>
            <div className="max-w-lg w-full flex flex-col animate-fade">
                <div className="flex flex-col">
                    <h2 className="text-2xl font-bold">Cadastre-se</h2>
                    <p>Preencha todas as informações.</p>
                </div>
                <form className="w-full mt-6 flex flex-col gap-4 animate-fade" onSubmit={handleSubmit(handleRegisterUser)}>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name">Nome completo</label>
                        <input
                            type="text"
                            id="name"
                            className="bg-zinc-700 p-4 rounded outline-none border-none focus:outline-emerald-500"
                            placeholder="Informe seu nome completo"
                            { ...register('name') }
                        />
                        { errors.name && <span className="text-red-500 text-sm font-bold">{errors.name.message}</span> }
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            className="bg-zinc-700 p-4 rounded outline-none border-none focus:outline-emerald-500"
                            placeholder="Informe seu e-mail"
                            { ...register('email') }
                        />
                        { errors.email && <span className="text-red-500 text-sm font-bold">{errors.email.message}</span> }
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="password">Senha</label>
                            <input
                                type="password"
                                id="password"
                                className="bg-zinc-700 p-4 rounded outline-none border-none focus:outline-emerald-500"
                                placeholder="Informe uma senha"
                                { ...register('password') }
                            />
                            { errors.password && <span className="text-red-500 text-sm font-bold">{errors.password.message}</span> }
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="confirmPassword">Confirmar senha</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                className="bg-zinc-700 p-4 rounded outline-none border-none focus:outline-emerald-500"
                                placeholder="Informe a mesma senha"
                                { ...register('confirm_password') }
                            />
                            { errors.confirm_password && <span className="text-red-500 text-sm font-bold">{errors.confirm_password.message}</span> }
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                            <input type="checkbox" id="terms" { ...register('terms') } />
                            <span>Declaro que li e aceito todos os termos e condições.</span>
                        </div>
                        { errors.terms && <span className="text-red-500 text-sm font-bold">{errors.terms.message}</span> }
                    </div>
                    <button className="mt-4 bg-emerald-500 hover:bg-emerald-400 p-4 rounded font-bold">Quero me cadastrar</button>
                </form>
                <p className="mt-6 text-center animate-fade-up">Já possui conta? <Link href="/login" className="text-emerald-500">Fala login.</Link></p>
            </div>
        </div>
    )
}
