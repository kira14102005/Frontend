import Button from './Button'
import Navbar from './Navbar'

const Main = () => {
    return (
        <div className="md:px-4 md:py-8 w-full h-full bg-dark_red">
            <main className='cover w-full h-full md:rounded-2xl flex flex-col p-7 gap-20'>
                <Navbar />
                <section className='w-full items-center flex flex-col gap-9 md:items-start md:pl-20'>
                    <div className='text-5xl sm:text-6xl flex flex-col md:items-start items-center gap-2'>
                        <span className='text-cut'>FERRARI</span>
                        <span className='text-outline  hover:text-white transition-colors duration-500 ease-in-out'>LA FERRARI</span>
                    </div>
                    <div><Button name='Explore' onclick={() => { }} /></div>
                </section>

                <section className='w-full my-3 grid md:grid-cols-3 gap-3 md:gap-8 lg:pl-20'>
                    <div className='md:hidden lg:block  col-span-1 flex place-items-center'>
                        <div className='p-8 z-10 bg-black/10 rounded-xl'> <h1 className=' text-xl font-semibold mb-2'>FEATURES</h1>
                            <p className='text-[14px] font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, amet. Officia, possimus fuga. Nihil animi impedit voluptates, enim error placeat voluptatem dolor. Praesentium officiis suscipit, itaque quisquam natus magnam unde. Quod laudantium laboriosam fugiat quisquam reiciendis velit itaque beatae expedita doloremque nostrum. </p>
                        </div>
                    </div>
                    <div className='md:col-span-3 lg:col-span-2'>
                        <img src="/f2.png" alt="" className='lg:w-[56vw] w-full' />
                    </div>
                    <div className='md:col-span-3  md:block lg:hidden hidden'>
                        <img src="/f1.png" alt="" className='w-full' />
                    </div>
                </section>

            </main>
        </div>
    )
}

export default Main
