import { Component } from 'react';
import back from './assets/back.png';





class BackArrow extends Component {
    render() {
        return (
            <div className="backArrow">
            <button className="backArrow" onClick={this.props.back}><img  src={back} alt="Back Arrow"/></button>
          </div>
        )
    }
}

export default BackArrow;