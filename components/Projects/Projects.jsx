import {motion} from 'framer-motion';
import useStateValue from '../../store/useContext';
import Project from './Project';
import OtherProject from './OtherProject';

const Projects = () => {
	const [state] = useStateValue();
	const {isDark} = state.theme;

	return (
		<motion.div id='projects' className='snap-start mt-20  w-full md:h-full h-fit mx-auto flex flex-col items-center justify-center '>
			<motion.div className='max-w-[1240px] mx-auto flex flex-col h-full  justify-center '>
				<motion.h2
					initial={{opacity: 0, x: -400}}
					whileInView={{opacity: 1, x: 0}}
					transition={{
						duration: 1.2,
						ease: 'easeInOut',
					}}
					className={`tracking-widest pb-6 	${isDark ? 'text-white' : 'text-zinc-700'} px-10 md:px-0 uppercase `}
				>
					Projects
				</motion.h2>
				<div className='max-w-[1240px]  mx-auto h-full  md:h-fit  flex flex-col px-2 '>
					<div className='grid md:grid-cols-3 grid-cols-1 gap-8 h-full m-5 md:gap-x-8 md:gap-y-16'>
						<div className='relative md:col-span-3 h-full w-full flex'>
							<Project />
						</div>
						{/* <OtherProject /> */}
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
};

export default Projects;
