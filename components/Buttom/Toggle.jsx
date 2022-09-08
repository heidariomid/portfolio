/* This example requires Tailwind CSS v2.0+ */
import {useState} from 'react';
import {Switch} from '@headlessui/react';
import {FaMoon} from 'react-icons/fa';
import {useStateValue} from '../../store/Context';
import {actions} from '../../store/actions';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

const Toggle = () => {
	const [enabled, setEnabled] = useState(false);
	const [state, dispatch] = useStateValue();

	const {isDark} = state.theme;
	const themeHandler = () => {
		setEnabled(!enabled);
		dispatch({
			type: actions.TOGGLE_THEME,
			payload: {toogleTheme: isDark ? false : true},
		});
	};
	return (
		<Switch
			checked={enabled}
			onChange={themeHandler}
			className={classNames(
				enabled ? 'bg-zinc-400/80' : 'bg-purple-400',
				'relative inline-flex items-center  flex-shrink-0 h-5 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none ',
			)}
		>
			<span className='sr-only'>Use setting</span>
			<span
				className={classNames(
					enabled ? 'translate-x-6' : '-translate-x-1',
					'pointer-events-none relative inline-block h-6 w-6 bg-indigo-500 rounded-full shadow transform ring-0 transition ease-in-out duration-500',
				)}
			>
				<span
					className={classNames(
						enabled
							? 'opacity-0 ease-out duration-100'
							: 'opacity-100 ease-in duration-200',
						'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity',
					)}
					aria-hidden='true'
				>
					<FaMoon size={15} color={'white'} />
				</span>
				<span
					className={classNames(
						enabled
							? 'opacity-100 ease-in duration-200'
							: 'opacity-0 ease-out duration-100',
						'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity text-black bg-zinc-300 rounded-full',
					)}
					aria-hidden='true'
				>
					<svg className='h-4 w-4 ' viewBox='0 0 20 20'>
						<path
							d='M3.183,9.381H0.704v1.239h2.479V9.381z M2.989,16.135l0.876,0.877l1.752-1.754l-0.876-0.875L2.989,16.135z
	 M17.012,3.866l-0.877-0.876l-1.752,1.752l0.875,0.876L17.012,3.866z M10.62,0.705H9.38v2.479h1.239V0.705z M5.618,4.742
	L3.865,2.989L2.989,3.866l1.753,1.752L5.618,4.742z M14.383,15.258l1.752,1.754l0.877-0.877l-1.754-1.752L14.383,15.258z
	M9.38,19.297h1.239v-2.48H9.38V19.297z M16.816,9.381v1.239h2.479V9.381H16.816z M10,5.042c-2.738,0-4.958,2.22-4.958,4.958
	c0,2.738,2.22,4.959,4.958,4.959c2.738,0,4.958-2.221,4.958-4.959C14.958,7.263,12.738,5.042,10,5.042z M10,13.727
	c-2.058,0-3.726-1.668-3.726-3.727c0-2.058,1.668-3.726,3.726-3.726c2.059,0,3.727,1.668,3.727,3.726
	C13.727,12.059,12.059,13.727,10,13.727z'
						></path>
					</svg>
				</span>
			</span>
		</Switch>
	);
};

export default Toggle;
