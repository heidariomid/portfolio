import Image from 'next/image';
import React from 'react';
import {motion} from 'framer-motion';
import useStateValue from '../../store/useContext';

const Skills = () => {
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
			transition: {duration: 0.8, ease: 'easeInOut'},
		},
	};
	return (
		<motion.div
			id='skills'
			initial='initial'
			whileInView='whileInView'
			variants={variants}
			className='snap-start  w-full h-screen p-2 mb-[200px] md:mb-[400px]  flex items-center justify-center'
		>
			<motion.div className='max-w-[1240px] mx-auto flex flex-col h-full  justify-center '>
				<motion.h2
					initial={{opacity: 0, x: -400}}
					whileInView={{opacity: 1, x: 0}}
					transition={{
						duration: 1.2,
						ease: 'easeInOut',
					}}
					className={`tracking-widest ${
						isDark ? 'text-white' : 'text-zinc-700'
					}  pb-24 uppercase`}
				>
					Skills
				</motion.h2>
				{/* PROJECTS */}
				<motion.div className='max-w-[1240px] mx-auto grid md:grid-cols-2 md:gap-x-8 lg:grid-cols-4  lg:gap-14 '>
					{/* ---------------------------ReactJs-------------------------- */}
					<motion.div
						className={`p-6 rounded-lg ${
							isDark ? ' shadow-down shadow-purple-500' : 'shadow-md'
						} hover:scale-105 ease-in duration-300 relative`}
					>
						<div className='bg-purple-800 text-white absolute top-0 h-full left-0 text-center'>
							<span className='-rotate-90 w-6 justify-center items-center h-full flex'>
								Advanced
							</span>
						</div>
						<div className='grid grid-cols-2 gap-4 justify-center items-center '>
							<div className='pl-5 '>
								<Image
									src={require('../../public/assets/images/skills/react.png')}
									alt='ReactJs'
									width={'64px'}
									height={'64px'}
								/>
							</div>
							<div
								className={`flex flex-col items-center justify-center ${
									isDark ? 'text-white' : 'text-zinc-700'
								} `}
							>
								<h3>ReactJS</h3>
							</div>
						</div>
					</motion.div>
					{/* ---------------------------Redux-------------------------- */}
					<motion.div
						className={`p-6 ${
							isDark ? 'shadow-down shadow-purple-500' : 'shadow-md'
						}  rounded-md hover:scale-105 ease-in duration-300 relative`}
					>
						<div className='bg-purple-800 text-white absolute top-0 h-full left-0    text-center'>
							<span className='-rotate-90 w-6 justify-center items-center h-full flex'>
								Advanced
							</span>
						</div>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src={require('../../public/assets/images/skills/redux.png')}
									alt='react-redux'
									width={'64px'}
									height={'64px'}
								/>
							</div>
							<div
								className={`flex flex-col items-center justify-center ${
									isDark ? 'text-white' : 'text-zinc-700'
								}`}
							>
								<h3>Redux</h3>
							</div>
						</div>
					</motion.div>
					{/* ---------------------------GraphQL-------------------------- */}
					<motion.div
						className={`p-6  ${
							isDark ? 'shadow-down shadow-purple-500' : 'shadow-md'
						} rounded-lg hover:scale-105 ease-in duration-300 relative`}
					>
						<div className='bg-purple-800 text-white absolute top-0 h-full left-0    text-center'>
							<span className='-rotate-90 w-6 justify-center items-center h-full flex'>
								Advanced
							</span>
						</div>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src={require('../../public/assets/images/skills/graphql.png')}
									alt='GraphQl'
									width={'64px'}
									height={'64px'}
								/>
							</div>
							<div
								className={`flex flex-col items-center justify-center ${
									isDark ? 'text-white' : 'text-zinc-700'
								} `}
							>
								<h3>GraphQL</h3>
							</div>
						</div>
					</motion.div>
					{/* ---------------------------Tailwind CSS-------------------------- */}
					<motion.div
						className={`p-6  ${
							isDark ? 'shadow-down shadow-purple-500' : 'shadow-md'
						} rounded-lg hover:scale-105 ease-in duration-300 relative`}
					>
						<div className='bg-purple-800 text-white absolute top-0 h-full left-0    text-center'>
							<span className='-rotate-90 w-6 justify-center items-center h-full flex'>
								Advanced
							</span>
						</div>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src={require('../../public/assets/images/skills/tailwind.png')}
									alt='tailwind'
									width={'64px'}
									height={'64px'}
								/>
							</div>
							<div
								className={`flex flex-col items-center justify-center ${
									isDark ? 'text-white' : 'text-zinc-700'
								} `}
							>
								<h3>Tailwind CSS </h3>
							</div>
						</div>
					</motion.div>
					{/* ---------------------------React Native-------------------------- */}
					<motion.div
						variants={item}
						className={`p-6  ${
							isDark ? 'shadow-down shadow-violet-400' : 'shadow-md'
						} rounded-lg hover:scale-105 ease-in duration-300 relative`}
					>
						<div className='bg-violet-500 text-white absolute top-0 h-full left-0    text-center'>
							<span className='-rotate-90 w-6 justify-center items-center h-full flex'>
								Intermediate
							</span>
						</div>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src={require('../../public/assets/images/skills/react-native.png')}
									alt='React Native'
									width={'94px'}
									height={'64px'}
								/>
							</div>
							<div
								className={`flex flex-col items-center justify-center ${
									isDark ? 'text-white' : 'text-zinc-700'
								} `}
							>
								<h3>React Native</h3>
							</div>
						</div>
					</motion.div>
					{/* ---------------------------Next JS-------------------------- */}

					<motion.div
						variants={item}
						className={`p-6  ${
							isDark ? 'shadow-down shadow-violet-400' : 'shadow-md'
						} rounded-lg hover:scale-105 ease-in duration-300 relative`}
					>
						<div className='bg-violet-500 text-white absolute top-0 h-full left-0    text-center'>
							<span className='-rotate-90 w-6 justify-center items-center h-full flex'>
								Intermediate
							</span>
						</div>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='ml-5'>
								<Image
									className='bg-white rounded-full'
									src={require('../../public/assets/images/skills/next-js.png')}
									alt='NextJs'
									width={'64px'}
									height={'64px'}
								/>
							</div>
							<div
								className={`flex flex-col items-center justify-center ${
									isDark ? 'text-white' : 'text-zinc-700'
								} `}
							>
								<h3>NextJs</h3>
							</div>
						</div>
					</motion.div>
					{/* ---------------------------TypeScript-------------------------- */}
					<motion.div
						variants={item}
						className={`p-6  ${
							isDark ? 'shadow-down shadow-violet-400' : 'shadow-md'
						} rounded-lg hover:scale-105 ease-in duration-300 relative`}
					>
						<div className='bg-violet-500 text-white absolute top-0 h-full left-0    text-center'>
							<span className='-rotate-90 w-6 justify-center items-center h-full flex'>
								Intermediate
							</span>
						</div>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src={require('../../public/assets/images/skills/typescript.png')}
									alt='TypeScript'
									width={'64px'}
									height={'64px'}
								/>
							</div>
							<div
								className={`flex flex-col items-center justify-center ${
									isDark ? 'text-white' : 'text-zinc-700'
								} `}
							>
								<h3>TypeScript</h3>
							</div>
						</div>
					</motion.div>

					{/* ---------------------------Node JS-------------------------- */}
					<motion.div
						variants={item}
						className={`p-6  ${
							isDark ? 'shadow-down shadow-violet-400' : 'shadow-md'
						} rounded-lg hover:scale-105 ease-in duration-300 relative`}
					>
						<div className='bg-violet-500 text-white absolute top-0 h-full left-0    text-center'>
							<span className='-rotate-90 w-6 justify-center items-center h-full flex'>
								Intermediate
							</span>
						</div>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src={require('../../public/assets/images/skills/node.png')}
									alt='NodeJs'
									width={'64px'}
									height={'64px'}
								/>
							</div>
							<div
								className={`flex flex-col items-center justify-center ${
									isDark ? 'text-white' : 'text-zinc-700'
								} `}
							>
								<h3>NodeJs</h3>
							</div>
						</div>
					</motion.div>

					{/* ---------------------------WordPress-------------------------- */}
					<motion.div
						variants={item}
						className={`p-6  ${
							isDark ? 'shadow-down shadow-violet-400' : 'shadow-md'
						} rounded-lg hover:scale-105 ease-in duration-300 relative`}
					>
						<div className='bg-violet-500 text-white absolute top-0 h-full left-0    text-center'>
							<span className='-rotate-90 w-6 justify-center items-center h-full flex'>
								Intermediate
							</span>
						</div>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									className='bg-white rounded-full'
									src={require('../../public/assets/images/skills/wordPress.png')}
									alt='WordPress'
									width={'64px'}
									height={'64px'}
								/>
							</div>
							<div
								className={`flex flex-col items-center justify-center ${
									isDark ? 'text-white' : 'text-zinc-700'
								} `}
							>
								<h3>WordPress</h3>
							</div>
						</div>
					</motion.div>
					{/* ---------------------------GitHub-------------------------- */}
					{/* <motion.div
						variants={item}
						className={`p-6  ${
							isDark ? 'shadow-down shadow-violet-400' : 'shadow-md'
						} rounded-lg hover:scale-105 ease-in duration-300 relative`}
					>
						<div className='bg-violet-500 text-white absolute top-0 h-full left-0    text-center'>
							<span className='-rotate-90 w-6 justify-center items-center h-full flex'>
								Intermediate
							</span>
						</div>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto '>
								<Image
									className='bg-white rounded-full'
									src='/../public/assets/images/skills/github1.png'
									alt='GitHub'
									width={'64px'}
									height={'64px'}
								/>
							</div>
							<div
								className={`flex flex-col items-center justify-center ${
									isDark ? 'text-white' : 'text-zinc-700'
								} `}
							>
								<h3>GitHub</h3>
							</div>
						</div>
					</motion.div> */}
					{/* ---------------------------styled-components-------------------------- */}
					{/* <motion.div
						variants={item}
						className={`p-6 ${
							isDark ? 'shadow-down shadow-violet-400' : 'shadow-md'
						}  rounded-md hover:scale-105 ease-in duration-300 relative`}
					>
						<div className='bg-violet-500 text-white absolute top-0 h-full left-0    text-center'>
							<span className='-rotate-90 w-6 justify-center items-center h-full flex'>
								Intermediate
							</span>
						</div>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto '>
								<Image
									className='bg-white'
									src='/../public/assets/images/skills/styled-components.png'
									alt='styled-components'
									width={'64px'}
									height={'64px'}
								/>
							</div>
							<div
								className={`flex flex-col items-center justify-center ${
									isDark ? 'text-white' : 'text-zinc-700'
								}`}
							>
								<h3>Styled Components</h3>
							</div>
						</div>
					</motion.div> */}
					{/* ---------------------------adobe-photoshop-------------------------- */}
					<motion.div
						variants={item}
						className={`p-6 ${
							isDark ? 'shadow-down shadow-violet-400' : 'shadow-md'
						}  rounded-md hover:scale-105 ease-in duration-300 relative`}
					>
						<div className='bg-violet-500 text-white absolute top-0 h-full left-0    text-center'>
							<span className='-rotate-90 w-6 justify-center items-center h-full flex'>
								Intermediate
							</span>
						</div>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src={require('../../public/assets/images/skills/adobe-photoshop.png')}
									alt='adobe-photoshop'
									width={'64px'}
									height={'64px'}
								/>
							</div>
							<div
								className={`flex flex-col items-center justify-center ${
									isDark ? 'text-white' : 'text-zinc-700'
								}`}
							>
								<h3>Adobe Photoshop</h3>
							</div>
						</div>
					</motion.div>
					{/* ---------------------------adobe-illustrator-------------------------- */}
					<motion.div
						variants={item}
						className={`p-6 ${
							isDark ? 'shadow-down shadow-violet-400' : 'shadow-md'
						}  rounded-md hover:scale-105 ease-in duration-300 relative`}
					>
						<div className='bg-violet-500 text-white absolute top-0 h-full left-0    text-center'>
							<span className='-rotate-90 w-6 justify-center items-center h-full flex'>
								Intermediate
							</span>
						</div>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src={require('../../public/assets/images/skills/adobe-ilustrator.png')}
									alt='adobe-illustrator'
									width={'64px'}
									height={'64px'}
								/>
							</div>
							<div
								className={`flex flex-col items-center justify-center ${
									isDark ? 'text-white' : 'text-zinc-700'
								}`}
							>
								<h3>Adobe Illustrator</h3>
							</div>
						</div>
					</motion.div>
					{/* ---------------------------Nest JS-------------------------- */}
					<motion.div
						variants={item}
						className={`p-6 rounded-lg ${
							isDark ? ' shadow-down shadow-purple-400' : 'shadow-md'
						} hover:scale-105 ease-in duration-300 relative`}
					>
						<div className='bg-purple-400 text-white absolute top-0 h-full left-0    text-center'>
							<span className='-rotate-90 w-6 justify-center items-center h-full flex'>
								Beginner
							</span>
						</div>

						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src={require('../../public/assets/images/skills/nestjs.png')}
									alt='nestjs'
									width={'64px'}
									height={'64px'}
								/>
							</div>
							<div
								className={`flex flex-col items-center justify-center ${
									isDark ? 'text-white' : 'text-zinc-700'
								} `}
							>
								<h3>Nest Js</h3>
							</div>
						</div>
					</motion.div>
					{/* ---------------------------HTML5-------------------------- */}
					{/* <motion.div
						variants={item}
						className={`p-6 ${
							isDark ? 'shadow-down shadow-violet-400' : 'shadow-md'
						}  rounded-md hover:scale-105 ease-in duration-300 relative`}
					>
						<div className='bg-violet-500 text-white absolute top-0 h-full left-0    text-center'>
							<span className='-rotate-90 w-6 justify-center items-center h-full flex'>
								Intermediate
							</span>
						</div>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src='/../public/assets/images/skills/html.png'
									alt='HTML5'
									width={'64px'}
									height={'64px'}
								/>
							</div>
							<div
								className={`flex flex-col items-center justify-center ${
									isDark ? 'text-white' : 'text-zinc-700'
								}`}
							>
								<h3>HTML5</h3>
							</div>
						</div>
					</motion.div> */}
					{/* ---------------------------CSS-------------------------- */}
					{/* <motion.div
						variants={item}
						className={`p-6 ${
							isDark ? 'shadow-down shadow-violet-400' : 'shadow-md'
						}  rounded-md hover:scale-105 ease-in duration-300 relative`}
					>
						<div className='bg-violet-500 text-white absolute top-0 h-full left-0    text-center'>
							<span className='-rotate-90 w-6 justify-center items-center h-full flex'>
								Intermediate
							</span>
						</div>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src='/../public/assets/images/skills/css.png'
									alt='CSS'
									width={'64px'}
									height={'64px'}
								/>
							</div>
							<div
								className={`flex flex-col items-center justify-center ${
									isDark ? 'text-white' : 'text-zinc-700'
								}`}
							>
								<h3>CSS</h3>
							</div>
						</div>
					</motion.div> */}

					{/* ---------------------------mongoDb-------------------------- */}
					{/* <motion.div
						variants={item}
						className={`p-6  ${
							isDark ? 'shadow-down shadow-purple-400' : 'shadow-md'
						} rounded-lg hover:scale-105 ease-in duration-300 relative`}
					>
						<div className='bg-purple-400 text-white absolute top-0 h-full left-0    text-center'>
							<span className='-rotate-90 w-6 justify-center items-center h-full flex'>
								Beginner
							</span>
						</div>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src='/../public/assets/images/skills/mongo.png'
									alt='mongoDb'
									width={'64px'}
									height={'64px'}
								/>
							</div>
							<div
								className={`flex flex-col items-center justify-center ${
									isDark ? 'text-white' : 'text-zinc-700'
								} `}
							>
								<h3>mongoDb</h3>
							</div>
						</div>
					</motion.div> */}
					{/* ---------------------------MySQL-------------------------- */}
					{/* <motion.div
						variants={item}
						className={`p-6  ${
							isDark ? 'shadow-down shadow-purple-400' : 'shadow-md'
						} rounded-lg hover:scale-105 ease-in duration-300 relative`}
					>
						<div className='bg-purple-400 text-white absolute top-0 h-full left-0    text-center'>
							<span className='-rotate-90 w-6 justify-center items-center h-full flex'>
								Beginner
							</span>
						</div>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src='/../public/assets/images/skills/sql.png'
									alt='MySQL'
									width={'64px'}
									height={'64px'}
								/>
							</div>
							<div
								className={`flex flex-col items-center justify-center ${
									isDark ? 'text-white' : 'text-zinc-700'
								} `}
							>
								<h3>MySQL</h3>
							</div>
						</div>
					</motion.div> */}

					{/* ---------------------------PostgreSql-------------------------- */}
					{/* <motion.div
						variants={item}
						className={`p-6  ${
							isDark ? 'shadow-down shadow-purple-400' : 'shadow-md'
						} rounded-lg hover:scale-105 ease-in duration-300 relative`}
					>
						<div className='bg-purple-400 text-white absolute top-0 h-full left-0    text-center'>
							<span className='-rotate-90 w-6 justify-center items-center h-full flex'>
								Beginner
							</span>
						</div>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src='/../public/assets/images/skills/postgresql.png'
									alt='postgresql'
									width={'64px'}
									height={'64px'}
								/>
							</div>
							<div
								className={`flex flex-col items-center justify-center ${
									isDark ? 'text-white' : 'text-zinc-700'
								} `}
							>
								<h3>PostgreSql</h3>
							</div>
						</div>
					</motion.div> */}
					{/* ---------------------------Docker-------------------------- */}
					{/* <motion.div
						variants={item}
						className={`p-6  ${
							isDark ? 'shadow-down shadow-purple-400' : 'shadow-md'
						} rounded-lg hover:scale-105 ease-in duration-300 relative`}
					>
						<div className='bg-purple-400 text-white absolute top-0 h-full left-0    text-center'>
							<span className='-rotate-90 w-6 justify-center items-center h-full flex'>
								Beginner
							</span>
						</div>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src='/../public/assets/images/skills/docker.png'
									alt='docker'
									width={'64px'}
									height={'64px'}
								/>
							</div>
							<div
								className={`flex flex-col items-center justify-center ${
									isDark ? 'text-white' : 'text-zinc-700'
								} `}
							>
								<h3>Docker</h3>
							</div>
						</div>
					</motion.div> */}
					{/* ---------------------------Redis-------------------------- */}
					{/* <motion.div
						variants={item}
						className={`p-6  ${
							isDark ? 'shadow-down shadow-purple-400' : 'shadow-md'
						} rounded-lg hover:scale-105 ease-in duration-300 relative`}
					>
						<div className='bg-purple-400 text-white absolute top-0 h-full left-0    text-center'>
							<span className='-rotate-90 w-6 justify-center items-center h-full flex'>
								Beginner
							</span>
						</div>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src='/../public/assets/images/skills/redis.png'
									alt='redis'
									width={'65px'}
									height={'64px'}
								/>
							</div>
							<div
								className={`flex flex-col items-center justify-center ${
									isDark ? 'text-white' : 'text-zinc-700'
								} `}
							>
								<h3>Redis</h3>
							</div>
						</div>
					</motion.div> */}
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

export default Skills;
