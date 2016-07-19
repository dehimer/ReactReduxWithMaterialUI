import React from 'react';

import styles from './index.css';
// import Button from 'components/Button'

import RaisedButton from 'material-ui/RaisedButton';

export default class Switcher extends React.Component {
	componentWillMount() {
		console.log('component will mount');
	}
	render() {
		console.log(styles);
		return (
			<div className={ styles.root }>
				{
					this.props.pmapps.map((pmapp, appindex) => {

						const isactive = (appindex*1 === this.props.currentappindex*1);
						console.log(isactive, appindex);
						return (
							// <Button key={ pmapp.id } isactive={ isactive} customize={ {classNames: [styles.button], style:{margin:'0px', marginLeft:'5px'}} } onClick={ e => this.props.onAppButtonClick(e, appindex) }>
							// 	{ pmapp.name }
							// </Button>
							<RaisedButton key={ pmapp.id } label={ pmapp.name } secondary={isactive} style={ {marginLeft:'10px', flex:'1 auto'} } onClick={ e => this.props.onAppButtonClick(e, appindex) }/>
						)
					})
				}
			</div>
		)
	}
}