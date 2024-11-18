"use client"

import { Footer } from "@/components/footer/Footer";
import { Navbar } from "@/components/navbar/Navbar";
import { PiKeyReturnFill } from "react-icons/pi";
import Link from "next/link";


export default function Login() {
    return (
        <>
            <Navbar />
            <main className="pt-10 pb-20 sm:py-20 px-8 sm:px-24 md:px-40 lg:px-60 xl:px-96">
                <Link href={"/"} className="flex w-fit mb-12">
                    <PiKeyReturnFill size={40} color="079b11" />
                </Link>
                <div className="flex flex-col items-center">
                    <h1 className="text-[#079b11] font-bold text-3xl w-56 sm:w-auto sm:text-4xl mb-12">Acessar Conta</h1>
                </div>
                <form className="w-full flex flex-col mb-24">
                    <input
                        type="text"
                        placeholder="CPF"
                        className="w-full border-2 rounded-xl p-3 mb-4"
                    />
                    <input
                        type="text"
                        placeholder="Senha"
                        className="w-full border-2 rounded-xl p-3 mb-8"
                    />
                    <div className="flex flex-col gap-8 sm:gap-0 sm:flex-row sm:justify-between items-center">
                        <Link href={"/"} className="text-[#079b11] underline text-sm">Esqueci a minha senha</Link>
                        <button type="button" className="py-2 px-6 border-2 border-[#079b11] rounded-md font-bold text-[#079b11]">
                            Entrar
                        </button>
                    </div>
                </form>
                <div className="flex flex-col items-center sm:items-start">
                    <p className="text-sm">Não tem uma conta SkyZero?</p>
                    <Link href={"/cadastro"} className="font-bold text-[#079b11]">Crie seu cadastro!</Link>
                </div>
            </main>
            <Footer />
        </>
    )
}