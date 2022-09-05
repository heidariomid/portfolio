import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {AiOutlineMail} from 'react-icons/ai';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {FaGithub, FaLinkedinIn} from 'react-icons/fa';
import {HiOutlineChevronDoubleUp} from 'react-icons/hi';
import callImg from '../../public/assets/images/projects/telephone.jpeg';
const Contact = () => {
	return (
		<div id='contact' className='w-full lg:h-[1000px]  p-2 '>
			<div className='max-w-[1240px] mx-auto px-2 py-16 '>
				<h2 className='tracking-widest text-zinc-700 px-10 pb-10'>Contact</h2>
				<div className='grid lg:grid-cols-4 gap-8 '>
					<div className='col-span-3 lg:col-span-2 w-full h-full shadow-md shadow-gray-400 lg:p-4 bg-gray-50'>
						<div className='p-4 h-full'>
							<div>
								<Image src={callImg} alt='contact' />
							</div>
							<div>
								<h2 className='py-2'>Omid Heidari</h2>
								<p>Front-End Developer</p>
								<p className='py-4'>
									I am available for freelance work. If you have a project that
									you want to get started, think you need my help with something
									or just fancy saying hello, then get in touch.
								</p>
							</div>
							<div>
								<p className='uppercase'>keep in touch</p>
								<div className='flex items-center justify-around py-4'>
									<div className='rounded-full shadow-gray-400 shadow-lg p-3  cursor-pointer hover:scale-105 ease-in duration-500  '>
										<FaLinkedinIn size={32} />
									</div>
									<div className='rounded-full shadow-gray-400 shadow-lg p-3  cursor-pointer hover:scale-105 ease-in duration-500 '>
										<FaGithub size={32} />
									</div>
									<div className='rounded-full shadow-gray-400 shadow-lg p-3  cursor-pointer hover:scale-105 ease-in duration-500 '>
										<AiOutlineMail size={32} />
									</div>
									<div className='rounded-full shadow-gray-400 shadow-lg p-3  cursor-pointer hover:scale-105 ease-in duration-500 '>
										<BsFillPersonLinesFill size={32} />
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* form contact */}
					<div className='col-span-3 lg:col-span-2 w-full h-full shadow-md shadow-gray-400 lg:p-4 bg-gray-50'>
						<div className='p-4 h-full'>
							<form action=''>
								<div className='grid md:grid-cols-2 gap-4 w-full py-2'>
									<div className='flex flex-col'>
										<input
											placeholder='Full Name'
											type='text'
											name='name'
											id='name'
											className='input flex rounded-md p-2 focus:outline-none focus:border-zinc-700'
										/>
									</div>
									<div className='flex flex-col'>
										<input
											placeholder='Phone Number'
											type='number'
											name='phone'
											id='phone'
											className='input flex rounded-md p-2 focus:outline-none focus:border-zinc-700'
										/>
									</div>
								</div>
								<div className='flex flex-col py-2'>
									<input
										placeholder='Email'
										type='email'
										name='email'
										id='email'
										className='input flex rounded-md p-2 focus:outline-none focus:border-zinc-700'
									/>
								</div>
								<div className='flex flex-col py-2'>
									<input
										placeholder='Subject'
										type='text'
										name='subject'
										id='subject'
										className='input flex rounded-md p-2 focus:outline-none focus:border-zinc-700'
									/>
								</div>
								<div className='flex flex-col py-2'>
									<textarea
										placeholder='Message'
										cols='30'
										rows='10'
										name='message'
										id='message'
										className='input flex rounded-md p-2  text-start focus:outline-none focus:border-zinc-700'
									></textarea>
								</div>
								<div className='mt-4'>
									<button className='btn w-full py-3 text-xl mt-4 '>
										Submit
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div className='flex justify-center py-24'>
					<Link href={'/'}>
						<div className='rounded-full shadow-gray-400 shadow-md p-3  cursor-pointer hover:scale-105 ease-in duration-500 '>
							<HiOutlineChevronDoubleUp size={32} />
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Contact;
