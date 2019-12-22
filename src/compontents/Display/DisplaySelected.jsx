import React from 'react'

const DisplaySelected = props => {
	const { selectedInstepTwo } = props
	return (
		<div className="col-md-12">
			{selectedInstepTwo.length !== 0 ? (
				<div className="lead">
					Selected packages -
					{selectedInstepTwo.map(item => {
						return (
							<h5 key={item.name}>
								{item.name} - {item.price}
							</h5>
						)
					})}
				</div>
			) : (
				undefined
			)}
		</div>
	)
}

export default DisplaySelected
