import React from 'react';
import {AiOutlineMail} from 'react-icons/ai';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {FaGithub, FaLinkedinIn} from 'react-icons/fa';

const Hero = () => {
	return (
		<div className='h-screen w-full text-center'>
			<div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
				<div>
					<h1 className='text-zinc-800'>
						Hi, I&apos;m <span className='text-gradient'>Omid</span>
					</h1>
					<h2 className='text-zinc-700  pt-4 pb-2'>A Full-Stack Developer</h2>
					<p className='max-w-[70%] mx-auto text-center  text-zinc-600 text-xl py-4'>
						I&apos;m a full-stack developer with a passion for building beautiful,
						performant, and accessible websites.
					</p>

					<div className='flex mx-auto items-center justify-center py-5 w-full '>
						<div className='rounded-full shadow-gray-400 shadow-lg p-3 md:p-4 cursor-pointer hover:scale-105 ease-in duration-500 mx-4 md:mx-8 '>
							<FaLinkedinIn size={32} />
						</div>
						<div className='rounded-full shadow-gray-400 shadow-lg p-3 md:p-4 cursor-pointer hover:scale-105 ease-in duration-500 mx-4 md:mx-8'>
							<FaGithub size={32} />
						</div>
						<div className='rounded-full shadow-gray-400 shadow-lg p-3 md:p-4 cursor-pointer hover:scale-105 ease-in duration-500 mx-4 md:mx-8'>
							<AiOutlineMail size={32} />
						</div>
						<div className='rounded-full shadow-gray-400 shadow-lg p-3 md:p-4 cursor-pointer hover:scale-105 ease-in duration-500 mx-4 md:mx-8'>
							<BsFillPersonLinesFill size={32} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
