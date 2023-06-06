import Image from 'next/image';
import React from 'react';
// import Me from '../../public/assets/images/code.gif';
import {motion} from 'framer-motion';
import useStateValue from '../../store/useContext';
const About = () => {
	const [state] = useStateValue();
	const {isDark} = state.theme;

	return (
		<div
			id='about'
			className={`snap-start w-full md:h-screen h-fit mx-auto flex flex-col items-center justify-center bg-transparent ${
				isDark ? 'bg-zinc-900' : 'bg-gray-200'
			}  `}
		>
			<motion.div className=' max-w-[1240px] mx-auto md:grid grid-cols-3 gap-8   '>
				<motion.div className='col-span-2 '>
					<motion.h2
						initial={{opacity: 0, x: -400}}
						whileInView={{opacity: 1, x: 0}}
						transition={{
							duration: 1.2,
							ease: 'easeInOut',
						}}
						className={`tracking-widest mt-10 md:mt-0 	${isDark ? 'text-white' : 'text-zinc-700'} px-10 md:px-0  uppercase `}
					>
						About Me
					</motion.h2>
					<p className={` ${isDark ? 'text-zinc-200' : 'text-zinc-600'} md:text-2xl md:py-4  text-justify m-10 md:m-0  md:leading-loose  pr-4 `}>
						Software developer with expertise in front-end technologies, including{' '}
						<span className={` ${isDark ? 'text-white' : 'text-zinc-800'} font-semibold `}>ReactJS</span>,{' '}
						<span className={` ${isDark ? 'text-white' : 'text-zinc-800'} font-semibold `}>Next.js</span>,{' '}
						<span className={` ${isDark ? 'text-white' : 'text-zinc-800'} font-semibold `}>TypeScript</span>,{' '}
						<span className={` ${isDark ? 'text-white' : 'text-zinc-800'} font-semibold `}>Redux</span>,{' '}
						<span className={` ${isDark ? 'text-white' : 'text-zinc-800'} font-semibold `}>GraphQL</span>, and{' '}
						<span className={` ${isDark ? 'text-white' : 'text-zinc-800'} font-semibold `}>Tailwind CSS</span>. Skilled in developing intuitive and
						visually appealing user interfaces, my aim is to deliver clean and structured code that will be easy to maintain in the future and build
						for you scalable web applications. I am continuously dedicated to learning and staying up-to-date with the latest industry trends in
						order to deliver the best possible service and improve my skills as a developer.
					</p>
				</motion.div>
				<motion.div
					className={`hidden bg-clip-content bg-cover md:p-[15px] m-[45px]  ${
						isDark ? 'border-zinc-700' : 'border-gray-200'
					} md:m-0 md:border-4 ease-in-out duration-1000`}
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
						{/* <Image className='absolute' src={Me} alt='Profile' layout='fill' objectFit='cover' unoptimized={true} /> */}

						{/* <video className='absolute ' src={Me} alt='Profile' autoPlay loop muted /> */}
					</motion.div>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default About;
