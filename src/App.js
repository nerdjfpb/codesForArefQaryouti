import React, { Component } from 'react'
import './App.css'
import StepOne from './compontents/Steps/StepOne'
import StepTwo from './compontents/Steps/StepTwo'
import StepThree from './compontents/Steps/StepThree'
import DisplaySelected from './compontents/Display/DisplaySelected'

class App extends Component {
	state = {
		step: 1,
		stepOneElements: [
			'Brand Identity',
			'Mobile Application',
			'Web Design and Development'
		],
		stepOneSelected: '',
		brandIdentity: [
			{ name: 'Logo', price: 100, checked: false },
			{ name: 'Brochures', price: 70, checked: false },
			{ name: 'Envelopes', price: 20, checked: false },
			{ name: 'Business Cards', price: 50, checked: false }
		],
		mobileApplication: [
			{ name: 'UX Wireframing and Prototyping', price: 700, checked: false },
			{ name: 'UI Design', price: 700, checked: false },
			{ name: 'Application Development', price: 1500, checked: false },
			{ name: 'Backend Development', price: 3000, checked: false }
		],
		webDesign: [
			{ name: 'UX Wireframing and Prototyping', price: 500, checked: false },
			{ name: 'UI Design', price: 1000, checked: false },
			{ name: 'UI Development', price: 1000, checked: false },
			{ name: 'Frontend Development', price: 2000, checked: false },
			{ name: 'Backend Development', price: 2000, checked: false }
		],
		step2Element: '',
		total: 0,
		selectedInstepTwo: [],
		clientName: '',
		clientEmail: '',
		clientPhone: ''
	}

	nextStep = () => {
		const { step } = this.state
		if (step !== 3) {
			this.setState({
				step: step + 1
			})
		}
	}

	prevStep = () => {
		const { step } = this.state
		if (step !== 1) {
			this.setState({
				step: step - 1
			})
		}
	}

	handleGoingToStepTwo = selectedStepOne => {
		if (selectedStepOne === 0) {
			this.setState({
				step2Element: this.state.brandIdentity
			})
			this.nextStep()
		} else if (selectedStepOne === 1) {
			this.setState({
				step2Element: this.state.mobileApplication
			})
			this.nextStep()
		} else if (selectedStepOne === 2) {
			this.setState({
				step2Element: this.state.webDesign
			})
			this.nextStep()
		}
	}

	handleTotal = (selectedPrice, selected, selectedName) => {
		const indexForChecked = this.state.step2Element.findIndex(
			item => item.name === selectedName
		)
		let step2Element = this.state.step2Element
		let total = 0
		const selectedInstepTwo = this.state.selectedInstepTwo
		const selectedObject = {
			price: selectedPrice,
			name: selectedName
		}
		if (selected === true) {
			step2Element[indexForChecked].checked = true
			total = this.state.total + parseInt(selectedPrice)
			selectedInstepTwo.push(selectedObject)
		} else if (selected === false) {
			step2Element[indexForChecked].checked = false
			total = this.state.total - parseInt(selectedPrice)
			selectedInstepTwo.pop(selectedObject)
		}
		this.setState({ step2Element, total, selectedInstepTwo })
	}

	handleFormChange = (selectedField, value) => {
		if (selectedField === 'name') {
			this.setState({ clientName: value })
		} else if (selectedField === 'phone') {
			this.setState({ clientPhone: value })
		} else if (selectedField === 'email') {
			this.setState({ clientEmail: value })
		}
	}

	handleLastStep = () => {
		const { clientName, clientEmail, clientPhone } = this.state
		let formValidation = 0
		if (clientName.length > 5) {
			formValidation = formValidation + 1
		}
		if (
			clientEmail.length > 0 &&
			/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clientEmail)
		) {
			formValidation = formValidation + 1
		}
		if (clientPhone.length >= 10) {
			formValidation = formValidation + 1
		}
		if (formValidation >= 2) this.setState({ step: 4 })
		else {
			this.setState({ step: 3 })
		}
	}

	render() {
		const {
			step,
			stepOneElements,
			selectedInstepTwo,
			clientEmail,
			clientName,
			clientPhone
		} = this.state
		// eslint-disable-next-line default-case
		switch (step) {
			case 1:
				return (
					<div className="container">
						<div className="text-center mt-5">
							<h3>Step - {this.state.step}</h3>
						</div>
						<div className="row mt-5 text-center">
							<div className="col-md-12 mb-5">
								<StepOne
									stepOneElements={stepOneElements}
									next={this.nextStep}
									proceedToStepTwo={this.handleGoingToStepTwo}
								/>
							</div>
							<DisplaySelected selectedInstepTwo={selectedInstepTwo} />
						</div>
					</div>
				)
			case 2:
				return (
					<div className="container">
						<div className="text-center mt-5">
							<h3>Step - {this.state.step}</h3>
						</div>
						<div className="row mt-5">
							<div className="col-md-12 mt-5">
								<StepTwo
									stepTwoElements={this.state.step2Element}
									handleTotal={this.handleTotal}
								/>
								<h5 className="mb-3">Total - {this.state.total}</h5>
								<button
									className="btn btn btn-danger mr-2 btn-lg"
									onClick={this.prevStep}
								>
									Back
								</button>
								<button
									className="btn btn btn-primary btn-lg"
									onClick={this.nextStep}
								>
									Next
								</button>
							</div>
						</div>
					</div>
				)
			case 3:
				return (
					<React.Fragment>
						<div className="container">
							<div className="text-center mt-5">
								<h3>Step - {this.state.step}</h3>
							</div>
							<div className="row mt-5">
								<DisplaySelected selectedInstepTwo={selectedInstepTwo} />
								<div className="col-md-12 mt-5">
									{selectedInstepTwo.length !== 0 ? (
										<div>
											<StepThree
												handleFormChange={this.handleFormChange}
												prevStep={this.prevStep}
												handleLastStep={this.handleLastStep}
											/>
										</div>
									) : (
										<div className="display-3 text-danger">
											Sorry! You didn't select any package
										</div>
									)}
									{clientName && (
										<div className="display-4">Name : {clientName}</div>
									)}
									{clientEmail && (
										<div className="display-4">Email : {clientEmail}</div>
									)}
									{clientPhone && (
										<div className="display-4">Phone : {clientPhone}</div>
									)}
								</div>
							</div>
						</div>
					</React.Fragment>
				)
			case 4:
				return (
					<div className="container">
						<div className="display-3">Thanks for submitting the form!</div>
					</div>
				)
		}
	}
}

export default App
