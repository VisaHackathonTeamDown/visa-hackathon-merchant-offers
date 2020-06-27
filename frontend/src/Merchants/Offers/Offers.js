import React from 'react';
import ReactModal from 'react-modal';
import Modal from '@material-ui/core/Modal';

class Offers extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		/*return (
			<ReactModal className="offers-background" isOpen={this.props.isVisible}>
				<div className="rect">
					<button onClick={this.props.closeModal}>Close Modal</button>
				</div>
			</ReactModal>
		);
		return (
			<Modal className="offers-background" open={this.props.isVisible} onClose={this.props.closeModal}>
				<div className="rect">
					Hello world
				</div>
			</Modal>
		);*/
		return (
			<div className="modal">
				<div className="modal-main">
					This is some text
					<button onClick={this.props.closeModal}>Close</button>
				</div>
			</div>
		);
	}
}

export default Offers;
