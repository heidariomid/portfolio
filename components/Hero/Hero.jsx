import React from 'react';
import {AiOutlineMail} from 'react-icons/ai';
import {FaGithub, FaLinkedinIn} from 'react-icons/fa';
import {motion} from 'framer-motion';
import {useStateValue} from '../../store/Context';
import ProfileImg from '../../public/assets/images/omid-heidari.jpeg';
import Image from 'next/image';
import Link from 'next/link';
import {HiOutlineChevronDown} from 'react-icons/hi';
import resumeIcon from '../../public/assets/images/resume.svg';
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
			id='home'
			className='snap-start  w-full h-screen  mb-[200px] md:mb-[400px] mx-auto flex flex-col items-center text-center '
		>
			<div className='max-w-[1240px] w-full  h-full mx-auto p-2 flex flex-col justify-center items-center '>
				<motion.div
					className={`my-10 rounded-full mx-auto  px-2 pt-2  shadow-innerCenter  shadow-gray-400`}
				>
					<Image
						className='absolute rounded-full'
						src={ProfileImg}
						alt='Profile'
						width={250}
						height={250}
					/>
				</motion.div>
				<div>
					<h1 className={`text-5xl ${isDark ? 'text-white' : 'text-zinc-500'} `}>
						Hi, I&apos;m{' '}
						<span className={` ${isDark ? 'text-white' : 'animate-textColor'}`}>
							Omid
						</span>
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
						A <span className={`${!isDark && 'animate-textColor'}`}>Front-End</span>{' '}
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
								isDark ? 'text-white  ' : 'animate-textColor '
							} font-semibold `}
						>
							passion
						</span>{' '}
						for building beautiful,{' '}
						<span
							className={`${
								isDark ? 'text-white  ' : 'animate-textColor '
							} font-semibold `}
						>
							performant
						</span>
						, and{' '}
						<span
							className={`${
								isDark ? 'text-white  ' : 'animate-textColor '
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
							className={`rounded-full items-center justify-center hover:bg-zinc-300    p-3 md:p-4 cursor-pointer  mx-4 md:mx-8  ${
								isDark
									? 'text-white bg-gradient'
									: 'bg-white text-zinc-600  shadow-gray-400 shadow-lg'
							}  `}
						>
							<span className='text-center  font-bold text-xl'>CV</span>
						</motion.div>
					</div>
				</div>
			</div>
			<div className='hidden  sm:flex justify-center animate-scrollDown mb-10'>
				<Link href={'/#about'}>
					<div
						className={`rounded-full  ${
							isDark ? 'text-white' : 'text-black'
						} flex flex-col justify-center items-center   cursor-pointer `}
					>
						<span className='text-xs '>scroll down</span>
						<HiOutlineChevronDown size={36} />
					</div>
				</Link>
			</div>
		</motion.div>
	);
};

export default Hero;
