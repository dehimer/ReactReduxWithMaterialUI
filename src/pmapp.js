import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import configureStore from './store/configureStore'

import './styles/base.css'
import PMApp from './components/PMApp';

const initialAppState = {
	pmapps: [
		{
			id: 'lists',
			name: 'Списки',
			menu: [
				{
					name: 'Устройства',
					data: [
						{dn:'LAMP1', name: 'Лампочка 1'},
						{dn:'LAMP2', name: 'Лампочка 2'},
						{dn:'LAMP3', name: 'Лампочка 3'},
						{dn:'LAMP4', name: 'Лампочка 4'},
						{dn:'LAMP5', name: 'Лампочка 5'},
						{dn:'LAMP6', name: 'Лампочка 6'},
						{dn:'LAMP7', name: 'Лампочка 7'},
						{dn:'LAMP8', name: 'Лампочка 8'},
						{dn:'LAM4222222P9', name: 'Лампочка 9'},
						{dn:'LAMP10', name: 'Лампочка 10'},
						{dn:'LAMP11', name: 'Лампочка 11'},
						{dn:'LAMP12', name: 'Лампочка 12'},
						{dn:'LAMP13', name: 'Лампочка 13'},
						{dn:'LAMP14', name: 'Лампочка 14'}
					]
				},
				{
					name: 'Этаж',
					data: [
						{id:'Level0', name: 'Цоколь'},
						{id:'Level1', name: 'Первый этаж'},
						{id:'Level2', name: 'Второй этаж'},
						{id:'Level3', name: 'Мансарда'}
					]
				},
				{
					name: 'Комната',
					data: [
						{id:'Room01', name: 'Кладовка'},
						{id:'Room11', name: 'Кухня'},
						{id:'Room12', name: 'Зал'},
						{id:'Room13', name: 'Прихожая'},
						{id:'Room14', name: 'Туалет'},
						{id:'Room21', name: 'Спальня родителей'},
						{id:'Room22', name: 'Спальня детей'},
						{id:'Room23', name: 'Ванная'},
						{id:'Room31', name: 'Кабинет'}
					]
				}
			]
		},
		{
			id: 'scens',
			name: 'Сценарии',
			menu: [
				{
					name: 'Интерактивные сценарии',
					data: [
						{name: 'Включить весь свет'},
						{name: 'Выключить весь свет'},
						{name: 'Включить свет в прихожей'},
						{name: 'Выключить свет в прихожей'},
						{name: 'Переход в режим эконом'},
						{name: 'Переход в режим охраны'}
					]
				},
				{
					name: 'Сценарии по событиям устройства',
					data: [
						{name: 'On Cleaning On'},
						{name: 'On Cleaning Off'}
					]
				},
				{
					name: 'Группы сценариев',
					data: [
						{name: 'Избранные'},
						{name: 'Освещение'},
						{name: 'Климат'},
						{name: 'Безопасность'},
						{name: 'Прочее'}
					]
				}
			]
		},
		{
			id: 'plan',
			name: 'План',
			levels: [
				{id:'Level1', img:'level1.png'},
				{id:'Level2', img:'level2.png'}
			]
		}
	]
};


const store = configureStore(initialAppState);

ReactDOM.render(
	<Provider store={store}>
		<MuiThemeProvider muiTheme={getMuiTheme()}>
			<PMApp />
		</MuiThemeProvider>
	</Provider>
	, document.getElementById('root')
)