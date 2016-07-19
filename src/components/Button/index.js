import styles from './index.css';

import React from 'react';

export default class Button extends React.Component {

	render() {
		
		let className = this.props.isactive?styles.active:styles.default;
		let style = {};
		
		console.log(this.props.customize)
		if(this.props.customize)
		{
			if(this.props.customize.classNames)
			{
				className += ' '+this.props.customize.classNames.join(' ');
			}

			if(this.props.customize.style)
			{
				style = {...this.props.customize.style, ...style};
				console.log(style);
			}
		}



		return (
			<div className={ className } onClick={ this.props.onClick } style={ style }>
				{ this.props.children }
			</div>
		)
	}
}