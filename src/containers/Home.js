import React, { Component } from 'react';
import Guest from '../components/membership/guest';
import Trial from '../components/membership/trial';
import Member from '../components/membership/member';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            memberShip: 'guest'
        }
				this.stateChange = this.stateChange.bind(this);
				this.unRegister = this.unRegister.bind(this);
    }
     
    stateChange = () => {
        alert('가입되었습니다')
        this.setState({
            memberShip: 'trial'
        })
    }
		unRegister () {
			this.setState({
				memberShip: 'guest'
			})
		}

    render() {
        switch(this.state.memberShip) {
            case 'guest': return <Guest register={this.stateChange} />
            case 'trial': return <Trial unRegister={this.unRegister} />
            // case 'member': return <Member />
            default : return <Guest />
        }
    }
}

export default Home;