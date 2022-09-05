import Image from 'next/image';
import React from 'react';
import MeImg from '../../public/assets/images/omid-heidari.jpeg';
const About = () => {
	return (
		<div id='about' className='w-full   p-2 mb-[200px] md:mb-[400px]  flex items-center py-16'>
			<div className='max-w-[1240px] mx-auto md:grid grid-cols-3 gap-8 '>
				<div className='col-span-2'>
					<h2 className='tracking-widest text-zinc-700 px-10'>About Me</h2>
					<p className=' text-zinc-600 text-xl py-4 text-justify leading-loose px-10'>
						I am a software engineer with a passion for building web applications. I
						have a background in computer science and have been working in the industry
						for over 5 years. I have experience working with a variety of technologies
						and languages, but I am most passionate about JavaScript and React. I am
						currently working as a software engineer at{' '}
						<a
							className='font-bold underline'
							href='https://www.thescore.com/'
							target='_blank'
							rel='noopener noreferrer'
						>
							The Score
						</a>
						.
					</p>
					<p className=' text-zinc-600 text-xl py-4  leading-loose px-10'>
						I am a self-taught developer and I am always looking to learn new
						technologies and languages. I am always looking to improve my skills and
						knowledge.
					</p>
				</div>
				<div className='bg-clip-content bg-cover md:p-[15px] m-[45px] md:m-0 md:border-4 '>
					<div className='relative  md:h-full w-full  h-96  '>
						<Image
							className='absolute'
							src={MeImg}
							alt='Profile'
							layout='fill'
							objectFit='cover'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
