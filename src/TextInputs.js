// component to display text inputs
import { Component, Fragment } from 'react';

class TextInputs extends Component {
    render() {
        return (
        <Fragment>
            <div className="inputRowContainer" key>
                            <label htmlFor="beerName">What beer are you tasting?*</label>
                            <input type="text" id="beerName" name="beerName" required placeholder="Beer Name" onChange={this.handleChange}/>
                        </div>
                        <div className="inputRowContainer" key>
                            <label htmlFor="brewery">Which brewery made it?*</label>
                            <input type="text" id="brewery" name="brewery" required placeholder="Brewery Name" onChange={this.handleChange}/>
                        </div>
                        <div className="inputRowContainer" key>
                            <label htmlFor="style">What style is your beer?*</label>
                            <input type="text" id="style"
                            name="style" required placeholder="Sour, Gose, Porter, etc" onChange={this.handleChange}/>
                        </div>
                        <p className="required">*required</p>
        </Fragment>
        )
    }
}

export default TextInputs;