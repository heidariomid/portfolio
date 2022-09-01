import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai';
import {FaGithub, FaLinkedinIn} from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs';
const Navbar = () => {
	const [nav, setNav] = React.useState(false);
	const navHandler = () => {
		setNav(!nav);
	};
	return (
		<div className=' fixed w-full h-20 shadow-xl z-[100]'>
			{/* Web Menu */}
			<div className=' flex justify-between items-center w-full h-full px-2 2xl:px-16 bg-gradient'>
				<Image
					src='/../public/assets/images/logo.png'
					width={100}
					height={100}
					alt='logo'
				/>

				<div>
					<ul className='hidden md:flex flex-row text-white'>
						<Link href='/'>
							<li className='ml-10 text-lg uppercase hover:border-b'>Home</li>
						</Link>
						<Link href='/about'>
							<li className='ml-10 text-lg uppercase hover:border-b'>About</li>
						</Link>
						<Link href='/skills'>
							<li className='ml-10 text-lg uppercase hover:border-b'>Skills</li>
						</Link>
						<Link href='/projects'>
							<li className='ml-10 text-lg uppercase hover:border-b'>Projects</li>
						</Link>
						<Link href='/contact'>
							<li className='mx-10 text-lg uppercase hover:border-b'>Contact</li>
						</Link>
					</ul>
					<div className='md:hidden cursor-pointer' onClick={navHandler}>
						<AiOutlineMenu size={32} color={'white'} />
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			<div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-full bg-black/70' : ''}>
				<div
					className={
						nav
							? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
							: 'fixed left-[-100%] top-0  p-10 ease-in duration-500'
					}
				>
					{/* Header */}
					<div>
						<div className='flex flex-row justify-between items-center w-full'>
							<Image
								className='bg-black rounded-full '
								src='/../public/assets/images/logo.png'
								width={80}
								height={80}
								alt='logo'
							/>
							<div
								onClick={navHandler}
								className='md:hidden bg-white shadow-lg shadow-gray-400 rounded-full p-2 cursor-pointer'
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
									<li className='py-8 text-lg uppercase hover:border-b '>Home</li>
								</Link>
								<Link href='/about'>
									<li className='py-8 text-lg uppercase hover:border-b'>About</li>
								</Link>
								<Link href='/skills'>
									<li className='py-8 text-lg uppercase hover:border-b'>
										Skills
									</li>
								</Link>
								<Link href='/projects'>
									<li className='py-8 text-lg uppercase hover:border-b'>
										Projects
									</li>
								</Link>
								<Link href='/contact'>
									<li className='py-8 text-lg uppercase hover:border-b'>
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
	);
};

export default Navbar;
