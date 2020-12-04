// component to display radio button bar for colour selection
import { Component} from 'react';

class ColourBar extends Component {
    render() {
        return (
            <section className="beerColour radioBar formSection" onChange={this.handleChange}>
                <input type="radio" id="colourOne" name="colour" value="straw" />
                            <label htmlFor="colourOne">Straw</label>
                        <input type="radio" id="colourTwo" name="colour" value="gold" />
                            <label htmlFor="colourTwo">Gold</label>
                        <input type="radio" id="colourThree" name="colour" value="amber" />
                            <label htmlFor="colourThree">Amber</label>
                        <input type="radio" id="colourFour" name="colour" value="copper" />
                            <label htmlFor="colourFour">Copper</label>
                        <input type="radio" id="colourFive" name="colour" value="brown" />
                            <label htmlFor="colourFive">Brown</label>
                        <input type="radio" id="colourSix" name="colour" value="black" />
                            <label htmlFor="colourSix">Black</label>
            </section>
        )
    }
}

export default ColourBar;