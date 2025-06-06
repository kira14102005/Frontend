import { Dropdown, Logo, SearchIcon } from "./UIIcons"

const Navbar = () => {
    return (
        <div className="w-full">
            <div className="grid grid-cols-4 lg:grid-cols-11 w-full justify-between items-center">
                <div className="col-span-2 flex flex-row space-x-2">
                    <Logo />
                    <div className="font-bold text-[25px] text-titleBlack flex flex-col">
                        <h1 className="h-[27px]">Dora</h1>
                        <h1>emon</h1>
                    </div>
                </div>
                <ul className="font-thin text-[23px] text-secondary hidden  lg:col-span-4 lg:flex lg:flex-row lg:space-x-10">
                    <li>Episodes</li>
                    <li>Store</li>
                    <li>Toys</li>
                    <li>3D Videos</li>
                </ul>
                <input type="text" className=
                    'rounded-full hidden lg:block lg:col-span-2 px-6 py-2 text-[20px] text-[#7D828C] bg-[#E2E8F0]' placeholder="Search" />
                <div className="mx-2 justify-center items-center col-span-1 text-sm text-white">
                    <div className="w-fit p-2 bg-primary aspect-square rounded-full fill-white hover:cursor-pointer">
                        <SearchIcon />
                    </div>
                </div>
                <div className="col-span-1 items-center justify-center flex flex-row">
                    <span className="text-secondary uppercase text-[24px]">eng</span>
                    <span className="hover:cursor-pointer">
                        <Dropdown />
                    </span>
                </div>
            </div>
        </div>
    )
}



export default Navbar
