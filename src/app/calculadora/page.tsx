"use client"

import { Footer } from "@/components/footer/Footer";
import { Navbar } from "@/components/navbar/Navbar";
import { PiKeyReturnFill } from "react-icons/pi";
import Link from "next/link";
import { useState } from "react";

export default function Calculadora() {
    const [distance, setDistance] = useState(0);
    const [valid, setValid] = useState<boolean>(false);
    const [emission, setEmission] = useState<number | null>(null);

    const handleDistanceChange = (event: any) => {
        setDistance(event.target.value)
    }

    const handleSubmit = async (event: any) => {
        event.preventDefault()

        if (distance <= 0) {
            alert('Por favor, insira um valor maior do que 0')
            return
        }

        const params = {
            type: 'PassengerAirplane',
            distance: `${distance}`,
        }

        try {
            const response = await fetch('https://api-calculators.carbonext.com.br/v2/calculators/distance', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(params),
            })

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                
                setEmission(data.emission);
                setValid(true);
            }

        } catch (error) {
            console.error('Erro ao enviar dados:', error);
        }
    }

    const saveHandleClick = () => {
        if (emission !== null && distance > 0) {
            console.log(emission);
            console.log(distance);
            
            setValid(false);
        }
    }

    return (
        <>
            <Navbar />
            <main className="pt-10 pb-20 sm:py-20 px-8 sm:px-24 md:px-40 lg:px-60 xl:px-96">
                <Link href={"/"} className="flex w-fit mb-12">
                    <PiKeyReturnFill size={40} color="079b11" />
                </Link>
                <div className="flex flex-col items-center sm:justify-start mb-12">
                    <h1 className="text-[#079b11] font-bold text-3xl w-52 sm:w-auto sm:text-4xl mb-2">Calculadora de Emissão</h1>
                    <p className="text-sm sm:text-base w-44 sm:w-auto text-gray-500">Descubra quanto de Co2 sua viagem de avião emite</p>
                </div>
                <form className="w-full flex flex-col mb-10 sm:mb-24" onSubmit={handleSubmit}>
                    <input
                        type="number"
                        placeholder="Distância em KM"
                        className="w-full border-2 rounded-xl p-3 mb-8 sm:mb-4"
                        onChange={handleDistanceChange}
                    />
                    <div className="flex flex-row justify-end items-center">
                        <button type="submit" className="py-2 px-6 border-2 border-[#079b11] rounded-md font-bold text-[#079b11]">
                            Calcular
                        </button>
                    </div>
                </form>
            </main>

            {valid === true &&
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm z-60">
                    <div className="flex flex-col items-center bg-white p-8 rounded-xl shadow-lg">
                        <p className="text-[#079b11] text-center font-bold text-lg sm:text-2xl mb-6">A emissão do seu voo é de:<br />{emission} kg de Co2</p>
                        <div className="flex gap-4 flex-col sm:flex-row">
                            <button
                                type="submit"
                                className="py-2 px-6 border-2 border-[#079b11] rounded-md font-bold text-[#079b11] text-sm"
                                onClick={saveHandleClick}
                            >
                                Registrar pesquisa
                            </button>
                            <button
                                type="submit"
                                className="py-2 px-6 border-2 border-gray-500 rounded-md font-bold text-gray-500 text-sm"
                                onClick={() => setValid(false)}
                            >
                                Não registrar pesquisa
                            </button>
                        </div>
                    </div>
                </div>
            }

            <Footer />
        </>
    )
}