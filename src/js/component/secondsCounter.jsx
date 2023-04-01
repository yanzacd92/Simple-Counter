import React from "react";
import PropTypes from "prop-types";

export const SecondsCounter = (props) => {
	return (
		<div className="counter">
			<div className="number">{props.value}</div>
		</div>
	);
};

SecondsCounter.PropTypes = {
	value: PropTypes.number
};