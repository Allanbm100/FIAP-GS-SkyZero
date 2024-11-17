"use client"

import Link from "next/link"
import { LogoIcon } from "../logoIcon/LogoIcon"
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";



export const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [logged] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navLinks = [
        { href: "/integrantes", label: "Integrantes" },
        { href: "/calculadora", label: "Calculadora" },
        { href: "/registros", label: "Registros" },
    ];

    return (
        <nav className="w-full h-20 border-b-4 border-gray-200">
            <div className="w-full h-full max-w-7xfull m-auto flex flex-wrap justify-between content-center px-6 lg:px-12">
                <div className="flex">
                    <Link href={"/"}>
                        <LogoIcon width={220} />
                    </Link>

                    <ul className="hidden lg:flex gap-10 items-center ml-6">
                        {navLinks.map(({ href, label }) => (
                            <li key={href}>
                                <Link href={href}>{label}</Link>
                            </li>
                        ))}
                    </ul>

                </div>

                {logged ? (
                    <Link href={""} className="hidden lg:flex items-center">
                        <FaUserCircle
                            className="w-[35px] h-[35px]"
                            color="079b11"
                            id="user"
                        />
                    </Link>
                ) : (
                    <Link href={"/login"} className="hidden lg:flex items-center py-px px-2 border-2 rounded-xl border-[#079b11]">
                        <div className="flex items-center justify-center">
                            <FaUserCircle
                                className="w-[35px] h-[35px]"
                                color="079b11"
                                id="user"
                            />
                            <p className="text-[#079b11] text-[1.2rem] font-medium ml-3">
                                Entrar
                            </p>
                        </div>
                    </Link>
                )}

                <button
                    className="lg:hidden"
                    onClick={toggleMenu}
                    type="button"
                >
                    <IoMenu className="w-[35px] h-[35px]" color="079b11" />
                </button>

                {isMenuOpen && (
                    <div className="absolute inset-x-0 top-20 bg-white shadow-lg py-4 flex flex-row gap-8 justify-center lg:hidden z-50">
                        <Link
                            href={logged ? "" : "/login"}
                            className={`flex items-center gap-2 justify-center w-1/6 h-10 border-2 rounded-lg ${logged
                                    ? "border-[#079b11] text-[#079b11]"
                                    : "border-[#079b11] text-[#079b11] font-medium"
                                }`}
                        >
                            <FaUserCircle
                                className="w-[25px] h-[25px]"
                                color="#079b11"
                                id="user"
                            />
                            {!logged && <span>Entrar</span>}
                        </Link>
                        {navLinks.map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                className="flex items-center justify-center w-1/6 h-10 border-2 rounded-lg border-gray-600/80 text-gray-800 text-center"
                            >
                                {label}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    )
}