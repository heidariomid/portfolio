import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import twitterImg from '../../public/assets/images/projects/nwitter.png';
import sampleImg from '../../public/assets/images/projects/uber-eats.jpeg';
import instaImg from '../../public/assets/images/projects/Final_ReactJS_Masterclass.png';
import prismaImg from '../../public/assets/images/projects/prisma2_9xLkR2U.png';
import {motion} from 'framer-motion';
import useStateValue from '../../store/useContext';
import Project from './Project';

const Projects = () => {
	const [state] = useStateValue();
	const {isDark} = state.theme;
	return (
		<div
			id='projects'
			className='snap-start  w-full h-screen p-2 mb-[200px] md:mb-[400px]  flex items-center justify-center'
		>
			<motion.div className='max-w-[1240px] mx-auto px-2 py-16'>
				<motion.h2
					initial={{opacity: 0, x: -400}}
					whileInView={{opacity: 1, x: 0}}
					transition={{
						duration: 1.2,
						ease: 'easeInOut',
					}}
					className={`tracking-widest ${
						isDark ? 'text-white' : 'text-zinc-700'
					}  pb-12 uppercase`}
				>
					Projects
				</motion.h2>
				<div className=' grid md:grid-cols-3  gap-x-8 gap-y-10'>
					<Project />

					<div className='relative flex justify-center items-center h-auto w-full  group hover:bg-zinc-800 hover:ease-in hover:duration-200 '>
						<div className='bg-purple-800 text-white absolute top-0 h-full left-0  w-9 justify-center items-center flex flex-col  text-center'>
							<span className='-rotate-90 w-6 justify-center items-center h-full flex'>
								Advanced
							</span>
						</div>
						<Image className=' group-hover:opacity-10' src={prismaImg} alt='ReactJs' />
						<div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  '>
							<motion.h3
								initial={{opacity: 0, x: -4}}
								whileInView={{opacity: 1, x: 0}}
								transition={{
									duration: 0.7,
									ease: 'easeInOut',
								}}
								className='text-4xl pb-8 text-white text-center tracking-wider '
							>
								Uber Eats
							</motion.h3>
							<motion.p
								initial={{opacity: 0, x: -6}}
								whileInView={{opacity: 1, x: 0}}
								transition={{
									duration: 0.8,
									ease: 'easeInOut',
								}}
								className='pb-10  text-white text-center '
							>
								This App Created with ReactJs and NextJs and TailwindCss
							</motion.p>
							<Link href={'/projects/uber-eats'}>
								<motion.p
									initial={{opacity: 0, x: -10}}
									whileInView={{opacity: 1, x: 0}}
									transition={{
										duration: 0.9,
										ease: 'easeInOut',
									}}
									className='text-center p-1 rounded-lg bg-white text-zinc-800 font-bold text-lg cursor-pointer '
								>
									more info
								</motion.p>
							</Link>
						</div>
					</div>
					<div className='relative flex justify-center items-center h-auto w-full  group hover:bg-zinc-800 hover:ease-in hover:duration-200 '>
						<Image className=' group-hover:opacity-10' src={instaImg} alt='ReactJs' />
						<div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  '>
							<motion.h3
								initial={{opacity: 0, x: -4}}
								whileInView={{opacity: 1, x: 0}}
								transition={{
									duration: 0.7,
									ease: 'easeInOut',
								}}
								className='text-4xl pb-8 text-white text-center tracking-wider '
							>
								Uber Eats
							</motion.h3>
							<motion.p
								initial={{opacity: 0, x: -6}}
								whileInView={{opacity: 1, x: 0}}
								transition={{
									duration: 0.8,
									ease: 'easeInOut',
								}}
								className='pb-10  text-white text-center '
							>
								This App Created with ReactJs and NextJs and TailwindCss
							</motion.p>
							<Link href={'/projects/uber-eats'}>
								<motion.p
									initial={{opacity: 0, x: -10}}
									whileInView={{opacity: 1, x: 0}}
									transition={{
										duration: 0.9,
										ease: 'easeInOut',
									}}
									className='text-center p-1 rounded-lg bg-white text-zinc-800 font-bold text-lg cursor-pointer '
								>
									more info
								</motion.p>
							</Link>
						</div>
					</div>
					<div className='relative flex justify-center items-center h-auto w-full  group hover:bg-zinc-800 hover:ease-in hover:duration-200 '>
						<Image className=' group-hover:opacity-10' src={twitterImg} alt='ReactJs' />
						<div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  '>
							<motion.h3
								initial={{opacity: 0, x: -4}}
								whileInView={{opacity: 1, x: 0}}
								transition={{
									duration: 0.7,
									ease: 'easeInOut',
								}}
								className='text-4xl pb-8 text-white text-center tracking-wider '
							>
								Uber Eats
							</motion.h3>
							<motion.p
								initial={{opacity: 0, x: -6}}
								whileInView={{opacity: 1, x: 0}}
								transition={{
									duration: 0.8,
									ease: 'easeInOut',
								}}
								className='pb-10  text-white text-center '
							>
								This App Created with ReactJs and NextJs and TailwindCss
							</motion.p>
							<Link href={'/projects/uber-eats'}>
								<motion.p
									initial={{opacity: 0, x: -10}}
									whileInView={{opacity: 1, x: 0}}
									transition={{
										duration: 0.9,
										ease: 'easeInOut',
									}}
									className='text-center p-1 rounded-lg bg-white text-zinc-800 font-bold text-lg cursor-pointer '
								>
									more info
								</motion.p>
							</Link>
						</div>
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default Projects;
