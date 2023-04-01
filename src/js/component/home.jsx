import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { SecondsCounter } from "./secondsCounter.jsx";


//create your first component
const Home = (props) => {
	return (
		<div className="counter container-fluid">
			<FontAwesomeIcon className="icon" icon={faClock} />
			<SecondsCounter value={props.six%10} className="six"/>
			<SecondsCounter value={props.five%10} className="five"/>
			<SecondsCounter value={props.four%10} className="four"/>
			<SecondsCounter value={props.three%10} className="three"/>
			<SecondsCounter value={props.two%10} className="two"/>
			<SecondsCounter value={props.one%10} className="one"/>
		</div>
	);
};

Home.PropTypes = {
	one: PropTypes.number,
	two: PropTypes.number,
	three: PropTypes.number,
	four: PropTypes.number,
	five: PropTypes.number,
	six: PropTypes.number
};

export default Home;
