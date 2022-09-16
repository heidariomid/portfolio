import Image from 'next/image';
import React from 'react';
import {motion} from 'framer-motion';
import uberEatsMockImg from '../../public/assets/images/projects/uber-eats/mockup-uber-eats.png';
import useStateValue from '../../store/useContext';

const Project = () => {
	const [state] = useStateValue();
	const {isDark} = state.theme;
	const variants = {
		whileInView: {
			transition: {
				staggerChildren: 0.2,
			},
		},
	};
	const item = {
		initial: {opacity: 0},
		whileInView: {
			opacity: 1,
			transition: {duration: 4.8, ease: 'easeInOut'},
		},
	};
	const title = {
		initial: {color: '#272727'},
		whileInView: {
			color: '#fff',
			transition: {duration: 5, ease: 'easeInOut'},
		},
	};
	return (
		<motion.div
			initial='initial'
			whileInView='whileInView'
			variants={variants}
			className={`mb-16  relative col-span-3 flex justify-center items-center  w-full ${
				isDark && 'shadow-center shadow-purple-400'
			} bg-black `}
		>
			<div className='bg-purple-800 text-white absolute top-0 h-full left-0  w-9 justify-center items-center flex flex-col  text-center'>
				<span className='-rotate-90 w-6 justify-center items-center h-full flex'>
					Advanced
				</span>
			</div>
			<div className='grid grid-cols-2'>
				<div className='my-6  flex flex-col justify-between items-center'>
					<h1 className='text-[70px] tracking-wider text-white'>
						Uber <span className='text-green-500'>Eats</span>
					</h1>
					<div className=''>
						<div
							className=' m-4 ml-20 leading-10 flex flex-col  w-full '
							style={{fontFamily: 'Raleway'}}
						>
							<div>
								<motion.span className='text-2xl mr-2 mb-4 ' variants={title}>
									This was a project from
								</motion.span>
								<motion.span
									className='text-2xl mr-2 mb-4 text-center text-red-700'
									variants={title}
								>
									<a className='text-green-500' href=''>
										Nomad Coders{' '}
									</a>{' '}
									and
								</motion.span>
								<motion.span
									className='text-2xl mr-2 mb-4 text-center'
									variants={title}
								>
									i added some extra features and took almost{' '}
									<span className='text-green-500'>two months </span> to finish.
								</motion.span>
								<motion.span className='text-2xl mt-4' variants={title}>
									features that i added <span className='text-xl'>:</span>
								</motion.span>
							</div>
						</div>
						<div className='w-full ml-8' style={{fontFamily: 'Raleway'}}>
							<motion.li variants={item} className='text-white text-lg my-2 ml-12'>
								improve UI/UX for each profile (user, driver, restaurant)
							</motion.li>
						</div>
						<div
							className='grid grid-cols-2 w-full ml-8 text-lg'
							style={{fontFamily: 'Raleway'}}
						>
							<motion.li variants={item} className='text-white my-2 ml-12 '>
								payment gateway
							</motion.li>
							<motion.li variants={item} className='text-white text-md my-2 ml-12'>
								local storage persistence
							</motion.li>
							<motion.li variants={item} className='text-white text-md my-2 ml-12'>
								checkout page
							</motion.li>
							<motion.li variants={item} className='text-white my-2 ml-12'>
								light/dark Mode
							</motion.li>
							<motion.li variants={item} className='text-white my-2 ml-12'>
								order history
							</motion.li>
							<motion.li variants={item} className='text-white my-2 ml-12'>
								cart system
							</motion.li>
							<motion.li variants={item} className='text-white my-2 ml-12'>
								protected pages
							</motion.li>
							<motion.li variants={item} className='text-white my-2 ml-12'>
								etc...
							</motion.li>
						</div>
					</div>
					<div className='mt-2'>
						<button className='btn px-10 py-2 mt-4 '>Demo</button>
						<button className='btn px-10 py-2 mt-4 ml-6'>Code</button>
					</div>
				</div>
				<div className='relative'>
					<div className='absolute -top-16 left-16 '>
						<Image
							className=' group-hover:opacity-10'
							height={800}
							width={600}
							src={uberEatsMockImg}
							alt='ReactJs'
						/>
					</div>
					<div className='absolute top-8 left-9 '>
						<div className='flex py-10 pl-14 flex-col   '>
							<div className='mb-6 animate-iconDown '>
								<Image
									src='/../public/assets/images/skills/graphql.png'
									alt='GraphQl'
									width={'64px'}
									height={'64px'}
								/>
							</div>
							<div className='mb-6 animate-iconRight'>
								<Image
									src='/../public/assets/images/skills/react.png'
									alt='GraphQl'
									width={'64px'}
									height={'64px'}
								/>
							</div>
							<div className='mb-6 animate-iconUp'>
								<Image
									src='/../public/assets/images/skills/nestjs.png'
									alt='GraphQl'
									width={'64px'}
									height={'64px'}
								/>
							</div>
							<div className='mb-6 animate-iconLeft '>
								<Image
									src='/../public/assets/images/skills/typescript.png'
									alt='GraphQl'
									width={'64px'}
									height={'64px'}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  '>
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
			</div> */}
		</motion.div>
	);
};

export default Project;
