import Document, {Html, Head, Main, NextScript} from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return {...initialProps};
	}
	render() {
		return (
			<Html>
				<Head>
					<meta charSet='utf-8' />
					{/* <meta name='viewport' content='width=device-width, initial-scale=1' /> */}
					<meta name='description' content='Next.js + TypeScript example' />
					<link rel='icon' href='/favicon.ico' />
					<link rel='manifest' href='/manifest.json' />

					<link rel='preconnect' href='https://fonts.googleapis.com' />
					<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
					<link href='https://fonts.googleapis.com/css2?family=Raleway&display=swap' rel='stylesheet' />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
export default MyDocument;
