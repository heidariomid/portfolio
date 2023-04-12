import Link from 'next/link';
import {AiOutlineMail} from 'react-icons/ai';
import {FaGithub} from 'react-icons/fa';
import useStateValue from '../../store/useContext';
import resumeImg from '../../public/assets/images/resume-footer.svg';
import Image from 'next/image';
/* This example requires Tailwind CSS v2.0+ */
const navigation = {
	main: [
		{name: 'About', href: '#'},
		{name: 'Skills', href: '#'},
		{name: 'Projects', href: '#'},
		{name: 'Contact', href: '#'},
	],
	social: [
		{
			name: 'LinkedIn',
			href: 'https://www.linkedin.com/in/heidariomid/',
			icon: (props) => (
				<svg className='h-6 w-6 md:h-8 md:w-8' stroke='currentColor' fill='currentColor' strokeWidth='0' viewBox='0 0 448 512' xmlns='http://www.w3.org/2000/svg'>
					<path d='M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z'></path>
				</svg>
			),
		},
		{
			name: 'Github',
			href: 'https://github.com/heidariomid',
			icon: (props) => <FaGithub className='h-6 w-6 md:h-8 md:w-8' />,
		},
		{
			name: 'Email',
			href: 'mailto:info@heidariomid.com',
			icon: (props) => <AiOutlineMail className='h-6 w-6 md:h-8 md:w-8' />,
		},

		{
			name: 'Resume',
			href: '/assets/resume.pdf',
			icon: (props) => (
				<div className='h-6 w-6 md:h-8 md:w-8'>
					<Image src={resumeImg} alt='resume' width={32} height={32} />
				</div>
			),
		},
	],
};

const Footer = () => {
	const [state] = useStateValue();
	const {isDark} = state.theme;
	return (
		<footer className={`${isDark ? 'bg-black text-white' : 'bg-white'}`}>
			<div className='max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8'>
				<div className='mt-8 flex justify-center space-x-6'>
					{navigation.social.map((item) => (
						<a key={item.name} href={item.href} target='_blank' rel='noreferrer' className='text-gray-400 hover:text-gray-500'>
							<span className='sr-only'>{item.name}</span>
							<item.icon className='h-6 w-6' aria-hidden='true' />
						</a>
					))}
				</div>
				<p className='mt-8 text-center text-base text-gray-400'>&copy; 2023 Omid Heidari. All rights reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;
