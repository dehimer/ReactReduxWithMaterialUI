export const SWITCH_PMAPP = 'SWITCH_PMAPP';
export const SELECT_MENU = 'SELECT_MENU';

export function switchPMApp (pmappindex) {
	return {
		type: SWITCH_PMAPP,
		payload: pmappindex
	}
}

export function selectMenuItem (menuitemindex) {
	return {
		type: SELECT_MENU,
		payload: menuitemindex
	}
}