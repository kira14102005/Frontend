
const Navbar = () => {
    return (
        <div className="w-full">
            <div className= " w-full flex flex-row justify-between items-center p-3">
                <div className="border-white border-[2px] rounded-xl p-[2px]">
                    <div className="border-yell border-[2px] py-2 px-0.8 rounded-[9px]">
                        <img className="max-w-[60px]" src="/logo.png" alt="" /></div>
                </div>
                <ul className="flex flex-row gap-3 items-center">
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>CARS</li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar
