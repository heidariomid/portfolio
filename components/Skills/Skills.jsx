import Image from 'next/image';
import React from 'react';
import {motion} from 'framer-motion';

const Skills = () => {
	return (
		<motion.div
			id='skills'
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
					className='tracking-widest text-zinc-700  pb-24 uppercase'
				>
					Skills
				</motion.h2>
				<div className='max-w-[1240px] mx-auto grid md:grid-cols-2 md:gap-x-8 lg:grid-cols-4  lg:gap-x-14 gap-y-16 '>
					<div className='p-6 shadow-md rounded-lg hover:scale-105 ease-in duration-300 relative'>
						<div className='bg-green-700 text-white absolute top-0 h-full left-0    text-center'>
							<span className='-rotate-90 w-6 justify-center items-center h-full flex'>
								Expert
							</span>
						</div>
						<div className='grid grid-cols-2 gap-4 justify-center items-center '>
							<div className='pl-5 '>
								<Image
									src='/../public/assets/images/skills/react.png'
									alt='ReactJs'
									width={'64px'}
									height={'64px'}
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>ReactJs</h3>
							</div>
						</div>
					</div>

					<div className='p-6 shadow-md rounded-lg hover:scale-105 ease-in duration-300 relative'>
						<div className='bg-yellow-600 rounded-r-3xl shadow-xl  border-r-[6px] border-gray-300 text-white absolute top-0 h-full left-0    text-center'>
							<div className='-rotate-90 w-6  justify-center items-center h-full font-medium flex'>
								Medium
							</div>
						</div>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='pl-5'>
								<Image
									src='/../public/assets/images/skills/nextjs.png'
									alt='NextJs'
									width={'64px'}
									height={'64px'}
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>NextJs</h3>
							</div>
						</div>
					</div>
					<div className='p-6 shadow-md rounded-lg hover:scale-105 ease-in duration-300 relative'>
						<span className='bg-yellow-400 text-white px-2 absolute bottom-0  left-0 w-full text-center'>
							Low Level
						</span>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src='/../public/assets/images/skills/node.png'
									alt='NodeJs'
									width={'64px'}
									height={'64px'}
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>NodeJs</h3>
							</div>
						</div>
					</div>

					<div className='p-6 shadow-md rounded-lg hover:scale-105 ease-in duration-300 relative'>
						<span className='bg-green-600 text-white px-2 absolute bottom-0 rounded-t-3xl shadow-xl  border-t-[4px] border-gray-300  left-0 w-full text-center'>
							High level
						</span>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src='/../public/assets/images/skills/tailwind.png'
									alt='tailwind'
									width={'64px'}
									height={'64px'}
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>Tailwind </h3>
							</div>
						</div>
					</div>
					<div className='p-6 shadow-md rounded-lg hover:scale-105 ease-in duration-300 relative'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src='/../public/assets/images/skills/nestjs.png'
									alt='nestjs'
									width={'64px'}
									height={'64px'}
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>Nest Js</h3>
							</div>
						</div>
					</div>
					<div className='p-6 shadow-md rounded-lg hover:scale-105 ease-in duration-300 relative'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src='/../public/assets/images/skills/graphql.png'
									alt='GraphQl'
									width={'64px'}
									height={'64px'}
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>GraphQL</h3>
							</div>
						</div>
					</div>
					<div className='p-6 shadow-md rounded-lg hover:scale-105 ease-in duration-300 relative'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src='/../public/assets/images/skills/docker.png'
									alt='docker'
									width={'64px'}
									height={'64px'}
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>Docker</h3>
							</div>
						</div>
					</div>
					<div className='p-6 shadow-md rounded-lg hover:scale-105 ease-in duration-300 relative'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src='/../public/assets/images/skills/postgresql.png'
									alt='postgresql'
									width={'64px'}
									height={'64px'}
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>PostgreSql</h3>
							</div>
						</div>
					</div>
					<div className='p-6 shadow-md rounded-lg hover:scale-105 ease-in duration-300 relative'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src='/../public/assets/images/skills/redis.png'
									alt='redis'
									width={'65px'}
									height={'64px'}
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>Redis</h3>
							</div>
						</div>
					</div>
					<div className='p-6 shadow-md rounded-lg hover:scale-105 ease-in duration-300 relative'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src='/../public/assets/images/skills/mongo.png'
									alt='mongoDb'
									width={'64px'}
									height={'64px'}
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>mongoDb</h3>
							</div>
						</div>
					</div>
					<div className='p-6 shadow-md rounded-lg hover:scale-105 ease-in duration-300 relative'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src='/../public/assets/images/skills/sql.png'
									alt='MySQL'
									width={'64px'}
									height={'64px'}
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>MySQL</h3>
							</div>
						</div>
					</div>
					<div className='p-6 shadow-md rounded-lg hover:scale-105 ease-in duration-300 relative'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src='/../public/assets/images/skills/firebase.png'
									alt='FireBase'
									width={'64px'}
									height={'64px'}
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>FireBase</h3>
							</div>
						</div>
					</div>
					<div className='p-6 shadow-md rounded-lg hover:scale-105 ease-in duration-300 relative'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src='/../public/assets/images/skills/github1.png'
									alt='GitHub'
									width={'64px'}
									height={'64px'}
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>GitHub</h3>
							</div>
						</div>
					</div>
					<div className='p-6 shadow-md rounded-lg hover:scale-105 ease-in duration-300 relative'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src='/../public/assets/images/skills/javascript.png'
									alt='JavaScript'
									width={'64px'}
									height={'64px'}
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>JavaScript</h3>
							</div>
						</div>
					</div>

					<div className='p-6 shadow-md rounded-lg hover:scale-105 ease-in duration-300 relative'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src='/../public/assets/images/skills/html.png'
									alt='HTML5'
									width={'64px'}
									height={'64px'}
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>HTML5</h3>
							</div>
						</div>
					</div>
					<div className='p-6 shadow-md rounded-lg hover:scale-105 ease-in duration-300 relative'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src='/../public/assets/images/skills/css.png'
									alt='CSS'
									width={'64px'}
									height={'64px'}
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>CSS</h3>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
};

export default Skills;
