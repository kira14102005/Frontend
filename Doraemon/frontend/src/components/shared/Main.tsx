import Navbar from "./Navbar"
const Main = () => {
    return (
        <div className="relative flex justify-center items-center w-full h-full">
            <Navbar />
            <div className="grid grid-cols-3">
                <h1 className="col-span-1 text-3xl text-black font-bold flex flex-col md:text-left  text-center">
                    <span className="w-full">Watch Now in</span>
                    <span className="w-full text-primary">
                        3D
                    </span>
                </h1>
            </div>

        </div>
    )
}

export default Main
