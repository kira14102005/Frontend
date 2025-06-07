import Button from "./Button";
import Navbar from "./Navbar"
import StarIcon from '@mui/icons-material/Star';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
const Main = () => {
    return (
        <div className="relative flex flex-col justify-between items-center w-full h-full space-y-8">
            <Navbar />
            <div className=" w-full grid md:grid-cols-3 grid-cols-1 space-y-7 space-x-7 px-7">
                <h1 className="z-10 col-span-1 text-6xl text-black font-bold flex flex-col justify-self-center  md:text-left text-center items-center justify-center md:w-[70%]">
                    <span className="w-full">Watch Now in</span>
                    <span className="text-8xl md:text-6xl text-primary w-full">
                        3D
                    </span>
                </h1>
                <div className="md:hidden z-10 col-span-1 items-center justify-center flex flex-col text-center space-y-3">
                    <p className="w-[70%] text-[20px] text-secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti accusantium rem dolorem aperiam ad, pariatur cum veritatis earum quis iusto.
                    </p>
                    <Button name="Play on" onclick={() => { }} />

                </div>
                <div className="z-10 col-span-1 flex items-center justify-center">
                    <img src="/dora.png" className="img-shadow roater  max-h-[300px] lg:max-h-[600px]" alt="doraemon" />
                </div>
                <div className="hidden md:flex z-10 col-span-1 w-full items-center justify-center">
                    <div className="flex flex-col  items-center w-[45%] justify-center">
                        <img src="/dore.png" className="rounded-3xl  shadow-xl  my-3" alt="" />
                        <div className="flex flex-row w-[85%]  h-[20px]">
                            <p className="text-black mr-1 text-[20px]">4.7</p>
                            <StarIcon className="text-primary text[20px]" />
                        </div>
                        <p className="w-[85%]  justify-self-start text-secondary opacity-80">
                            Star Entertainment Co.
                        </p>
                    </div>
                </div>
                <section className="bottom-10 left-0 absolute z-0 text-[100px] md:[200px] lg:text-[300px] text-[#E2E8F0] opacity-70 w-full flex justify-center uppercase">
                    <h1>doraemon</h1>
                </section>
            </div>
                <Bottom/>
        </div>
    )
}
export function Bottom() {
    return <>
        <div className="w-full grid grid-cols-3 place-items-center gap-6">
            <div className="col-span-1 flex flex-col items-start text-secondary text-[20px]">
                <p>Kolkata</p>
                <p className="font-semibold text-primary">India</p>
                <p>3 May, 2025</p>
            </div>
            <div className="col-span-1">
                <ArrowDownwardIcon className=""/>
            </div>
            <div className="col-span-1 flex flex-col">
                <ArrowLeftIcon className="text-primary" />
                <ArrowRightIcon />
            </div>
        </div>
    </>
}
export default Main
