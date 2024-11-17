import { LogoIcon } from "../logoIcon/LogoIcon"
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


export const Footer = () => {
    return (
        <footer className="bg-black flex flex-row items-center justify-between py-6 px-8 xl:px-14">
            <div className="flex flex-col gap-1">
                <LogoIcon width={220} fill="white"/>
                <p className="text-white font-medium text-xs md:text-sm">SkyZero &copy; 2024 - Todos os direitos reservados</p>
            </div>
            <div className="flex flex-col items-center text-white gap-1">
                <h2 className="border-2 rounded-lg px-2 md:px-4 py-1 bg-white text-black font-bold text-xl">Nossos contatos</h2>
                <p className="">skyzero@gmail.com</p>
                <div className="flex flex-row gap-4">
                    <FaWhatsapp size={30} />
                    <FaInstagram size={30} />
                    <FaLinkedin size={30} />
                </div>
            </div>
        </footer>
    )
}