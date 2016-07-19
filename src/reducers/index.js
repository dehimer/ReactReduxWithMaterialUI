import { SWITCH_PMAPP, SELECT_MENU } from 'actions';

export default function rootReducer (state, action) {
	switch (action.type)
	{
		case SWITCH_PMAPP:
			return { ...state, currentappindex: action.payload };
		case SELECT_MENU:
			return {...state, currentmenuindex: action.payload };
		default:
			return state;
	}
}