import Navbar from "./Navbar"
import StarIcon from '@mui/icons-material/Star';
const Main = () => {
    return (
        <div className="relative flex flex-col justify-between items-center w-full h-full">
            <Navbar />
            <div className=" w-full grid md:grid-cols-3 grid-cols-1 space-y-7">
                <h1 className="z-10 col-span-1 text-6xl text-black font-bold flex flex-col md:text-left  text-center items-center justify-center p-3 ">
                    <span className="w-fit">Watch Now in</span>
                    <span className="text-primary">
                        3D
                    </span>
                </h1>
                <div className="z-10 col-span-1 flex items-center justify-center">
                    <img src="/dora.png" className="max-h-[600px]" alt="doraemon" />
                </div>
                <div className="z-10 col-span-1 flex w-full items-center justify-center">
                    <div className="flex flex-col  items-center w-[45%] justify-center"><img src="/dore.png" className="rounded-3xl  shadow-xl  my-3" alt="" />
                        <div className="flex flex-row w-[85%]  h-[20px]"><p className="text-black mr-1 text-[20px]">4.7</p>
                            <StarIcon className="text-primary text[20px]" /></div>
                        <p className="w-[85%]  justify-self-start text-secondary opacity-80">Star Entertainment Co.</p></div>

                </div>
                <section className="bottom-0 px-7 absolute z-0 sm:text-[150px] md:[200px] lg:text-[300px] text-[#E2E8F0] opacity-70 w-full text-center">DORAEMON</section>
            </div>

        </div>
    )
}

export default Main
