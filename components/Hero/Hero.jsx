import React from 'react';
import {AiOutlineMail} from 'react-icons/ai';
import {FaGithub} from 'react-icons/fa';
import {motion} from 'framer-motion';
import useStateValue from '../../store/useContext';
import ProfileImg from '../../public/assets/images/omid-heidari.png';
import Image from 'next/image';
import Link from 'next/link';
import {HiOutlineChevronDown} from 'react-icons/hi';
import resumeImg from '../../public/assets/images/resume.svg';
import resumeWhiteImg from '../../public/assets/images/resume-white.svg';
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
			className='snap-start w-full h-screen mx-auto flex flex-col items-center justify-center text-center'
		>
			<div className=' max-w-[1240px] w-full  h-full mx-auto p-2 flex flex-col justify-center items-center '>
				<motion.div className={` mb-10 rounded-full mx-auto block  px-2 p-2 w-48 md:w-64 shadow-innerCenter  shadow-gray-400`}>
					<Image className='absolute rounded-full ' src={ProfileImg} alt='Profile' layout='responsive' />
				</motion.div>
				<div>
					<h1 className={`text-3xl md:text-5xl ${isDark ? 'text-white' : 'text-zinc-500'} `}>
						Hi, I&apos;m <span className={` ${isDark ? 'text-white' : 'animate-textColor'}`}>Omid</span>
					</h1>
					<motion.h2
						initial={{opacity: 0, y: -10}}
						whileInView={{opacity: 1, y: 0}}
						transition={{
							duration: 1.2,
							ease: 'easeInOut',
						}}
						className={`  pt-4 pb-2 ${isDark ? 'text-gradient' : 'text-zinc-500'} tracking-wide`}
					>
						A <span className={`${!isDark && 'animate-textColor'}`}>Software</span> Developer
					</motion.h2>
					<p className={`max-w-[60%] mx-auto text-center  md:text-xl py-4 ${isDark ? 'text-zinc-300' : 'text-zinc-500'}`}>
						Transforming your ideas into <span className={`${isDark ? 'text-white  ' : 'animate-textColor '} font-semibold `}>beautiful</span> and{' '}
						<span className={`${isDark ? 'text-white  ' : 'animate-textColor '} font-semibold `}>high-performance</span> web applications with advanced{' '}
						<span className={`${isDark ? 'text-white  ' : 'animate-textColor '} font-semibold `}>front-end</span> skills{' '}
					</p>

					<div className='flex mx-auto items-center justify-center py-5 w-full '>
						<Link href='https://www.linkedin.com/in/heidariomid/' passHref>
							<a title='linkedin' target='_blank' rel='noopener noreferrer'>
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
										isDark ? 'text-white bg-gradient' : 'bg-white text-zinc-600  shadow-gray-400 shadow-lg'
									}  `}
								>
									<svg
										className='h-6 w-6 md:h-8 md:w-8'
										stroke='currentColor'
										fill='currentColor'
										strokeWidth='0'
										viewBox='0 0 448 512'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path d='M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z'></path>
									</svg>
								</motion.div>
							</a>
						</Link>
						<Link href='https://github.com/heidariomid' passHref>
							<a title='github' target='_blank' rel='noopener noreferrer'>
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
										isDark ? 'text-white bg-gradient' : 'bg-white text-zinc-600  shadow-gray-400 shadow-lg'
									}  `}
								>
									<FaGithub className='h-6 w-6 md:h-8 md:w-8' />
								</motion.div>
							</a>
						</Link>
						<Link href='mailto:heidariomid.dev@gmail.com' passHref>
							<a title='mail' target='_blank' rel='noopener noreferrer'>
								<motion.div
									variants={item}
									whileHover={{
										scale: 1.1,
										transition: {
											duration: 0.2,
											ease: 'easeInOut',
										},
									}}
									className={`rounded-full  hover:bg-zinc-300   p-3 md:p-4 cursor-pointer  mx-4 md:mx-8  ${
										isDark ? 'text-white bg-gradient ' : 'bg-white text-zinc-600  shadow-gray-400 shadow-lg'
									}  `}
								>
									<AiOutlineMail className='h-6 w-6 md:h-8 md:w-8' />
								</motion.div>
							</a>
						</Link>
						<Link href='/assets/resume.pdf' passHref>
							<a title='resume' target='_blank' rel='noopener noreferrer'>
								<motion.div
									whileHover={{
										scale: 1.1,
										transition: {
											duration: 0.2,
											ease: 'easeInOut',
										},
									}}
									variants={item}
									className={`flex rounded-full   hover:bg-zinc-300   p-[10px] md:p-4 cursor-pointer  mx-4 md:mx-8  ${
										isDark ? 'text-white bg-gradient ' : 'bg-white text-zinc-600  shadow-gray-400 shadow-lg'
									}  `}
								>
									<Image className='justify-center  items-center text-center ' src={isDark ? resumeWhiteImg : resumeImg} alt='resume' width={32} height={32} />
								</motion.div>
							</a>
						</Link>
					</div>
				</div>
			</div>
			<div className='hidden  sm:flex justify-center animate-scrollDown mb-10'>
				<Link href={'/#about'}>
					<div className={`rounded-full  ${isDark ? 'text-white' : 'text-black'} flex flex-col justify-center items-center   cursor-pointer `}>
						<span className='text-xs '>scroll down</span>
						<HiOutlineChevronDown size={36} />
					</div>
				</Link>
			</div>
		</motion.div>
	);
};

export default Hero;
