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
			<div className='grid md:grid-cols-2 '>
				{/* <div className='bg-purple-800 text-white absolute top-0 h-full md:text-2xl left-0  w-9 justify-center items-center flex flex-col  text-center'>
					<span className='-rotate-90 w-6 justify-center items-center h-full flex'>
						Advanced
					</span>
				</div> */}
				<div className='md:mb-6 mt-6   flex flex-col justify-between  items-center'>
					<h1 className='md:text-[70px]  tracking-wider text-white'>
						Uber <span className='text-green-500'>Eats</span>
					</h1>
					<div className=''>
						<div
							className=' p-4 md:ml-20 md:leading-10 flex flex-col  w-full '
							style={{fontFamily: 'Raleway'}}
						>
							<div className=''>
								<motion.span
									className='md:text-2xl text-lg md:mr-2 mb-4 '
									variants={title}
								>
									This was a project from
								</motion.span>
								<motion.span
									className='md:text-2xl text-lg mr-2 mb-4 text-center text-red-700'
									variants={title}
								>
									<a className='text-green-500' href=''>
										Nomad Coders{' '}
									</a>{' '}
									and
								</motion.span>
								<motion.span
									className='md:text-2xl text-lg mr-2 mb-4 text-center'
									variants={title}
								>
									i added some extra features and took almost{' '}
									<span className='text-green-500'>two months </span> to finish.
								</motion.span>
								<motion.span className='md:text-2xl text-lg mt-4' variants={title}>
									features that i added <span className='text-xl'>:</span>
								</motion.span>
							</div>
						</div>
						<div className='grid grid-cols-3'>
							<div className=' col-span-2 w-full '>
								<div className='w-full md:ml-8 ' style={{fontFamily: 'Raleway'}}>
									<motion.li
										variants={item}
										className='text-white md:text-lg my-2 md:ml-12 ml-5'
									>
										improve UI/UX{' '}
										<span className='hidden md:flex'>
											for each profile (user, driver, restaurant)
										</span>
									</motion.li>
								</div>
								<div
									className='grid md:grid-cols-2 w-full md:ml-8 md:text-lg'
									style={{fontFamily: 'Raleway'}}
								>
									<motion.li
										variants={item}
										className='text-white my-2 md:ml-12 ml-5 '
									>
										payment gateway
									</motion.li>
									<motion.li
										variants={item}
										className='text-white md:text-md my-2 md:ml-12 ml-5'
									>
										local storage persistence
									</motion.li>
									<motion.li
										variants={item}
										className='text-white md:text-md my-2 md:ml-12 ml-5'
									>
										checkout page
									</motion.li>
									<motion.li
										variants={item}
										className='text-white my-2 md:ml-12 ml-5'
									>
										light/dark Mode
									</motion.li>
									<motion.li
										variants={item}
										className='text-white my-2 md:ml-12 ml-5'
									>
										order history
									</motion.li>
									<motion.li
										variants={item}
										className='text-white my-2 md:ml-12 ml-5'
									>
										cart system
									</motion.li>
									<motion.li
										variants={item}
										className='text-white my-2 md:ml-12 ml-5'
									>
										protected pages
									</motion.li>
									<motion.li
										variants={item}
										className='text-white my-2 md:ml-12 ml-5'
									>
										etc...
									</motion.li>
								</div>
							</div>

							<div className='flex py-10 pl-8 flex-col   '>
								<div className='mb-6 w-[54px] h-[54px] md:w-[64px] md:h-[64px]  animate-iconDown '>
									<Image
										src={require('../../public/assets/images/skills/graphql.png')}
										alt='GraphQl'
										layout='responsive'
									/>
								</div>
								<div className='mb-6 w-[54px] h-[54px] md:w-[64px] md:h-[64px] animate-iconRight'>
									<Image
										src={require('../../public/assets/images/skills/react.png')}
										alt='GraphQl'
										layout='responsive'
									/>
								</div>
								<div className='mb-6 w-[54px] h-[54px] md:w-[64px] md:h-[64px] animate-iconUp'>
									<Image
										src={require('../../public/assets/images/skills/nestjs.png')}
										alt='GraphQl'
										layout='responsive'
									/>
								</div>
								<div className='mb-6 w-[54px] h-[54px] md:w-[64px] md:h-[64px] animate-iconLeft '>
									<Image
										src={require('../../public/assets/images/skills/typescript.png')}
										alt='GraphQl'
										layout='responsive'
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='relative'>
					<div className='md:absolute md:-top-16 md:left-16 -mt-16 md:-mt-0'>
						<Image
							className=' group-hover:opacity-10'
							height={800}
							width={600}
							src={uberEatsMockImg}
							alt='ReactJs'
						/>
					</div>
					{/* <div className='absolute md:top-8 -top-[380px] left-56 md:left-9 '>
						<div className='flex py-10 pl-14 flex-col   '>
							<div className='mb-6 w-[54px] h-[54px] md:w-[64px] md:h-[64px]  animate-iconDown '>
								<Image
									src={require('../../public/assets/images/skills/graphql.png')}
									alt='GraphQl'
									layout='responsive'
								/>
							</div>
							<div className='mb-6 w-[54px] h-[54px] md:w-[64px] md:h-[64px] animate-iconRight'>
								<Image
									src={require('../../public/assets/images/skills/react.png')}
									alt='GraphQl'
									layout='responsive'
								/>
							</div>
							<div className='mb-6 w-[54px] h-[54px] md:w-[64px] md:h-[64px] animate-iconUp'>
								<Image
									src={require('../../public/assets/images/skills/nestjs.png')}
									alt='GraphQl'
									layout='responsive'
								/>
							</div>
							<div className='mb-6 w-[54px] h-[54px] md:w-[64px] md:h-[64px] animate-iconLeft '>
								<Image
									src={require('../../public/assets/images/skills/typescript.png')}
									alt='GraphQl'
									layout='responsive'
								/>
							</div>
						</div>
					</div> */}
				</div>
				<div className='mt-8 mb-14 text-center mx-auto'>
					<button className='btn px-10 py-2 mt-4 '>Demo</button>
					<button className='btn px-10 py-2 mt-4 ml-6'>Code</button>
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
