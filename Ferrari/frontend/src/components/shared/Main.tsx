import Button from './Button'
import Navbar from './Navbar'

const Main = () => {
    return (
        <div className="md:px-4 md:py-8 w-full h-full bg-dark_red">
            <main className='cover w-full h-full md:rounded-2xl flex flex-col p-7 gap-20'>
                <Navbar />
                <section className='w-full items-center flex flex-col gap-9 md:items-start md:pl-20'>
                    <div className='text-6xl flex flex-col md:items-start items-center gap-2'>
                        <span className='text-cut'>FERRARI</span>
                        <span className='text-outline  hover:text-white transition-colors duration-500 ease-in-out'>LA FERRARI</span>
                    </div>
                    <div><Button name='Explore' onclick={() => { }} /></div>

                    <section className='w-full my-3 flex'>
                        <div className='relative'>
                            <div className='bg-black opacity-10 absolute z-0 w-full h-full'></div>
                            <div className='p-8 z-10'> <h1 className='text-xl font-semibold'>FEATURES</h1>
                                <p className='text-[15px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, amet. Officia, possimus fuga. Nihil animi impedit voluptates, enim error placeat voluptatem dolor. Praesentium officiis suscipit, itaque quisquam natus magnam unde. Quod laudantium laboriosam fugiat quisquam reiciendis velit itaque beatae expedita doloremque nostrum. </p></div>
                        </div>
                    </section>
                </section>

            </main>
        </div>
    )
}

export default Main
