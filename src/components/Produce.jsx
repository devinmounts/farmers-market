import React from 'react';
import PropTypes from 'prop-types';

function Produce(produce) {

	let divStyle = {
		border: "3px solid grey",
		width: "25%",
		display: "inline-block",
		margin: "1.5%",
		padding: "10px",
		verticalAlign: "top",
		minHeight: "200px",
		WebkitBoxShadow: "0px 0px 33px 1px rgba(0,0,0,0.74)",
		MozBoxShadow: "0px 0px 33px 1px rgba(0,0,0,0.74)",
		boxShadow: "0px 0px 33px 1px rgba(0,0,0,0.74)",
		backgroundColor: "#d6bf27"
	}

	return(
		<div style={divStyle}>
			<h3>{produce.month}</h3>
		</div>
	)
}

Produce.propTypes = {
    month: PropTypes.string,
    produce: PropTypes.array
}

export default Produce;