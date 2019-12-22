import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

export class StepOne extends Component {
	handleOnclick = e => {
		const index = this.props.stepOneElements.indexOf(e.item)
		this.props.proceedToStepTwo(index)
	}
	render() {
		const { stepOneElements } = this.props
		return stepOneElements.map(item => {
			return (
				<Card
					key={item}
					onClick={() => this.handleOnclick({ item })}
					className="mt-2"
				>
					<Card.Body>
						<Card.Title>{item}</Card.Title>
					</Card.Body>
				</Card>
			)
		})
	}
}

export default StepOne
