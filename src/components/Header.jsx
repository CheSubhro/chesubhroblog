import Image from "next/image"


const Header = () => {
    return (
        <>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5  flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="/">
                    <Image src="/logo.png" alt="logo" width={40} height={10}/>
                    <span className="ml-3  text-xl">CheSubhroBlog</span>
                    </a>
                    <nav className="md:ml-auto md:mr-12 flex flex-wrap items-end text-base justify-end py-10
                    ">
                    <a className="mr-5 hover:text-gray-900">Blogs</a>
                    <a className="mr-5 hover:text-gray-900">Tags</a>
                    <a className="mr-5 hover:text-gray-900">Projects</a>
                    <a className="mr-5 hover:text-gray-900">About</a>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header