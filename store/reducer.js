import {actions} from './actions';

export const initialState = {
	theme: {isDark: true},
};

export const reducer = (state = initialState, action) => {
	let result = state.theme;
	switch (action.type) {
		case actions.TOGGLE_THEME:
			result = {...state.theme, isDark: action.payload.toogleTheme};
			break;
		default:
			result = state;
			break;
	}

	return {
		theme: result,
	};
};
