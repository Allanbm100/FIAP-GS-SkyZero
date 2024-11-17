import { Footer } from "@/components/footer/Footer";
import { Navbar } from "@/components/navbar/Navbar";
import { PiKeyReturnFill } from "react-icons/pi";
import Link from "next/link";

export default function Cadastro() {
    return (
        <>
            <Navbar />
            <main className="py-20 px-40 lg:px-60 xl:px-96">
                <Link href={"/"} className="flex w-fit mb-12">
                    <PiKeyReturnFill size={40} color="079b11" />
                </Link>
                <div className="flex flex-col mb-24">
                    <h1 className="text-[#079b11] font-bold text-4xl mb-12">Cadastro</h1>
                    <form className="w-full">
                        <input
                            type="text"
                            placeholder="Nome Completo"
                            className="w-full border-2 rounded-xl p-3 mb-4"
                        />
                        <input
                            type="text"
                            placeholder="E-mail"
                            className="w-full border-2 rounded-xl p-3 mb-4"
                        />
                        <input
                            type="text"
                            placeholder="CPF"
                            className="w-full border-2 rounded-xl p-3 mb-4"
                        />
                        <input
                            type="text"
                            placeholder="Senha"
                            className="w-full border-2 rounded-xl p-3 mb-4"
                        />
                        <input
                            type="text"
                            placeholder="Confirmar senha"
                            className="w-full border-2 rounded-xl p-3 mb-8"
                        />
                        <div className="flex flex-row justify-end items-center">
                            <button type="button" className="py-2 px-6 border-2 border-[#079b11] rounded-md font-bold text-[#079b11]">
                                Cadastrar
                            </button>
                        </div>
                    </form>
                </div>
                <div className="text-left">
                    <p className="text-sm">Já possui uma conta SkyZero?</p>
                    <Link href={"/login"} className="font-bold text-[#079b11]">Faça login!</Link>
                </div>
            </main>
            <Footer />
        </>
    )
}