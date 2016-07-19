import React from 'react';

import styles from './index.css'
// import Button from 'components/Button'

// import RaisedButton from 'material-ui/RaisedButton';
import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table';

export default class Content extends React.Component {
	onItemClick(e, itemindex)
	{
		if(this.props.data && this.props.data[itemindex])
		{
			alert('clicked: '+this.props.data[itemindex].name);
		}
	}
	render() {

		return (
			<div className={ styles.root }>
				<Table height={'350px'}>
					<TableBody>
					{
						this.props.data.map((item, index) => (
							<TableRow key={index}>
								<TableRowColumn >
									{ item.name }
								</TableRowColumn>
							</TableRow>
						))
					}
					</TableBody>
				</Table>
				
				
			</div>
		)
	}
}
