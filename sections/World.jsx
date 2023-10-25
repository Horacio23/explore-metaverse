'use client';

import { motion } from "framer-motion";
import { TitleText, TypingText } from "../components";

import styles from '../styles'
import {  staggerContainer, fadeIn } from '../utils/motion'

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div 
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount:0.25}}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on the World" 
      textStyles="text-center"/>
      <TitleText 
        title={<>
          Track friends around you and invite them to play together in the same world
        </>}
      />
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full lg:h-[550px] h-[150px]"
      >
        <img 
          src="/map.png"
          alt="map"
          className="w-full h-full object-scale-down"
        />
        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img 
            src="people-01.png"
            alt="people"
            className="w-full h-full"
          />
        </div>
        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img 
            src="people-02.png"
            alt="people"
            className="w-full h-full"
          />
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img 
            src="people-03.png"
            alt="people"
            className="w-full h-full"
          />
        </div>
        <div className="lg:block hidden show absolute top-[40%] left-[20%] w-[200px] h-[150px] p-[6px] rounded-[24px] bg-[#5d6680] bg-opacity-50 object-contain">
            <div className="gradient-06" />
            <img 
              src="upside-down-closeup.png"
              alt="people"
              className="w-full h-full rounded-[24px] object-contain"
            />
            <div className="absolute bottom-0 p-4 justify-start w-full">
              <div className="flex flex-row">
                <div className="w-[24px] h-[24px] rounded-full z-20">
                  <img 
                    src="people-03.png"
                    alt="people"
                    className="w-full h-full"
                  />
                </div>
                <div className="w-[24px] h-[24px] rounded-full ml-[-12px] z-10">
                  <img 
                    src="people-01.png"
                    alt="people"
                    className="w-full h-full"
                  />
                </div>
                <div className="w-[24px] h-[24px] rounded-full ml-[-12px] z-0">
                  <img 
                    src="people-02.png"
                    alt="people"
                    className="w-full h-full"
                  />
                </div>
                <p className="ml-[8px] mt-[5px] text-white text-[12px] text-center align-middle" >+264 has joined</p>
              </div>
              <p className="mt-[4px] w-full font-bold text-[18px] text-white">
                The Upside Down
              </p>
            </div>
        </div>
        <div className="lg:block hidden absolute top-10 left-[70%] w-[200px] h-[150px] p-[6px] rounded-[24px] bg-[#5d6680] bg-opacity-50 object-contain">
            <div className="gradient-07" />
            <img 
              src="map-world-02.png"
              alt="map-world-02"
              className="w-full h-full rounded-[24px] object-contain"
            />
            <div className="absolute bottom-0 p-4 justify-start w-full flex flex-col">
              <div className="flex flex-row">
                <div className="w-[24px] h-[24px] rounded-full z-20">
                  <img 
                    src="people-03.png"
                    alt="people"
                    className="w-full h-full"
                  />
                </div>
                <div className="w-[24px] h-[24px] rounded-full ml-[-12px] z-10">
                  <img 
                    src="people-01.png"
                    alt="people"
                    className="w-full h-full"
                  />
                </div>
                <div className="w-[24px] h-[24px] rounded-full ml-[-12px] z-0">
                  <img 
                    src="people-02.png"
                    alt="people"
                    className="w-full h-full"
                  />
                </div>
                <p className="ml-[8px] mt-[5px] text-white text-[12px]" >+264 has joined</p>
              </div>
              <p className="mt-[4px] w-full font-bold text-[18px] text-white">
                Hawkins Lab
              </p>
            </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
