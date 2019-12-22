import React, { Component } from 'react'

export class Checkbox extends Component {
	handleChange = e => {
		this.props.handleTotal(e.target.value, e.target.checked, e.target.name)
	}
	render() {
		return (
			<React.Fragment>
				<div class="form-check mb-4">
					<input
						className="form-check-input"
						name={this.props.item.name}
						type="checkbox"
						value={this.props.item.price}
						onChange={this.handleChange}
						checked={this.props.item.checked}
					/>
					<label class="form-check-label" for="defaultCheck1">
						{this.props.item.name}
					</label>
				</div>
			</React.Fragment>
		)
	}
}

export default Checkbox
