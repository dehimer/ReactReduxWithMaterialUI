import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { selectMenuItem } from 'actions'

import styles from './index.css';
import Content from 'components/Content'
// import Button from 'components/Button'

import * as UIMenu from 'material-ui/Menu'


export default class Menu extends React.Component {
	constructor(props)
	{
		super(props);

		if(this.props.currentmenuindex === undefined || (!this.props.list[this.props.currentmenuindex]) && this.props.list[0])
		{
			this.props.selectMenuItem(0);
		}
	}
	onItemClick(e, itemindex)
	{
		this.props.selectMenuItem(itemindex);
	}

	render() {


		let content = 'NO DATA';
		if(this.props.list[this.props.currentmenuindex] && this.props.list[this.props.currentmenuindex].data)
		{
			console.log(this.props.list);
			content = <Content data={this.props.list[this.props.currentmenuindex].data}/>
		}


		return (
			<div className={ styles.root }>
				<div className={ styles.menu }>
					

					<UIMenu.Menu autoWidth={false} style={ {overflow:'hidden'} } listStyle={ {overflow:'hidden', display:'inherit'} }>
						{
							this.props.list.map((item, index) => (
								// <Button  isactive={ (this.props.currentmenuindex*1 === index*1) }>
								// 	{ item.name }
								// </Button>
								<UIMenu.MenuItem
									key={index}
									onClick={ e=>::this.onItemClick(e, index) }
									checked={ (this.props.currentmenuindex*1 === index*1) }
									style={ {width:'100%', overflow:'hidden', minWidth:'100%'} }
								>
									{ item.name }
								</UIMenu.MenuItem>
							))
						}
						
					</UIMenu.Menu>
				</div>
				<div className={ styles.content }>
					{ content }
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		currentmenuindex: state.currentmenuindex
	}
}

function mapDispatchToProps(dispatch) {
	return {
		selectMenuItem: bindActionCreators(selectMenuItem, dispatch)
	}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu)