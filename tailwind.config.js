/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			animation: {
				borderColor: 'borderColor 2s ease-in-out infinite ',
				borderWiggle: 'borderWiggle 12s ease-in-out infinite ',
				textWiggle: 'textWiggle 5s ease-in-out infinite ',
				iconUpDown: 'iconUpDown 2.5s ease-in-out infinite ',
			},
			keyframes: {
				borderColor: {
					'0%, 100%': {
						'border-color': ' rgb(162 28 175) rgb(109 40 217)',
					},
					'50%': {
						'border-color': 'rgb(126 34 206) rgb(67 56 202)',
					},
				},
				borderWiggle: {
					'0%, 100%': {
						'border-radius': '90% 90% 0% 0%/90% 90% 5% 5%',
					},
					'25%': {
						'border-radius': '50% 50% 50% 50%/50% 50% 50% 50%',
					},
					'35%': {
						'border-radius': '0% 0% 0% 0%/0% 0% 0% 0%',
					},
					'85%': {
						'border-radius': '30% 30% 30% 30%/30% 30% 30% 30%',
					},
					'75%': {
						'border-radius': '70% 70% 70% 70%/70% 70% 70% 70%',
					},

					'50%': {
						'border-radius': '5% 5% 90% 90%/5% 5% 90% 90%',
					},
				},
				textWiggle: {
					'0%, 100%': {
						color: '#93429e',
					},

					'25%': {
						color: '#1c7bce',
					},
					'50%': {
						color: '#ce1ca8',
					},
				},
				iconUpDown: {
					'0%, 100%': {
						transform: 'translateY(0px)',
					},

					'50%': {
						transform: 'translateY(15px)',
					},
				},
			},
		},
	},
	plugins: [],
};
