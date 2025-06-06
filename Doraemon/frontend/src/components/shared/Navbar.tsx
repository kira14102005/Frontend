import { useRef, useState } from "react"
import { Dropdown, Logo, SearchIcon } from "./UIIcons"

const Navbar = () => {
    const [side, setSide] = useState(false)
    const languages = useRef(['ENG', 'HIN', 'JPN', 'TML', 'CHN'])
    const [lang, setLang] = useState(0)
    let component;
    if (side) component = <Sidebar setLang={setLang} />;
    else component = null;
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
                <div className="relative col-span-1 flex flex-col space-y-2">
                    <div className=" items-center justify-center flex flex-row">
                        <span className="text-secondary uppercase hover:cursor-pointer text-[24px]" onClick={() => {
                            setSide((c: boolean) => {
                                return !c
                            })
                        }}>{languages.current[lang]}</span>
                        <span className="hover:cursor-pointer" onClick={() => {
                            setSide((c: boolean) => {
                                return !c
                            })
                        }}>
                            <Dropdown />

                        </span>
                    </div>
                    {component}
                </div>
            </div>
        </div>
    )
}


export function Sidebar({ setLang }: { setLang: React.Dispatch<React.SetStateAction<number>> }) {
    return <>
        <ul className="absolute top-8 w-fit self-center  bg-[#E2E8F0] opacity-70 rounded-3xl text-secondary text-[23px]  py-2 text-center hover:cursor-pointer flex flex-col px-4">
            <li className="border-b-titleBlack border-b-[2px]" onClick={() => {
                setLang(0)
            }}>English</li>
            <li className="border-b-titleBlack border-b-[2px]" onClick={() => {
                setLang(1)
            }}>Hindi</li>
            <li className="border-b-titleBlack border-b-[2px]" onClick={() => {
                setLang(3)
            }}>Tamil</li>
            <li className="border-b-titleBlack border-b-[2px]" onClick={() => {
                setLang(2)
            }}>Japanese</li>
            <li onClick={() => {
                setLang(4)
            }}>Chinese</li>
        </ul>
    </>
}

export default Navbar
