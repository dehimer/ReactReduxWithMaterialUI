import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { switchPMApp, selectMenuItem } from 'actions'

import Switcher from 'components/Switcher'
import Menu from 'components/Menu'

import RaisedButton from 'material-ui/RaisedButton';


import styles from './index.css';



export class PMApp extends React.Component {
	constructor(props)
	{
		super(props);
		console.log(this.currentappindex);
		console.log((!this.props.pmapps[this.currentappindex]) && this.props.pmapps[0]);
		if(this.props.currentappindex === undefined || (!this.props.pmapps[this.props.currentappindex]) && this.props.pmapps[0])
		{
			this.props.switchPMApp(0);
		}
	}
	onAppButtonClick(e, nextappindex) {

		this.props.switchPMApp(nextappindex);
		this.props.selectMenuItem(0);
	}
	onMenuItemSelect(menuitemindex) {
		this.props.selectMenuItem(menuitemindex);
	}
    render() {

		const currentapp = this.props.pmapps[this.props.currentappindex];
		console.log();

		let content = 'PLAN must be here';

		if(currentapp && currentapp.menu)
		{
			content = <Menu list={currentapp.menu} onMenuItemSelect={::this.onMenuItemSelect}/>
		}

        return <div className={ styles.root }>
			<div className={ styles.header }>
				
				<div className={ styles.logo }>
					<RaisedButton label={'Project Manager'} fullWidth={true} backgroundColor={'#eee'} labelStyle={ {fontSize:'16px', fontWeight:'bold', color:'#09f'} }/>
				</div>
				
				<div className={ styles.switcher }>
					<Switcher pmapps={this.props.pmapps} currentappindex={this.props.currentappindex} onAppButtonClick={::this.onAppButtonClick}/>
				</div>
			</div>
			<div className={ styles.content }>
				{ content }
			</div>
		</div>;
    }
}

function mapStateToProps(state) {
	return {
		pmapps: state.pmapps,
		currentappindex: state.currentappindex
	}
}

function mapDispatchToProps(dispatch) {
	return {
		switchPMApp: bindActionCreators(switchPMApp, dispatch),
		selectMenuItem: bindActionCreators(selectMenuItem, dispatch)
	}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PMApp)