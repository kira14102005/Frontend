import Navbar from './Navbar'

const Main = () => {
    return (
        <main className='bg-primaryDark md:py-6 md:px-12'>
            <section className='relative min-h-[650px] bg-gradient-to-r from-primary to-secondary w-full md:rounded-xl shadow-md flex flex-col justify-center'>
                <Navbar />
                <CentralComponent />
                <h1 className='text-center font-bold  text-white text-[80px] uppercase w-full  absolute bottom-0 sm:text-[100px] md:text-[120px] xl:[150px] z-0 text-shadow'>berries</h1>
            </section>
        </main>
    )
}

export function CentralComponent() {
    return <>
        <div className='text-white grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 w-full mx-12 md:mx-16 items-center'>
            <div className='flex lg:col-span-2 md:col-span-1 flex-col space-y-6'>
                <h1 className='text-[20px] flex flex-row justify-center'>
                    01____________
                </h1>
                <h1 className='text-shadow-lg/30 text-5xl flex flex-wrap uppercase font-bold text-shadow'>
                    A HELTHY FRUIT
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem excepturi nihil eius temporibus perspiciatis aut, dicta velit cum nesciunt sapiente.
                </p>
                <button className='font-bold p-2 px-6 rounded-3xl border-white border-[4px] hover:cursor-pointer hover:bg-white hover:text-red-500 hover:border-red-200 bg-transparent w-fit'>
                    Shop Now
                </button>
            </div>
            <div className='lg:col-span-5 md:grid-cols-1'>
                <img className='relative img-shadow z-10' src="/straw.png" alt="" />
            </div>
            <div className='lg:col-span-3  hidden md:grid-cols-1'>

            </div>


        </div>

    </>
}
export default Main
