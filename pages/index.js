import Head from 'next/head';
import {useEffect} from 'react';
import Script from 'next/script';
import About from '../components/About/About';
import Form from '../components/Contact/Form';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';
import Cta from '../components/Cta/Cta';
import useReveal from '../store/useReveal';
import ReactGA from 'react-ga';

const Home = () => {
	useEffect(() => {
		ReactGA.initialize('372632070');
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);

	// Scroll-reveal: observe every .reveal element once the page has mounted.
	useReveal([]);

	return (
		<div>
			<Head>
				<title>Omid Heidari — Front-End Developer</title>
				<meta name='description' content='Omid Heidari — Front-End Developer building beautiful, high-performance web applications with React, Next.js & TypeScript.' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Script async src={`https://www.googletagmanager.com/gtag/js?id=G-8JCQBPR9CP`} strategy='afterInteractive' />
			<Script id='124dfs-analytics' strategy='afterInteractive'>
				{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-8JCQBPR9CP');
        `}
			</Script>

			<Hero />
			<About />
			<Skills />
			<Projects />
			<Cta />
			<Form />
		</div>
	);
};

export default Home;
