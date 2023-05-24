import React, {lazy, Suspense} from 'react';
import Image from 'next/image';
import {motion} from 'framer-motion';
import useStateValue from '../../store/useContext';
// const GifAnimation = lazy(() => import('../../public/assets/images/code.gif'));
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
						Software developer with advanced skills in <span className={` ${isDark ? 'text-white' : 'text-zinc-800'} font-semibold `}>ReactJS</span>
						, <span className={` ${isDark ? 'text-white' : 'text-zinc-800'} font-semibold `}>Next.js</span>,{' '}
						<span className={` ${isDark ? 'text-white' : 'text-zinc-800'} font-semibold `}>Redux</span>,{' '}
						<span className={` ${isDark ? 'text-white' : 'text-zinc-800'} font-semibold `}>GraphQL</span>, and{' '}
						<span className={` ${isDark ? 'text-white' : 'text-zinc-800'} font-semibold `}>Tailwind CSS</span>. While my focus is on the front-end,
						I have a good understanding of back-end technologies such as{' '}
						<span className={` ${isDark ? 'text-white' : 'text-zinc-800'} font-semibold `}>Node.js</span>,{' '}
						<span className={` ${isDark ? 'text-white' : 'text-zinc-800'} font-semibold `}>TypeScript</span>, and{' '}
						<span className={` ${isDark ? 'text-white' : 'text-zinc-800'} font-semibold `}>Design Patterns</span>. While I have not yet had the
						opportunity to work for a company, I have dedicated myself to advancing my skills through self-learning in academies like{' '}
						<a
							className={` ${isDark ? 'text-white' : 'text-zinc-800'} font-semibold `}
							href='https://7learn.com/'
							target={'_blank'}
							rel='noreferrer'
						>
							7Learn
						</a>{' '}
						and{' '}
						<a
							className={` ${isDark ? 'text-white' : 'text-zinc-800'} font-semibold `}
							href='https://udemy.com/'
							target={'_blank'}
							rel='noreferrer'
						>
							Udemy
						</a>{' '}
						and have completed many advanced personal projects. I prefer working on the front end because it allows me to see the finished product
						and the design process. While I enjoy the flexibility of remote work, I am also excited about the opportunity to work collaboratively as
						part of a dynamic and fast-paced team. My goal is to leverage my skills and experience to deliver exceptional results in an environment
						that values innovation, teamwork, and professional growth.
					</p>
				</motion.div>
				<motion.div
					className={`bg-clip-content bg-cover md:p-[15px] m-[45px]  ${
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
						{/* <Image className='absolute' src={GifAnimation} alt='Profile' layout='fill' objectFit='cover' unoptimized={true} /> */}
					</motion.div>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default About;
