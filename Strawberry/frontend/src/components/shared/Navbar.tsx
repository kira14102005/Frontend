import { GiHamburgerMenu } from "react-icons/gi"

const Navbar = () => {
    return (
        <div className="py-2 absolute top-0 left-0 z-20 w-full">
            <div className="text-white container">
                <div className="flex flex-row justify-between items-center">
                    <h1 className="text-4xl font-bold uppercase"> Straw<span className="font-normal">Berries</span></h1>
                    <ul className="flex flex-row space-x-14">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Where to Go</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                    <div>
                        <GiHamburgerMenu className="text-3xl cursor-pointer" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
