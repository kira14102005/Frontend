import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
const Navbar = () => {
    return (
        <div className="w-full">
            <div className=" w-full flex flex-row justify-between items-center p-3">
                <div className="border-white border-[2px] rounded-xl p-[2px]">
                    <div className="border-yell border-[2px] py-2 px-0.8 rounded-[9px]">
                        <img className="max-w-[60px]" src="/logo.png" alt="" /></div>
                </div>
                <ul className="flex flex-row gap-4 md:gap-7 lg:gap-10 items-center">
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>CARS</li>
                </ul>
                <div className='flex gap-4 md:gap-6 lg:gap-8'>
                    <div className='bgTransparent rounded-full bg-none p-3 flex place-items-center cursor-pointer'>
                        <MenuIcon fontSize='small' /></div>
                    <div className='bgTransparent cursor-pointer rounded-full bg-none aspect-square p-3 flex place-items-center'><SearchIcon fontSize='small'/></div>
                </div>
            </div>

        </div>
    )
}

export default Navbar
