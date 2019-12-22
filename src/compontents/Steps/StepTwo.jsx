import React, { Component } from 'react'
import Checkbox from '../Input/Checkbox'

export class StepTwo extends Component {
	render() {
		const { stepTwoElements } = this.props
		return stepTwoElements.map(item => {
			return (
				<Checkbox
					key={item.name}
					item={item}
					handleTotal={this.props.handleTotal}
				/>
			)
		})
	}
}

export default StepTwo
