import Navbar from './Navbar'

const Main = () => {
    return (
        <main className='bg-primaryDark md:py-6 md:px-12'>
            <section className='relative min-h-[650px] bg-gradient-to-r from-primary to-secondary w-full md:rounded-xl shadow-md flex flex-col justify-center'>
                <Navbar />
                <CentralComponent />
            </section>
        </main>
    )
}

export function CentralComponent() {
    return <>
        <div className='text-white grid grid-cols-3 md:grid-cols-3 lg:grid-cols-7 w-full mx-12 md:mx-16 items-center'>
            <div className='flex lg:col-span-2 md:col-span-1 flex-col space-y-6'>
                <h1 className='text-[20px] flex flex-row justify-center'>01____________</h1>
                <h1 className='text-[40px] flex flex-wrap uppercase font-bold'>A HELTHY FRUIT </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem excepturi nihil eius temporibus perspiciatis aut, dicta velit cum nesciunt sapiente.
                </p>
                <button className='font-bold p-2 px-6 rounded-3xl border-white border-[4px] hover:cursor-pointer hover:bg-white hover:text-red-500 hover:border-red-200 bg-transparent w-fit'>Shop Now</button>
            </div>
            <div className='lg:col-span-5 md:grid-cols-1'><img className='' src="/straw.png" alt="" /></div>
            <div className='lg:col-span-3 md:grid-cols-0'></div>


        </div>

    </>
}
export default Main
