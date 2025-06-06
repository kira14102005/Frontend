import React from 'react'
import Navbar from './Navbar'

const Main = () => {
    return (
        <main className='bg-primaryDark md:py-6 md:px-12'>
            <section className='relative min-h-[650px] bg-gradient-to-r from-primary to-secondary w-full md:rounded-xl shadow-md'>
                <Navbar />

            </section>
        </main>
    )
}

export default Main
