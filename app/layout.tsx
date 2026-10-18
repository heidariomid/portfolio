import type {Metadata, Viewport} from 'next';
import type {ReactNode} from 'react';
import {Analytics} from '@vercel/analytics/next';
import './globals.css';
import ServiceWorker from '../components/ServiceWorker';
import {GITHUB_URL, LINKEDIN_URL, WEBSITE_URL} from '../data/contact';

const title = 'Omid Heidari — Front-End Developer (React, Next.js, TypeScript)';
const description =
	'I turn complex technical challenges into reliable, production-ready software. Explore my work across AI-powered applications, e-commerce, and data-driven platforms.';
const shareTitle = 'Omid Heidari';
const shareDescription = 'I turn complex technical challenges into reliable, production-ready software.';

const personJsonLd = {
	'@context': 'https://schema.org',
	'@type': 'Person',
	name: 'Omid Heidari',
	jobTitle: 'Front-End Developer',
	url: WEBSITE_URL,
	sameAs: [GITHUB_URL, LINKEDIN_URL],
};

export const metadata: Metadata = {
	metadataBase: new URL('https://heidariomid.ir'),
	title,
	description,
	alternates: {canonical: '/'},
	icons: {icon: '/favicon.ico', apple: '/apple-touch-icon.png'},
	manifest: '/manifest.json',
	appleWebApp: {title: 'Omid Heidari', statusBarStyle: 'black'},
	openGraph: {
		title: shareTitle,
		description: shareDescription,
		siteName: shareTitle,
		type: 'website',
		url: '/',
		images: [{url: '/og-image.png', width: 1200, height: 630, alt: 'Portrait of Omid Heidari, front-end developer'}],
	},
	twitter: {card: 'summary_large_image', title: shareTitle, description: shareDescription, images: ['/og-image.png']},
};

export const viewport: Viewport = {themeColor: '#0a0a0a'};

const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`;

export default function RootLayout({children}: {children: ReactNode}) {
	return (
		<html lang='en' data-theme='dark' suppressHydrationWarning>
			<head>
				<script dangerouslySetInnerHTML={{__html: themeScript}} />
				<script type='application/ld+json' dangerouslySetInnerHTML={{__html: JSON.stringify(personJsonLd).replace(/</g, '\\u003c')}} />
			</head>
			<body>
				{children}
				<Analytics />
				<ServiceWorker />
			</body>
		</html>
	);
}
