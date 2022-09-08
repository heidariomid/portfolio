import Image from 'next/image';
import Link from 'next/link';
import React, {useEffect, useState} from 'react';
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai';
import {FaGithub, FaLinkedinIn} from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Toggle from '../Buttom/Toggle';
import {useStateValue} from '../../store/Context';
const Navbar = () => {
	const [nav, setNav] = useState(false);
	const [state] = useStateValue();
	const {isDark} = state.theme;

	return (
		<>
			<div
				id='navbar'
				className={` fixed w-full ${
					isDark ? 'bg-black shadow-none' : 'shadow-md'
				}  h-20  z-[100]`}
			>
				{/* Web Menu */}
				<div
					className={` max-w-[1240px] mx-auto grid grid-cols-8 h-full px-2 2xl:px-16  ${
						isDark ? 'bg-black' : 'bg-white '
					}    `}
				>
					<div className='col-span-1'>
						<Link href='/#hero'>
							<Image
								className={` cursor-pointer ${isDark ? 'bg-black ' : 'bg-black'} `}
								src='/../public/assets/images/logo.png'
								width={80}
								height={80}
								alt='logo'
							/>
						</Link>
					</div>
					<div className='w-full flex col-span-6  h-20   items-center '>
						<ul
							className={`hidden md:flex  justify-around w-full col-span-2   ${
								isDark ? 'text-white ' : 'text-black'
							} tracking-wider`}
						>
							<Link href='/#about'>
								<li className=' text-xl font-light uppercase  hover:font-medium  ease-in duration-300'>
									About
								</li>
							</Link>
							<Link href='/#skills'>
								<li className=' text-xl font-light uppercase  hover:font-medium  ease-in duration-300'>
									Skills
								</li>
							</Link>
							<Link href='/#projects'>
								<li className=' text-xl font-light uppercase  hover:font-medium  ease-in duration-300'>
									Projects
								</li>
							</Link>
							<Link href='/#contact'>
								<li className=' text-xl font-light uppercase  hover:font-medium  ease-in duration-300'>
									Contact
								</li>
							</Link>
						</ul>
						<div
							className='md:hidden cursor-pointer w-full pr-4 flex justify-end items-center'
							onClick={() => setNav(!nav)}
						>
							<AiOutlineMenu size={32} color={`${isDark ? 'white' : 'black'} `} />
						</div>
					</div>
					<div className='col-span-1 flex items-center justify-center'>
						<Toggle />
					</div>
				</div>

				{/* Mobile Menu */}
				<div
					className={nav ? 'md:hidden fixed left-0 top-0 w-full h-full bg-black/70' : ''}
				>
					<div
						className={
							nav
								? 'fixed left-0 top-0 w-[75%] sm:w-[60%] overflow-scroll md:w-[45%] h-screen bg-gray-100 p-10 ease-in duration-500'
								: 'fixed left-[-100%] top-0  p-10 ease-in duration-500'
						}
					>
						{/* Header */}
						<div>
							<div className=' flex flex-row justify-between items-center w-full'>
								<Link href='/'>
									<Image
										onClick={() => setNav(false)}
										className='bg-black rounded-full '
										src='/../public/assets/images/logo.png'
										width={80}
										height={80}
										alt='logo'
									/>
								</Link>
								<div
									onClick={() => setNav(!nav)}
									className='md:hidden shadow-lg shadow-gray-400 rounded-full p-2 cursor-pointer'
								>
									<AiOutlineClose size={32} />
								</div>
							</div>
						</div>
						{/* Menu */}
						<div>
							<div>
								<div className='mt-8 mb-2 text-center '>
									<h2 className=' uppercase pt-5 pb-2'>Menu</h2>
								</div>
								<div className='h-1 bg-gradient '></div>
							</div>
							<div className='md:hidden  flex flex-col text-center items-center '>
								<ul className='   text-black font-semibold '>
									<Link href='/'>
										<li
											onClick={() => setNav(false)}
											className='py-8 text-lg uppercase hover:font-extrabold  ease-in duration-300 '
										>
											Home
										</li>
									</Link>
									<Link href='/#about'>
										<li
											onClick={() => setNav(false)}
											className='py-8 text-lg uppercase hover:font-extrabold  ease-in duration-300'
										>
											About
										</li>
									</Link>
									<Link href='/#skills'>
										<li
											onClick={() => setNav(false)}
											className='py-8 text-lg uppercase hover:font-extrabold  ease-in duration-300'
										>
											Skills
										</li>
									</Link>
									<Link href='/#projects'>
										<li
											onClick={() => setNav(false)}
											className='py-8 text-lg uppercase hover:font-extrabold  ease-in duration-300'
										>
											Projects
										</li>
									</Link>
									<Link href='/#contact'>
										<li
											onClick={() => setNav(false)}
											className='py-8 text-lg uppercase hover:font-extrabold  ease-in duration-300'
										>
											Contact
										</li>
									</Link>
								</ul>
							</div>
						</div>
						{/* Let's Connect */}
						<div className='pt-20 w-full'>
							<h2 className='text-center  uppercase tracking-widest '>
								Let&apos;s Connect
							</h2>
							<div className='h-1 my-4 bg-gradient'></div>

							<div className='flex flex-col py-4 items-center justify-center my-4 w-full '>
								<div className='rounded-full shadow-gray-400 shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-500 my-8'>
									<FaLinkedinIn size={32} />
								</div>
								<div className='rounded-full shadow-gray-400 shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-500 my-8'>
									<FaGithub size={32} />
								</div>
								<div className='rounded-full shadow-gray-400 shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-500 my-8'>
									<AiOutlineMail size={32} />
								</div>
								<div className='rounded-full shadow-gray-400 shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-500 my-8'>
									<BsFillPersonLinesFill size={32} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
