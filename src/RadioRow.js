import { Component } from 'react';

class RadioRow extends Component {
    render() {
        return (
            <div className="radioRowContainer">
                <div className="radioContainer">
                    <input type="radio" id={this.props.rowID + "One"} name={this.props.rowID} value={this.props.valueOne}/>
                    <label htmlFor={this.props.rowID + "One"}>
                        <img src={this.props.pictureOne} alt={this.props.valueOne} width={this.props.widthOne}/>{this.props.valueOne}</label>
                </div>
                <div className="radioContainer">
                    <input type="radio" id={this.props.rowID + "Two"} name={this.props.rowID} value={this.props.valueTwo}/>
                    <label htmlFor={this.props.rowID + "Two"}>
                        <img src={this.props.pictureTwo} alt={this.props.valueTwo} width={this.props.widthTwo}/>{this.props.valueTwo}</label>
                </div>
                <div className="radioContainer">
                    <input type="radio" id={this.props.rowID + "Three"} name={this.props.rowID} value={this.props.valueThree}/>
                    <label htmlFor={this.props.rowID + "Three"}>
                        <img src={this.props.pictureThree} alt={this.props.valueThree} width={this.props.widthThree}/>{this.props.valueThree}</label>
                </div>
            </div>
        )
    }
}

export default RadioRow;