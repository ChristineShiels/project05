// component to display radio button icons
import { Component, Fragment } from 'react';

class RadioRow extends Component {
    render() {
        return (
            <Fragment>
                <section className={this.props.rowId + " formSection"} onChange={this.props.change}>
                    <div className="radioRowContainer">
                        <div className="radioContainer">
                            <input type="radio" id={this.props.rowId + "One"} name={this.props.rowId} value={this.props.valueOne} required/>
                            <label htmlFor={this.props.rowId + "One"}>
                                <img src={this.props.pictureOne} alt={this.props.valueOne} width={this.props.widthOne}/>{this.props.valueOne}
                            </label>
                        </div>
                        <div className="radioContainer">
                            <input type="radio" id={this.props.rowId + "Two"} name={this.props.rowId} value={this.props.valueTwo}/>
                            <label htmlFor={this.props.rowId + "Two"}>
                                <img src={this.props.pictureTwo} alt={this.props.valueTwo} width={this.props.widthTwo}/>{this.props.valueTwo}
                            </label>
                        </div>
                        <div className="radioContainer">
                            <input type="radio" id={this.props.rowId + "Three"} name={this.props.rowId} value={this.props.valueThree}/>
                            <label htmlFor={this.props.rowId + "Three"}>
                                <img src={this.props.pictureThree} alt={this.props.valueThree} width={this.props.widthThree}/>{this.props.valueThree}
                            </label>
                            </div>
                        </div>
                </section>
            </Fragment>
        )
    }
}

export default RadioRow;