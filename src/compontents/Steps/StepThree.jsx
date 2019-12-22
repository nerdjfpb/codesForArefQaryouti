import React, { Component } from 'react'

export class StepThree extends Component {
	state = {
		email: false
	}
	handleOnSelectChange = e => {
		const value = e.target.value
		if (value === 'email') this.setState({ email: true, phone: false })
		else if (value === 'phone') this.setState({ email: false, phone: true })
	}
	handleOnChange = e => {
		console.log(e.target.name)
		const { name, value } = e.target
		this.props.handleFormChange(name, value)
	}
	handleOnClick = e => {
		e.preventDefault()
		this.props.handleLastStep()
	}
	render() {
		return (
			<form method="post">
				<div class="form-group">
					<label for="cname">Company Name</label>
					<input
						class="form-control"
						type="text"
						name="name"
						id="cname"
						placeholder="Enter your company name"
						onChange={this.handleOnChange}
						required
					/>
				</div>
				<div className="form-group">
					<label for="wayofcontact">Way of contact</label>
					<select
						className="form-control"
						onChange={this.handleOnSelectChange}
						id="wayofcontact"
					>
						<option value=" "></option>
						<option value="email">Email</option>
						<option value="phone">Phone</option>
					</select>
				</div>
				{this.state.email === true ? (
					<div class="form-group">
						<label for="exampleInputEmail1">Email address</label>
						<input
							class="form-control"
							type="email"
							name="email"
							placeholder="Enter your email"
							onChange={this.handleOnChange}
							id="exampleInputEmail1"
							required
						/>
						<small id="emailHelp" class="form-text text-muted">
							We'll never share your email with anyone else.
						</small>
					</div>
				) : (
					undefined
				)}
				{this.state.phone === true ? (
					<div class="form-group">
						<label for="exampleInputPhone1">PhoneNumber</label>
						<input
							class="form-control"
							type="text"
							name="phone"
							placeholder="Enter your phone number"
							id="exampleInputPhone1"
							onChange={this.handleOnChange}
							required
						/>
						<small id="phoneHelp" class="form-text text-muted">
							We'll never share your phone with anyone else.
						</small>
					</div>
				) : (
					undefined
				)}
				<br />
				<button
					className="btn btn btn-danger mr-2 btn-lg"
					onClick={this.props.prevStep}
				>
					Back
				</button>
				<input
					type="submit"
					className="btn btn btn-success mr-2 btn-lg"
					onClick={this.handleOnClick}
				/>
			</form>
		)
	}
}

export default StepThree
