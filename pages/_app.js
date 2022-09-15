import Navbar from '../components/Navbar/Navbar';
import '../styles/globals.css';
import {motion} from 'framer-motion';
import {useRouter} from 'next/router';
import {StateProvider} from '../store/Context';
function MyApp({Component, pageProps}) {
	const router = useRouter();
	const variants = {
		initial: {
			opacity: 1,
			transition: {
				duration: 0.8,
			},
		},
		animate: {
			opacity: 1,
			transition: {
				duration: 0.8,
			},
		},
	};
	return (
		<StateProvider>
			<motion.div
				key={router.route}
				initial='initial'
				animate='animate'
				exit='exit'
				variants={variants}
			>
				<Navbar />
				<Component {...pageProps} />
			</motion.div>
		</StateProvider>
	);
}

export default MyApp;
