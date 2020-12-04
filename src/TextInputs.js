// component to display text inputs
import { Component } from 'react';

class TextInputs extends Component {
    render() {
        return (
        <div>
            <div className="inputRowContainer">
                            <label htmlFor="beerName">What beer are you tasting?*</label>
                            <input type="text" id="beerName" name="beerName" required placeholder="Beer Name" onChange={this.props.change}/>
                        </div>
                        <div className="inputRowContainer">
                            <label htmlFor="brewery">Which brewery made it?*</label>
                            <input type="text" id="brewery" name="brewery" required placeholder="Brewery Name" onChange={this.props.change}/>
                        </div>
                        <div className="inputRowContainer">
                            <label htmlFor="style">What style is your beer?*</label>
                            <input type="text" id="style"
                            name="style" required placeholder="Sour, Gose, Porter, etc" onChange={this.props.change}/>
                        </div>
                        <p className="required">*required</p>
        </div>
        )
    }
}

export default TextInputs;