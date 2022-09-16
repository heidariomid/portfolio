/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		loader: 'akamai',
		path: '',
	},
	basePath: '/portfolio',
};

module.exports = nextConfig;
