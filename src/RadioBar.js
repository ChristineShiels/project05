// component to display radio button bars
import { Component } from 'react';

class RadioBar extends Component {
    render() {
        return (
            <section className={this.props.barId + " formSection"} onChange={this.props.change}>
                <div className="radioBar">
                    <input type="radio" id={this.props.barId + "One"} name={this.props.barId} value={this.props.valueOne}/>
                        <label htmlFor={this.props.barId + "One"}>{this.props.valueOne}</label>
                    <input type="radio" id={this.props.barId + "Two"} name={this.props.barId} value={this.props.valueTwo}/>
                        <label htmlFor={this.props.barId + "Two"}>{this.props.valueTwo}</label>
                    <input type="radio" id={this.props.barId + "Three"} name={this.props.barId} value={this.props.valueThree}/>
                        <label htmlFor={this.props.barId + "Three"}>{this.props.valueThree}</label>
                </div>
            </section>
        )
    }
}

export default RadioBar;