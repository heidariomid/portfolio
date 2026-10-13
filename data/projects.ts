import type {StaticImageData} from 'next/image';
import tripImg from '../public/assets/images/projects/trip-planner.png';
import amazonImg from '../public/assets/images/projects/amazon.png';
import bakeryImg from '../public/assets/images/projects/bakery.png';
import foodImg from '../public/assets/images/projects/uber-eats.jpeg';
import cryptoImg from '../public/assets/images/projects/uber-eats/currency.png';

export type Project = {
	num: string;
	title: string;
	badge: string;
	img: StaticImageData;
	alt: string;
	desc: string;
	feats: string[];
	tags: string[];
	demo: string | null;
	code: string | null;
	backend?: string;
};

export const projects: Project[] = [
	{
		num: 'Project 01',
		title: 'AI Trip Planner',
		badge: 'Full stack · Web & mobile · 2026',
		img: tripImg,
		alt: 'AI Trip Planner chat screen: the assistant proposes a three-day Swiss Alps trip with a Create Trip button',
		desc: 'An AI assistant drafts the days, places, bookings and packing list for a trip, and the traveller decides what to keep. One Expo codebase runs as an installable web app and on phones, backed by Supabase. Every model call goes through a Supabase Edge Function, so no API key reaches the app, and nothing is saved until the user taps a card.',
		feats: [
			'Streamed AI replies rendered as action cards',
			'Owner, editor and viewer roles enforced by Postgres row-level security',
			'Schema kept as ordered SQL migrations',
			'Email and Google sign-in, with real account deletion',
			'Persian right-to-left text inside a left-to-right UI',
			'Runs without AI keys: those features show a plain notice',
		],
		tags: ['React Native', 'Expo Router', 'TypeScript', 'Supabase', 'NativeWind'],
		demo: 'https://plan-trip-ai.vercel.app/',
		code: 'https://github.com/heidariomid/ai-trip-planner',
	},
	{
		num: 'Project 02',
		title: 'Amazon.ae Shop',
		badge: 'Client project · 2023, rebuilt 2026',
		img: amazonImg,
		alt: 'Amazon.ae storefront with a Persian right-to-left layout, shown on a laptop, tablet and phone',
		desc: 'A Persian storefront for ordering from Amazon.ae. I built it in 2023 for a client’s WooCommerce shop. The deal did not close, so I rebuilt the backend on Supabase to run it as a standalone demo. Product data comes from the Rainforest API through Next.js route handlers only. Prices are cached in Postgres for 24 hours and live calls are capped per day, which keeps the demo free to run.',
		feats: [
			'Server-only API calls behind a 24-hour Postgres price cache',
			'Daily cap on upstream calls, counted in the database',
			'Shows when each price was last checked',
			'Email one-time-code sign-in with Supabase Auth',
			'Row-level security: each account sees only its own orders',
			'Redux Toolkit cart, TanStack Query for server data',
		],
		tags: ['Next.js', 'Redux Toolkit', 'TanStack Query', 'Supabase', 'Tailwind CSS'],
		demo: 'https://amazon-ae.vercel.app/',
		code: 'https://github.com/heidariomid/amazon-ae',
	},
	{
		num: 'Project 03',
		title: 'Ghanad Bashi Asal Bakery',
		badge: 'Client project · 2026',
		img: bakeryImg,
		alt: 'Ghanad Bashi Asal homepage: a Persian right-to-left layout with a cake photo, the bakery name and order buttons',
		desc: 'A live ordering site for a home bakery, run by an owner who does not write code. Payload CMS runs inside the Next.js app with a Persian admin, so the owner edits products, prices and photos without me. I chose Payload because Sanity has no Persian admin and WordPress would need ongoing maintenance. Customers fill a cart and send an order; the baker gets a text message, and the customer gets one each time the order status changes.',
		feats: [
			'Payload CMS 3 inside Next.js 16, with a Persian admin',
			'Cart and order form with shop-style order numbers',
			'SMS.ir texts to the baker on new orders and to customers on status changes',
			'Deposit receipt upload that alerts the baker',
			'Optional phone one-time code with a daily limit',
			'Pages revalidated on demand when content changes',
		],
		tags: ['Next.js', 'Payload CMS', 'PostgreSQL', 'TypeScript', 'Tailwind CSS'],
		demo: 'https://ghanadbashiasal.ir/',
		code: 'https://github.com/heidariomid/ghanadbashi-asal',
	},
	{
		num: 'Project 04',
		title: 'Food Delivery',
		badge: 'Front end · 2022',
		img: foodImg,
		alt: 'Food Delivery project cover with the NestJS, React and Jest logos',
		desc: 'The React client for a food-delivery platform with three roles: customers place orders, restaurant owners manage menus and incoming orders, and drivers take deliveries. The front end is my work. The NestJS GraphQL API started from a course project and I extended it. Order status reaches each role in real time over GraphQL subscriptions. The hosted demo is offline; both repositories are public.',
		feats: [
			'Customer, owner and driver screens behind protected routes',
			'Live order status over GraphQL subscriptions (graphql-ws)',
			'ZarinPal payment flow: pending, verify, success and failure screens',
			'Sales charts for restaurant owners with Victory',
			'Forms with React Hook Form, side effects in Redux-Saga',
			'Testing Library component tests and Cypress sign-up and login tests',
		],
		tags: ['React', 'TypeScript', 'Apollo Client', 'GraphQL', 'Cypress'],
		demo: null,
		code: 'https://github.com/heidariomid/uber-eats-frontend',
		backend: 'https://github.com/heidariomid/uber-eats-backend',
	},
	{
		num: 'Project 05',
		title: 'Crypto Prices',
		badge: 'Front end · 2022, rebuilt 2026',
		img: cryptoImg,
		alt: 'Cryptocurrency price table with pagination, shown in a browser window',
		desc: 'A searchable, sortable table of the top 250 cryptocurrencies, each linked to a price chart. CoinGecko’s free API allows only a few requests a minute, so one request loads the whole list, TanStack Query caches it for five minutes, and search, sorting and pagination run on that cached copy in the browser.',
		feats: [
			'One upstream request per five minutes',
			'Rate-limit responses (HTTP 429) are not retried',
			'Page, search and sort kept in the URL, so any view can be shared',
			'KuCoin price chart for each coin',
			'Unit and component tests with Vitest',
			'Light and dark themes',
		],
		tags: ['Next.js', 'TanStack Query', 'TypeScript', 'Tailwind CSS', 'Vitest'],
		demo: 'https://cryptocurrenciesprice.vercel.app/',
		code: 'https://github.com/heidariomid/list-of-currencies',
	},
];
