import React from 'react'
import Image from "next/image"

const Footer = () => {
    return (
        <>
            <footer className="text-gray-600 body-font">
                <div className="container px-15 py-8 mx-auto flex items-center sm:flex-row flex-col justify-center">
                    <a className="flex title-font font-medium items-center text-gray-900">
                    <Image src="/logo.png" alt="logo" width={40} height={10} className="mr-2" />
                    <span className="text-xl">CheSubhroBlog</span>
                    </a>
                </div>
            </footer>
        </>
    )
}

export default Footer