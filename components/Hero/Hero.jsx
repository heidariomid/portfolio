import React from 'react';
import {AiOutlineMail} from 'react-icons/ai';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {FaGithub, FaLinkedinIn} from 'react-icons/fa';
import {motion} from 'framer-motion';
import {useStateValue} from '../../store/Context';
import MeImg from '../../public/assets/images/omid-heidari.jpeg';
import Image from 'next/image';
import Link from 'next/link';
import {HiOutlineChevronDoubleDown, HiOutlineChevronDown} from 'react-icons/hi';

const Hero = () => {
	const [state] = useStateValue();
	const {isDark} = state.theme;
	const variants = {
		animate: {
			transition: {
				staggerChildren: 0.2,
			},
		},
	};
	const item = {
		initial: {opacity: 0, y: 20},
		animate: {
			opacity: 1,
			y: 0,
			transition: {duration: 0.8, ease: 'easeInOut', stiffness: 100},
		},
	};
	return (
		<motion.div
			initial='initial'
			animate='animate'
			exit='exit'
			variants={variants}
			id='hero'
			className='snap-start  w-full h-screen  mb-[200px] md:mb-[400px]  flex flex-col items-center text-center '
		>
			<div className='max-w-[1240px] w-full h-full mx-auto p-2 flex flex-col justify-center items-center '>
				<div className='my-10 animate-borderWiggle border-2 bg-[#dfddd9] rounded-full px-2 pt-2 '>
					<Image
						className='absolute rounded-full '
						src={MeImg}
						alt='Profile'
						width={250}
						height={250}
					/>
				</div>
				<div>
					<h1 className={`text-5xl ${isDark ? 'text-white' : 'text-zinc-500'} `}>
						Hi, I&apos;m{' '}
						<span className={`${isDark ? 'text-white' : 'text-zinc-600'}`}>Omid</span>
					</h1>
					<motion.h2
						initial={{opacity: 0, y: -10}}
						whileInView={{opacity: 1, y: 0}}
						transition={{
							duration: 1.2,
							ease: 'easeInOut',
						}}
						className={`  pt-4 pb-2 ${
							isDark ? 'text-gradient' : 'text-zinc-500'
						} tracking-wide`}
					>
						A <span className={`${!isDark && 'text-zinc-600'}`}>Front-End</span>{' '}
						Developer
					</motion.h2>
					<p
						className={`max-w-[70%] mx-auto text-center  text-xl py-4 ${
							isDark ? 'text-zinc-300' : 'text-zinc-500'
						}`}
					>
						I&apos;m a full-stack developer with a{' '}
						<span
							className={`${
								isDark ? 'text-white  ' : 'text-zinc-600 '
							} font-semibold `}
						>
							passion
						</span>{' '}
						for building beautiful,{' '}
						<span
							className={`${
								isDark ? 'text-white  ' : 'text-zinc-600 '
							} font-semibold `}
						>
							performant
						</span>{' '}
						, and{' '}
						<span
							className={`${
								isDark ? 'text-white  ' : 'text-zinc-600 '
							} font-semibold `}
						>
							accessible
						</span>{' '}
						websites.
					</p>

					<div className='flex mx-auto items-center justify-center py-5 w-full '>
						<motion.div
							whileHover={{
								scale: 1.1,
								transition: {
									duration: 0.2,
									ease: 'easeInOut',
								},
							}}
							variants={item}
							className={`rounded-full   hover:bg-zinc-300    p-3 md:p-4 cursor-pointer  mx-4 md:mx-8  ${
								isDark
									? 'text-white bg-gradient'
									: 'bg-white text-zinc-600  shadow-gray-400 shadow-lg'
							}  `}
						>
							<FaLinkedinIn size={32} />
						</motion.div>
						<motion.div
							whileHover={{
								scale: 1.1,
								transition: {
									duration: 0.2,
									ease: 'easeInOut',
								},
							}}
							variants={item}
							className={`rounded-full   hover:bg-zinc-300   p-3 md:p-4 cursor-pointer  mx-4 md:mx-8  ${
								isDark
									? 'text-white bg-gradient'
									: 'bg-white text-zinc-600  shadow-gray-400 shadow-lg'
							}  `}
						>
							<FaGithub size={32} />
						</motion.div>
						<motion.div
							variants={item}
							whileHover={{
								scale: 1.1,
								transition: {
									duration: 0.2,
									ease: 'easeInOut',
								},
							}}
							className={`rounded-full   hover:bg-zinc-300   p-3 md:p-4 cursor-pointer  mx-4 md:mx-8  ${
								isDark
									? 'text-white bg-gradient '
									: 'bg-white text-zinc-600  shadow-gray-400 shadow-lg'
							}  `}
						>
							<AiOutlineMail size={32} />
						</motion.div>
						<motion.div
							whileHover={{
								scale: 1.1,
								transition: {
									duration: 0.2,
									ease: 'easeInOut',
								},
							}}
							variants={item}
							className={`rounded-full   hover:bg-zinc-300   p-3 md:p-4 cursor-pointer  mx-4 md:mx-8  ${
								isDark
									? 'text-white bg-gradient'
									: 'bg-white text-zinc-600  shadow-gray-400 shadow-lg'
							}  `}
						>
							<BsFillPersonLinesFill size={32} />
						</motion.div>
					</div>
				</div>
			</div>
			<div className='flex justify-center animate-iconUpDown mb-10'>
				<Link href={'/#about'}>
					<div className='rounded-full text-zinc-600 flex flex-col justify-center items-center   cursor-pointer '>
						<span className='text-xs '>scroll down</span>
						<HiOutlineChevronDown size={36} />
					</div>
				</Link>
			</div>
		</motion.div>
	);
};

export default Hero;
