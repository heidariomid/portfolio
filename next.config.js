/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const withVideos = require('next-videos');

const nextConfig = {
	reactStrictMode: true,
	webpack: (config) => {
		config.module.rules.push({
			test: /\.pdf$/,
			use: {
				loader: 'file-loader',
				options: {
					name: '[path][name].[ext]',
				},
			},
		});
		return config;
	},
	swcMinify: true,
	images: {
		loader: 'akamai',
		path: '/',
	},
	assetPrefix: isProd ? '/' : undefined,
	basePath: isProd ? '/' : undefined,
};

module.exports = nextConfig;
module.exports = withVideos();
