"use client"

import { Footer } from "@/components/footer/Footer";
import { Navbar } from "@/components/navbar/Navbar";
import { PiKeyReturnFill } from "react-icons/pi";
import Link from "next/link";

export default function Calculadora() {

    const apiURL = 'https://api-calculators.carbonext.com.br/v2/calculators/distance'

    const handleSubmit = async (event: any) => {
        event.preventDefault()

        const params = {
            type: 'PassengerAirplane',
            distance: '1023',
        }

        try {
            const response = await fetch(`${apiURL}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(params),
            })

            const data = await response.json()
            console.log(data);

        } catch (error) {
            console.error('Erro ao enviar dados:', error);
        }
    }

    return (
        <>
            <Navbar />
            <main className="py-20 px-40 lg:px-60 xl:px-96">
                <Link href={"/"} className="flex w-fit mb-12">
                    <PiKeyReturnFill size={40} color="079b11" />
                </Link>
                <div className=" mb-12">
                    <h1 className="text-[#079b11] font-bold text-4xl mb-2">Calculadora de Emissão</h1>
                    <p className="text-gray-500">Descubra quanto de Co2 sua viagem de avião emite</p>
                </div>
                <form className="w-full flex flex-col mb-24" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Distância em KM"
                        className="w-full border-2 rounded-xl p-3 mb-4"
                    />
                    <div className="flex flex-row justify-end items-center">
                        <button type="button" className="py-2 px-6 border-2 border-[#079b11] rounded-md font-bold text-[#079b11]">
                            Calcular
                        </button>
                    </div>
                </form>
            </main>
            <Footer />
        </>
    )
}