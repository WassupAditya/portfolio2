import React from 'react'
import { motion } from 'framer-motion';
import { styles } from '../styles';

import Mypic from '../assets/pic/mypic.png'

import Resume from './Aditya_Patil_Resume.pdf'



const Hero = () => {

  return (
    <section className='relative  w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[100px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Aditya</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 hidden sm:block`}>Building full-stack web solutions <br className='sm:block hidden' /> for a seamless user experience.</p>



          <a href={Resume} download='Aditya_Resume ' class="  bg-transparent hover:bg-[#915eff] text-[#915eff] font-semibold hover:text-white duration-200 my-9 mr-4 py-3 px-8 border border-[#915eff] hover:border-transparent rounded">
            Download CV
          </a>
          <a href="#contact">

            <button class="bg-[#915eff] hover:bg-[#9869ff] duration-200 text-white font-semibold hover:text-white duration-200 my-9 mr-4 py-3 px-8 border border-[#915eff] hover:border-transparent rounded">
              Let's Connect !
            </button>
          </a>


        </div>
        <img className='-center hidden sm:block   object-cover h-[530px] w-[480px] sm ' src={Mypic} alt="" style={{ boxShadow: 'rgba(0, 0, 0, 0.35)' }} />

      </div>


      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>

        <a href='#about' className='hidden sm:block'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero