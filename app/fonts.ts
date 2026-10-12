import localFont from 'next/font/local';
import {DM_Mono} from 'next/font/google';

// Both families keep the names the --font-sans and --font-mono tokens in
// globals.css already use, so importing this module is all it takes to apply them.
export const generalSans = localFont({
	src: [
		{path: './fonts/general-sans/GeneralSans-Light.woff2', weight: '300', style: 'normal'},
		{path: './fonts/general-sans/GeneralSans-Regular.woff2', weight: '400', style: 'normal'},
		{path: './fonts/general-sans/GeneralSans-Medium.woff2', weight: '500', style: 'normal'},
		{path: './fonts/general-sans/GeneralSans-Semibold.woff2', weight: '600', style: 'normal'},
		{path: './fonts/general-sans/GeneralSans-Bold.woff2', weight: '700', style: 'normal'},
	],
	declarations: [{prop: 'font-family', value: 'General Sans'}],
	display: 'swap',
	adjustFontFallback: false,
});

export const dmMono = DM_Mono({
	weight: ['400', '500'],
	subsets: ['latin'],
	display: 'swap',
	adjustFontFallback: false,
});
