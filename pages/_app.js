import {useEffect} from 'react';
import Navbar from '../components/Navbar/Navbar';
import '../styles/globals.css';
import {useRouter} from 'next/router';
import {StateProvider} from '../store/context';
import useStateValue from '../store/useContext';

// Keeps the <html data-theme> attribute in sync with the isDark context so the
// design's CSS-variable token system (light/dark) drives every component.
function ThemeSync() {
	const [state] = useStateValue();
	const {isDark} = state.theme;
	useEffect(() => {
		document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
	}, [isDark]);
	return null;
}

function MyApp({Component, pageProps}) {
	const router = useRouter();
	return (
		<StateProvider>
			<ThemeSync />
			<div key={router.route}>
				<Navbar />
				<Component {...pageProps} />
			</div>
		</StateProvider>
	);
}

export default MyApp;
