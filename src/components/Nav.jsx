import React from "react";


function Nav() {
	let navStyle = {
		borderBottom: "2px lightgray solid",
		position: "absolute",
		top: "0",
		width: "100%",
		height: "100px"
	}
	let imageStyle = {
		width: "70px"
	}
	let imageDiv ={
		display: "inline-block",
		verticalAlign: "top",
		margin: "5px",
		padding: "5px",
	}
	let divStyle = {
		display: "inline-block",
		verticalAlign: "top",
		margin: "5px",
		padding: "5px",
		float: "right"
	}

	return (
		<div style={navStyle}>
			<div style={imageDiv}>
				<img style={imageStyle} src="https://images.vexels.com/media/users/3/145609/isolated/preview/333e626ad54e31a81c17d882c1d8aa6b-cow-illustration-farm-by-vexels.png" />   
			</div>
			<div style={divStyle}>
				<h4>Schedule</h4>
			</div>
			<div style={divStyle}>
				<h4>Produce</h4>
			</div>
		</div>
	);
}
  
export default Nav;