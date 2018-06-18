import React, {Component} from 'react';
import MemberContent from './memberContent';
import Button from '../Button';
import Modal from 'react-modal';


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root')

class Trial extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			isOpen: false
		 };
		 this.modalOpen = this.modalOpen.bind(this);
		 this.modalClose = this.modalClose.bind(this)
	}
	modalOpen() {
		this.setState({isOpen: true})
	}
 
	modalClose() {
		this.setState({isOpen: false})
	}

	unRegister() {
		this.setState({
			isOpen: false
		})

	}

	render() {
		return (
			<div>
					<h1>고객님은 30일 무료 이용 체험 중이십니다</h1>
					<MemberContent />
					<div>
						<Button onClick={this.modalOpen}>해지하기</Button>
						<Modal isOpen={this.state.isOpen} style={customStyles}>
							<h1>정말 해지 하시 겠습니까?</h1>
							<Button onClick={this.props.unRegister}>YES!!!!</Button>
							<Button onClick={this.modalClose}>No!!!</Button>
							<div>
								<Button onClick={this.modalClose}>닫기</Button>
							</div>
						</Modal>
					</div>
			</div>
	)
	}
}

export default Trial;

