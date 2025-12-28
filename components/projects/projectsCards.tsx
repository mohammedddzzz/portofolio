import React from 'react'
import Image from 'next/image'
import andrewGreeneImage from '../../public/imagesresume/avatars/andrew-greene.jpg'
// bg-gradient-to-br	from-black from-10% via-white via-5% to-gray-900 to-40%  border border-gray-800 border-opacity-30 rounded-5xl
//              <Image className="absolute right-0 bottom-0" src={blure} width={400} height={1200} alt=""/>

const ProjectsCards = () => {
  return (
    <section className="py-24 bg-neutral-950">
    <div className="container px-4 mx-auto">
      <div className="text-center">
        <span className="inline-block mb-4 text-sm text-green-400 font-medium tracking-tighter">Nightsable Card</span>
        <h2 className="font-heading mb-6 text-7xl lg:text-8xl text-white tracking-8xl md:max-w-md mx-auto">Protecting you and your money</h2>
        <p className="mb-20 text-white text-opacity-60 md:max-w-md mx-auto">Nightsable is a strategic branding agency focused on brand creation, rebrands, and brand</p>
        <div className="flex flex-wrap -m-4">
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="relative pt-16 px-10 pb-52 h-full bg-gradient-to-br	from-zinc-600 from-5% via-white via-15% to-zinc-900 to-35% bg-[radial-gradient(_at_bottom_right,_var(--tw-gradient-stops))] from-black from-25% via-zinc-500 via-35% to-black to-45% border border-gray-800 border-opacity-30 rounded-5xl">
              <div className="relative z-10">
                <Image className="mb-8 mx-auto" src={andrewGreeneImage} width={60} height={60} alt=""/>
                <h3 className="mb-6 text-3xl text-white tracking-3xl">Safeguarded with leading banks</h3>
                <p className="text-white text-opacity-60">For most currencies, there are no limits to the transfer amount. Certain currencies might have limits set by our payments partners. You will always see the limit in the Revolut app before making the transfer.</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="relative pt-16 px-10 pb-52 h-full bg-gradient-to-br	from-zinc-600 from-5% via-white via-15% to-zinc-900 to-35% bg-[radial-gradient(_at_bottom_right,_var(--tw-gradient-stops))] from-black from-25% via-zinc-500 via-35% to-black to-45% border border-gray-800 border-opacity-30 rounded-5xl ">   
              <div className="relative z-10">
                <Image className="mb-8 mx-auto" src={andrewGreeneImage} width={60} height={60} alt=""/>
                <h3 className="mb-6 text-3xl text-white tracking-3xl">We`re licensed money transmitter</h3>
                <p className="text-white text-opacity-60">For most currencies, there are no limits to the transfer amount. Certain currencies might have limits set by our payments partners. You will always see the limit in the Revolut app before making the transfer.</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className=" relative pt-16 px-10 pb-52 h-full bg-gradient-to-br	from-zinc-600 from-5% via-white via-15% to-zinc-900 to-35% bg-[radial-gradient(_at_bottom_right,_var(--tw-gradient-stops))] from-black from-25% via-zinc-500 via-35% to-black to-45% border border-gray-800 border-opacity-30 rounded-5xl">
              <div className="relative z-10">
                <Image className="mb-8 mx-auto" src={andrewGreeneImage} width={60} height={60} alt=""/>
                <h3 className="mb-6 text-3xl text-white tracking-3xl">Audited Regularly</h3>
                <p className="text-white text-opacity-60">For most currencies, there are no limits to the transfer amount. Certain currencies might have limits set by our payments partners. You will always see the limit in the Revolut app before making the transfer.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
export default ProjectsCards;