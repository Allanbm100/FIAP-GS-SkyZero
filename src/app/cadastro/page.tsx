"use client"

import { Footer } from "@/components/footer/Footer";
import { Navbar } from "@/components/navbar/Navbar";
import { PiKeyReturnFill } from "react-icons/pi";
import Link from "next/link";
import { useState } from "react";

export default function Cadastro() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [password, setPassword] = useState("");

    const handleNameChange = (event: any) => {
        setName(event.target.value);
    }

    const handleEmailChange = (event: any) => {
        setEmail(event.target.value);
    }

    const handleCnpjChange = (event: any) => {
        setCnpj(event.target.value);
    }

    const handlePasswordChange = (event: any) => {
        setPassword(event.target.value);
    }

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        if (name.trim() === "") {
            alert("Por favor, insira um nome válido.");
            return;
        }

        const emailRegex = /^[\w-.]+@[\w-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            alert("Por favor, insira um e-mail válido.");
            return;
        }

        const cnpjRegex = /^\d{14}$/;
        if (!cnpjRegex.test(cnpj.replace(/\D/g, ""))) {
            alert("Por favor, insira um CNPJ válido.");
            return;
        }

        if (password.length < 8) {
            alert("A senha deve ter pelo menos 8 caracteres.");
            return;
        }

        const usuarioData = {
            nomeEmpresa: name,
            email: email,
            cnpj: cnpj,
            login: {
                cnpj: cnpj,
                senha: password,
            }
        };

        console.log("Dados a serem enviados:", JSON.stringify(usuarioData, null, 2));


        try {
            const response = await fetch("http://localhost:8080/api/usuario", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(usuarioData),
            });

            if (response.ok) {
                const data = await response.json();
                alert("Usuário cadastrado com sucesso!");
                console.log(data);

                setName("");
                setEmail("");
                setCnpj("");
                setPassword("");
            } else {
                const errorData = await response.json();
                alert(`Erro ao cadastrar: ${errorData.message}`);
            }
        } catch (error) {
            console.error("Erro ao enviar os dados:", error);
            alert("Erro ao conectar ao servidor. Tente novamente mais tarde.");
        }
    }

    return (
        <>
            <Navbar />
            <main className="pt-10 pb-20 sm:py-20 px-8 sm:px-24 md:px-40 lg:px-60 xl:px-96">
                <Link href={"/"} className="flex w-fit mb-12">
                    <PiKeyReturnFill size={40} color="079b11" />
                </Link>
                <div className="flex flex-col items-center">
                    <h1 className="text-[#079b11] font-bold text-4xl mb-12">Cadastro</h1>
                </div>
                <form className="w-full flex flex-col mb-24" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Nome da empresa"
                        className="w-full border-2 rounded-xl p-3 mb-4"
                        onChange={handleNameChange}
                    />
                    <input
                        type="text"
                        placeholder="E-mail"
                        className="w-full border-2 rounded-xl p-3 mb-4"
                        onChange={handleEmailChange}
                    />
                    <input
                        type="text"
                        placeholder="CNPJ"
                        className="w-full border-2 rounded-xl p-3 mb-4"
                        onChange={handleCnpjChange}
                    />
                    <input
                        type="text"
                        placeholder="Senha"
                        className="w-full border-2 rounded-xl p-3 mb-4"
                        onChange={handlePasswordChange}
                    />
                    <input
                        type="text"
                        placeholder="Confirmar senha"
                        className="w-full border-2 rounded-xl p-3 mb-8"
                    />
                    <div className="flex sm:justify-end justify-center">
                        <button type="submit" className="py-2 px-6 border-2 border-[#079b11] rounded-md font-bold text-[#079b11]">
                            Cadastrar
                        </button>
                    </div>
                </form>

                <div className="flex flex-col items-center sm:items-start">
                    <p className="text-sm">Já possui uma conta SkyZero?</p>
                    <Link href={"/login"} className="font-bold text-[#079b11]">Faça login!</Link>
                </div>
            </main>
            <Footer />
        </>
    )
}