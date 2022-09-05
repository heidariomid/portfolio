import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import uberEatsImg from '../../public/assets/images/projects/uber-eats.jpeg';
import twitterImg from '../../public/assets/images/projects/nwitter.png';
import instaImg from '../../public/assets/images/projects/Final_ReactJS_Masterclass.png';
import prismaImg from '../../public/assets/images/projects/prisma2_9xLkR2U.png';
const Projects = () => {
	return (
		<div id='projects' className='w-full mb-[200px] md:mb-[400px]  p-2'>
			<div className='max-w-[1240px] mx-auto px-2 py-16 '>
				<h2 className='tracking-widest text-zinc-700 px-10 pb-10'>Projects</h2>
				<div className=' grid md:grid-cols-2  gap-8'>
					<div className='relative flex justify-center items-center h-auto w-full shadow-md shadow-gray-400  group hover:bg-zinc-800 hover:ease-in hover:duration-300 '>
						<Image
							className=' group-hover:opacity-10'
							src={uberEatsImg}
							alt='ReactJs'
						/>
						<div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
							<h3 className='text-4xl pb-8 text-white text-center tracking-wider'>
								Uber Eats
							</h3>
							<p className='pb-10  text-white text-center'>
								This App Created with ReactJs and NextJs and TailwindCss
							</p>
							<Link href={'/projects/uber-eats'}>
								<p className='text-center p-1 rounded-lg bg-white text-zinc-800 font-bold text-lg cursor-pointer'>
									more info
								</p>
							</Link>
						</div>
					</div>
					<div className='relative flex justify-center items-center h-auto w-full shadow-md shadow-gray-400  group hover:bg-zinc-800 hover:ease-in hover:duration-300 '>
						<Image className=' group-hover:opacity-10' src={prismaImg} alt='ReactJs' />
						<div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
							<h3 className='text-4xl pb-8 text-white text-center tracking-wider'>
								Uber Eats
							</h3>
							<p className='pb-10  text-white text-center'>
								This App Created with ReactJs and NextJs and TailwindCss
							</p>
							<Link href={'/'}>
								<p className='text-center p-1 rounded-lg bg-white text-zinc-800 font-bold text-lg cursor-pointer'>
									more info
								</p>
							</Link>
						</div>
					</div>
					<div className='relative flex justify-center items-center h-auto w-full shadow-md shadow-gray-400  group hover:bg-zinc-800 hover:ease-in hover:duration-300 '>
						<Image className=' group-hover:opacity-10' src={instaImg} alt='ReactJs' />
						<div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
							<h3 className='text-4xl pb-8 text-white text-center tracking-wider'>
								Uber Eats
							</h3>
							<p className='pb-10  text-white text-center'>
								This App Created with ReactJs and NextJs and TailwindCss
							</p>
							<Link href={'/'}>
								<p className='text-center p-1 rounded-lg bg-white text-zinc-800 font-bold text-lg cursor-pointer'>
									more info
								</p>
							</Link>
						</div>
					</div>
					<div className='relative flex justify-center items-center h-auto w-full shadow-md shadow-gray-400  group hover:bg-zinc-800 hover:ease-in hover:duration-300 '>
						<Image className=' group-hover:opacity-10' src={twitterImg} alt='ReactJs' />
						<div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
							<h3 className='text-4xl pb-8 text-white text-center tracking-wider'>
								Uber Eats
							</h3>
							<p className='pb-10  text-white text-center'>
								This App Created with ReactJs and NextJs and TailwindCss
							</p>
							<Link href={'/'}>
								<p className='text-center p-1 rounded-lg bg-white text-zinc-800 font-bold text-lg cursor-pointer'>
									more info
								</p>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
