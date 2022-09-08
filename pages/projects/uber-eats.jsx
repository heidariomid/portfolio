import Image from 'next/image';
import React from 'react';
import uberEatsImg from '../../public/assets/images/projects/uber-eats.jpeg';

const UberEats = () => {
	return (
		<div className='w-full  '>
			<div className='py-10'></div>
			<div className='w-full h-[30vh] lg:h-[40vh] relative  '>
				<Image src={uberEatsImg} alt='uber-eats' layout='fill' objectFit='cover' />

				<div className='absolute top-[85%] left-[0%] px-20 py-8 right-[0%] w-10/12 translate-x-[0%] translate-y-[-50%] max-w-[1240px] text-white bg-gradient '>
					<h1 className='mb-4 md:text-4xl lg:text-5xl'>Uber Eats</h1>
					<h2 className=' md:text-3xl lg:text-4xl'>
						React JS | Nest JS | GraphQL | Tailwind{' '}
					</h2>
				</div>
			</div>
			<div className='max-w-[1240px] mx-auto h-full  p-2 grid md:grid-cols-5  mt-4  gap-8 pt-8'>
				<div className='col-span-5 md:col-span-4  '>
					<p>Project</p>
					<h2>Overview</h2>
					<p>
						This app was built using React JS, Nest JS, GraphQL, and Tailwind CSS. It is
						a clone of the Uber Eats app. It is a full-stack app that uses GraphQL to
						communicate between the front-end and back-end. The back-end is built using
						Nest JS and the front-end is built using React JS. The app is styled using
						Tailwind CSS.
					</p>
					<div className='mt-4'>
						<button className='btn px-8 py-2 mt-4 '>Demo</button>
						<button className='btn px-8 py-2 mt-4 ml-6'>Code</button>
					</div>
				</div>
				<div className='col-span-5 md:col-span-1  border-1 p-4  border-black/25 shadow-md shadow-gray-400'>
					<div className='p-2  '>
						<p className='text-2xl font-bold text-center pb-4'>Technologies </p>
						<div className='grid grid-cols-3 md:grid-cols-1'>
							<p>
								<span className='font-bold text-center py-4  flex'>Front-end:</span>{' '}
								React JS, Tailwind CSS
							</p>
							<p>
								<span className='font-bold text-center py-4  flex'>Back-end:</span>{' '}
								Nest JS, GraphQL
							</p>
							<p>
								<span className='font-bold text-center py-4  flex'>Database:</span>{' '}
								PostgreSQL
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UberEats;
