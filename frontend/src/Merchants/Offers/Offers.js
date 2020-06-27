import React from 'react';
import ReactModal from 'react-modal';


class Offers extends React.Component {

	constructor(props) {
		super(props);
	}


	render() {
		return (
			<ReactModal className="offers-background" isOpen={this.props.isVisible}>
				<button onClick={this.props.closeModal}>Close Modal</button>
				<div className="white-rect">
					<p> asdfasdfasdfasdf </p>
				</div>
			</ReactModal>
		);
	}
}

export default Offers;
