import { Component } from 'react';

class Checkboxes extends Component {
    render() {
        return (
        <div className="checkRowContainer">
                <div className="checkContainer">
                    <input type="checkbox" id={this.props.rowId + "One"} name={this.props.rowId} value={this.props.valueOne} onChange={this.props.change} checked={this.props.check} required/>
                    <label htmlFor={this.props.rowId + "One"}>
                        <img src={this.props.pictureOne} alt={this.props.valueOne} width={this.props.widthOne}/>{this.props.valueOne}</label>
                </div>
                <div className="checkContainer">
                    <input type="checkbox" id={this.props.rowId + "Two"} name={this.props.rowId} value={this.props.valueTwo} onChange={this.props.change} checked={this.props.check}/>
                    <label htmlFor={this.props.rowId + "Two"}>
                        <img src={this.props.pictureTwo} alt={this.props.valueTwo} width={this.props.widthTwo}/>{this.props.valueTwo}</label>
                </div>
                <div className="checkContainer">
                    <input type="checkbox" id={this.props.rowId + "Three"} name={this.props.rowId} value={this.props.valueThree} onChange={this.props.change} checked={this.props.check}/>
                    <label htmlFor={this.props.rowId + "Three"}>
                        <img src={this.props.pictureThree} alt={this.props.valueThree} width={this.props.widthThree}/>{this.props.valueThree}</label>
                </div>
                <div className="checkContainer">
                    <input type="checkbox" id={this.props.rowId + "Four"} name={this.props.rowId} value={this.props.valueFour} onChange={this.props.change} checked={this.props.check}/>
                    <label htmlFor={this.props.rowId + "Four"}>
                        <img src={this.props.pictureFour} alt={this.props.valueFour} width={this.props.widthFour}/>{this.props.valueFour}</label>
                </div>
                <div className="checkContainer">
                    <input type="checkbox" id={this.props.rowId + "Five"} name={this.props.rowId} value={this.props.valueFive} onChange={this.props.change} checked={this.props.check}/>
                    <label htmlFor={this.props.rowId + "Five"}>
                        <img src={this.props.pictureFive} alt={this.props.valueFive} width={this.props.widthFive}/>{this.props.valueFive}</label>
                </div>
            </div>
        )
    }
}

export default Checkboxes;