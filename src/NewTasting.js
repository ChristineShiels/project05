import { Component } from 'react';
import Footer from './Footer.js';
import bottle from './assets/bottle.png';
import can from './assets/can.png';
import tap from './assets/tap.png';

class NewTasting extends Component {
    render() {
        return (
            <div className="newTasting">
                <h2>Taste your beer</h2>
                <form>
                    {/* input type="text"  */}
                    <div className="textInputs">
                        <div className="inputRowContainer" key>
                            <label htmlFor="beerName">What beer are you tasting?</label>
                            <input type="text" id="beerName" name="beerName" placeholder="Beer Name" required/>
                        </div>
                        <div className="inputRowContainer" key>
                            <label htmlFor="brewery">Which brewery made it?</label>
                            <input type="text" id="brewery" name="brewery" placeholder="Brewery Name" required/>
                        </div>
                        <div className="inputRowContainer" key>
                            <label htmlFor="style">What style is your beer?</label>
                            <input type="text" id="style" name="style" placeholder="Sour, Gose, Porter, etc" required/>
                        </div>
                        <h4>Where was the beer poured from?</h4>
                        <div className="radioRowContainer">

                            <div className="radioContainer">
                                <input type="radio" id="containerOne" name="container" value="bottle"/>
                                <label htmlFor="containerOne">
                                    <img src={bottle} alt="Beer Bottle" width="20px"/>Bottle</label>
                            </div>
                            <div className="radioContainer">
                                <input type="radio" id="containerTwo" name="container" value="can"/>
                                <label htmlFor="containerTwo">
                                    <img src={can} alt="Beer Can" width="35px"/>Can</label>
                            </div>
                            <div className="radioContainer">
                                <input type="radio" id="containerThree" name="container" value="tap"/>
                                <label htmlFor="containerThree">
                                    <img src={tap} alt="Beer Tap" width="25px"/>Tap</label>
                            </div>
                        </div>
                    </div>
                    {/* <input type="radio"/> */}
                    <div className="beerColour">
                        <input type="radio" id="colourOne" name="colour" value="straw"/>
                            <label htmlFor="colourOne">Straw</label>
                        <input type="radio" id="colourTwo" name="colour" value="gold"/>
                            <label htmlFor="colourTwo">Gold</label>
                        <input type="radio" id="colourThree" name="colour" value="amber"/>
                            <label htmlFor="colourThree">Amber</label>
                        <input type="radio" id="colourFour" name="colour" value="copper"/>
                            <label htmlFor="colourFour">Copper</label>
                        <input type="radio" id="colourFive" name="colour" value="brown"/>
                            <label htmlFor="colourFive">Brown</label>
                        <input type="radio" id="colourSix" name="colour" value="black"/>
                            <label htmlFor="colourSix">Black</label>
                    </div>
                </form>
                <Footer/>
            </div>
        )
    }
}

export default NewTasting;