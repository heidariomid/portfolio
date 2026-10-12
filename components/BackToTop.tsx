'use client';

const BackToTop = () => {
	return (
		<span className='to-top' onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
			Back to top
			<svg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
				<path d='M12 19V5M6 11l6-6 6 6' />
			</svg>
		</span>
	);
};

export default BackToTop;
