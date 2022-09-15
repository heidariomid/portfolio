/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			boxShadow: {
				down: '10px 10px 24px -12px',
				center: '4px 0px 45px -12px',
				light: '0px 0px 12px 1px',
				lighter: '0px 0px 18px 4px',
				innerCenter: 'inset 0px 0px 5px 0px',
			},
			animation: {
				borderColor: 'borderColor 4s ease-in infinite ',
				borderWiggle: 'borderWiggle 12s ease-in-out infinite ',
				textWiggle: 'textWiggle 5s ease-in-out infinite ',
				iconDown: 'iconDown 4.5s ease-in-out infinite ',
				iconRight: 'iconRight 4.5s ease-in-out infinite ',
				iconUp: 'iconUp 4.5s ease-in-out infinite ',
				iconLeft: 'iconLeft 4.5s ease-in-out infinite ',
				scrollDown: 'scrollDown 2.5s ease-in-out infinite ',
			},
			keyframes: {
				borderColor: {
					'0%, 100%': {
						'border-color': ' rgb(162 28 175) rgb(109 40 217)',
					},

					'50%': {
						'border-color': 'rgb(126 34 206) rgb(67 56 202)',
					},
					'25%': {
						'border-color': 'rgb(109 40 217) rgb(162 28 175)',
					},
					'75%': {
						'border-color': 'rgb(67 56 202) rgb(126 34 206)',
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
				iconDown: {
					'0%, 100%': {
						transform: 'translateY(0px) translateX(0px)',
					},

					'50%': {
						transform: 'translateY(5px) translateX( 5px)',
					},
				},
				iconRight: {
					'0%, 100%': {
						transform: 'translateX(0px)',
					},

					'50%': {
						transform: 'translateX(5px)',
					},
				},
				iconUp: {
					'0%, 100%': {
						transform: 'translateY(0px)',
					},

					'50%': {
						transform: 'translateY(-5px)',
					},
				},
				iconLeft: {
					'0%, 100%': {
						transform: 'translateX(0px)',
					},

					'50%': {
						transform: 'translateX(-5px)',
					},
				},
				scrollDown: {
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
	plugins: [require('@tailwindcss/forms')],
};
