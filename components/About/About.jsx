import Image from 'next/image';
import React from 'react';
import MeImg from '../../public/assets/images/omid-heidari.png';
import Me from '../../public/assets/images/coder.gif';
import {motion} from 'framer-motion';
import useStateValue from '../../store/useContext';
const About = () => {
	const [state] = useStateValue();
	const {isDark} = state.theme;

	return (
		<div id='about' className='snap-start w-full md:h-screen h-fit mx-auto flex flex-col items-center justify-center bg-transparent'>
			<motion.div className=' max-w-[1240px] mx-auto md:grid grid-cols-3 gap-8  '>
				<motion.div className='col-span-2 '>
					<motion.h2
						initial={{opacity: 0, x: -400}}
						whileInView={{opacity: 1, x: 0}}
						transition={{
							duration: 1.2,
							ease: 'easeInOut',
						}}
						className={`tracking-widest 	${isDark ? 'text-white' : 'text-zinc-700'} px-10 md:px-0  uppercase `}
					>
						About Me
					</motion.h2>
					<p className={` ${isDark ? 'text-zinc-200' : 'text-zinc-600'} md:text-2xl md:py-4  text-justify m-10 md:m-0  md:leading-loose  pr-4 `}>
						For years I have searched for a career that would provide me happiness and the freedom I crave. Ever since I struggled to find something that fulfilled my
						professional life. Eventually I began studying and educating myself on web development academies like{' '}
						<a className={` ${isDark ? 'text-white' : 'text-zinc-800'} font-semibold `} href='https://7learn.com/' target={'_blank'} rel='noreferrer'>
							7Learn
						</a>
						,{' '}
						<a className={` ${isDark ? 'text-white' : 'text-zinc-800'} font-semibold `} href='https://www.udemy.com/' target={'_blank'} rel='noreferrer'>
							Udemy
						</a>
						,{' '}
						<a className={` ${isDark ? 'text-white' : 'text-zinc-800'} font-semibold `} href='https://frontendmasters.com/' target={'_blank'} rel='noreferrer'>
							Frontend Masters
						</a>
						, etc ... . Now, I seek to become a web developer and cannot wait to provide my services and skills to the world. I am always seeking to learn new things
						and strive for success. I have experience working with a variety of technologies and languages, but I am most passionate about JavaScript and React.
					</p>
				</motion.div>
				<motion.div
					className={`bg-clip-content bg-cover md:p-[15px] m-[45px]  ${isDark ? 'border-zinc-700' : 'border-gray-200'} md:m-0 md:border-4 ease-in-out duration-1000`}
				>
					<motion.div
						className='relative md:flex md:h-full w-full h-96 '
						initial={{opacity: 0, scale: 0.6}}
						whileInView={{opacity: 1, scale: 1}}
						transition={{
							duration: 1.2,
							ease: 'easeIn',
						}}
					>
						<Image className='absolute ' src={Me} alt='Profile' layout='fill' objectFit='cover' />
						{/* <video className='absolute ' src={Me} alt='Profile' autoPlay loop muted /> */}
					</motion.div>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default About;
