import {FaEnvelope, FaGithub, FaLinkedin, FaPhone} from 'react-icons/fa';
import {GiEarthAmerica} from 'react-icons/gi';
import Footer from '../Footer/Footer';
import ContactForm from './FormInputs';
import FormBackground from './FormBgAbstract';
import useStateValue from '../../store/useContext';
import {motion} from 'framer-motion';

const Form = () => {
	const variants = {
		whileInView: {
			transition: {
				staggerChildren: 0.2,
			},
		},
	};
	const title = {
		initial: {color: '#272727'},
		whileInView: {
			color: '#fff',
			transition: {duration: 3, ease: 'easeInOut'},
		},
	};
	const item = {
		initial: {x: -400},
		whileInView: {
			x: 0,
			transition: {duration: 1.5, ease: 'easeInOut'},
		},
	};
	const [state] = useStateValue();
	const {isDark} = state.theme;
	return (
		<div id='contact' className='snap-start mt-20 w-full md:h-screen h-fit mx-auto flex flex-col items-center justify-center '>
			<motion.div className='max-w-[1240px] mx-auto flex flex-col h-full  justify-center  '>
				<motion.h2
					initial={{opacity: 0, x: -400}}
					whileInView={{opacity: 1, x: 0}}
					transition={{
						duration: 1.2,
						ease: 'easeInOut',
					}}
					className={`tracking-widest pb-6 	${isDark ? 'text-white' : 'text-zinc-700'} px-10  md:px-0 md:pb-12 uppercase `}
				>
					Contacts
				</motion.h2>

				<main className={`overflow-hidden `}>
					{/* Contact section */}
					<section className='relative  ' aria-labelledby='contact-heading'>
						<div className='absolute w-full h-1/2  ' aria-hidden='true' />

						<motion.div
							initial='initial'
							whileInView='whileInView'
							variants={variants}
							style={{
								backgroundRepeat: 'no-repeat',
								backgroundSize: 'cover',

								backgroundImage: `url(${
									isDark &&
									'https://img.freepik.com/free-vector/monochrome-abstract-contour-line-illustration_53876-80536.jpg?w=2000&t=st=1663099843~exp=1663100443~hmac=55f5ddc29e8be6372015f6c5b0f314b66d91836d472c5477a8550b3a503ab784'
								})`,
							}}
							className={`max-w-[1240px] m-5 md:mx-auto ${isDark && 'border-2 animate-borderColor'} `}
						>
							<div className='relative '>
								<h2 id='contact-heading' className='sr-only'>
									Contact us
								</h2>

								<div
									className={`grid grid-cols-1  bg-center lg:grid-cols-3 m-6 md:m-0  ${
										isDark ? 'bg-transparent' : 'bg-white shadow-innerCenter shadow-gray-700'
									} `}
								>
									{/* Contact information */}
									<div className={`relative  overflow-hidden py-10 px-6  ${isDark ? 'bg-black' : 'bg-gradient'} sm:px-10 xl:p-12 `}>
										{!isDark && <FormBackground />}
										{/* Decorative angle backgrounds */}
										<motion.h3 variants={title} className='text-3xl font-medium text-white'>
											Omid Heidari
										</motion.h3>
										<div className={`text-white -mt-3  text-xl leading-10 ${isDark && 'bg-black'}`} style={{fontFamily: 'Raleway'}}>
											<motion.p variants={title} className='pt-4'>
												Software Developer
											</motion.p>

											<motion.p variants={title} className='pt-2'>
												Got a project that needs a developer’s touch? <br /> Contact me to discuss how I can help.
											</motion.p>
										</div>
										<dl className='mt-8 space-y-8'>
											<dt>
												<span className='sr-only'>WebSite</span>
											</dt>
											<motion.dd variants={item} className='flex text-base text-teal-50'>
												<a href='https://heidariomid.com/' target={'_blank'} rel='noreferrer'>
													<GiEarthAmerica size={24} />
												</a>
												<a className='ml-3 ' href='https://heidariomid.com/' target={'_blank'} rel='noreferrer'>
													heidariomid.com
												</a>
											</motion.dd>
											<motion.dt variants={item}>
												<span className='sr-only'>Phone number</span>
											</motion.dt>
											<motion.dd variants={item} className='flex text-base text-teal-50'>
												<a href='tel:+98 937 379 8553' target={'_blank'} rel='noreferrer'>
													<FaPhone size={24} />
												</a>
												<a href='tel:+98 937 379 8553' target={'_blank'} rel='noreferrer'>
													<span className='ml-3'>(+98) 937 379 8553</span>
												</a>
											</motion.dd>
											<dt>
												<span className='sr-only'>Github</span>
											</dt>

											<motion.dd variants={item} className='flex text-base text-teal-50'>
												<a href='https://github.com/heidariomid' target={'_blank'} rel='noreferrer'>
													<FaGithub size={24} />
												</a>
												<a href='https://github.com/heidariomid' target={'_blank'} rel='noreferrer'>
													<span className='ml-3'>github.com/heidariomid</span>
												</a>
											</motion.dd>

											<dt>
												<span className='sr-only'>LinkedIn</span>
											</dt>
											<motion.dd variants={item} className='flex text-base text-teal-50'>
												<a href='https://www.linkedin.com/in/heidariomid/' target={'_blank'} rel='noreferrer'>
													<FaLinkedin size={24} />
												</a>
												<a href='https://www.linkedin.com/in/heidariomid/' target={'_blank'} rel='noreferrer'>
													<span className='ml-3'>linkedin.com/in/heidariomid</span>
												</a>
											</motion.dd>
											<dt>
												<span className='sr-only'>Email</span>
											</dt>
											<motion.dd variants={item} className='flex text-base text-teal-50'>
												<a href='mailto:info@heidariomid.com' target={'_blank'} rel='noreferrer'>
													<FaEnvelope size={24} />
												</a>
												<a href='mailto:info@heidariomid.com' target={'_blank'} rel='noreferrer'>
													<span className='ml-3'>info@heidariomid.com</span>
												</a>
											</motion.dd>
										</dl>
									</div>

									{/* Contact form */}
									<div className='py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12'>
										<ContactForm />
									</div>
								</div>
							</div>
						</motion.div>
						<footer aria-labelledby='footer-heading'>
							<h2 id='footer-heading' className='sr-only'>
								Footer
							</h2>
							<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
								<Footer />
							</div>
						</footer>
					</section>
				</main>
			</motion.div>
		</div>
	);
};

export default Form;
