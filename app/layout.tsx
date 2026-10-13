import type {Metadata} from 'next';
import type {ReactNode} from 'react';
import Script from 'next/script';
import './globals.css';

const GA_ID = 'G-8JCQBPR9CP';

const title = 'Omid Heidari — Front-End Developer';
const description = 'Omid Heidari — Front-End Developer building beautiful, high-performance web applications with React, Next.js & TypeScript.';

export const metadata: Metadata = {
	metadataBase: new URL('https://heidariomid.ir'),
	title,
	description,
	alternates: {canonical: '/'},
	icons: {icon: '/favicon.ico'},
	manifest: '/manifest.json',
	openGraph: {
		title,
		description,
		type: 'website',
		url: '/',
		images: [{url: '/assets/images/omid-heidari.jpeg', alt: 'Omid Heidari'}],
	},
};

const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`;

export default function RootLayout({children}: {children: ReactNode}) {
	return (
		<html lang='en' data-theme='dark' suppressHydrationWarning>
			<head>
				<script dangerouslySetInnerHTML={{__html: themeScript}} />
			</head>
			<body>
				{children}
				<Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy='afterInteractive' />
				<Script id='ga4' strategy='afterInteractive'>
					{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
				</Script>
			</body>
		</html>
	);
}
