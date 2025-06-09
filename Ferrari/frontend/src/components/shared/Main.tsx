import Navbar from './Navbar'

const Main = () => {
    return (
        <div className="relative min-w-screen h-screen bg-dark_red">
            <main className='cover w-full md:absolute top-10 left-10  h-full md:w-[90%] h-[86%] md:rounded-2xl flex flex-col p-7 gap-20'>
                <Navbar />
                <section className='w-full justify-center flex md:justify-start md:pl-20'>
                    <div className='text-6xl flex flex-col md:items-start items-center gap-5'>
                        <span className='text-cut'>FERRARI</span>
                        <span className='text-outline  hover:text-white transition-colors duration-500 ease-in-out'>LA FERRARI</span>
                    </div>
                    <div></div>

                </section>
            </main>
        </div>
    )
}

export default Main
