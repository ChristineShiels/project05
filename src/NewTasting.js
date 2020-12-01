import { Component } from 'react';
import Footer from './Footer.js';
import bottle from './assets/bottle.png';
import can from './assets/can.png';
import tap from './assets/tap.png';
import eye from './assets/eye.png';
import cloud from './assets/cloud.png';
import diamond from './assets/diamond.png';
import hazy from './assets/hazy.png';

class NewTasting extends Component {
    render() {
        return (
            <div className="newTasting">
                {/* title */}
                <h2>Taste your beer</h2>
                {/* start of form */}
                <form>
                    {/* Text Inputs */}
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
                        {/* Radio button icons */}
                        <h4>What did your beer come in?</h4>
                        <div className="radioRowContainer">
                            <div className="radioContainer" tabIndex="0">
                                <input type="radio" id="containerOne" name="container" value="bottle"/>
                                <label htmlFor="containerOne">
                                    <img src={bottle} alt="Beer Bottle" width="20px"/>Bottle</label>
                            </div>
                            <div className="radioContainer" tabIndex="0">
                                <input type="radio" id="containerTwo" name="container" value="can"/>
                                <label htmlFor="containerTwo">
                                    <img src={can} alt="Beer Can" width="35px"/>Can</label>
                            </div>
                            <div className="radioContainer" tabIndex="0">
                                <input type="radio" id="containerThree" name="container" value="tap"/>
                                <label htmlFor="containerThree">
                                    <img src={tap} alt="Beer Tap" width="25px"/>Tap</label>
                            </div>
                        </div>
                    </div>
                    <h5>Pour your beer into a clean glass and give it a good look:</h5>
                    <div className="heading">
                        <img src={eye} alt="Eye icon"/>
                        <h6>Appearance</h6>
                    </div>
                    {/* <input type="radio"/> */}
                    <h4 className="formLabel" >Colour:</h4>
                    <div className="beerColour radioBar formSection">
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
                    <h4 className="formLabel" >Clarity:</h4>
                    <div className="clarity formSection">
                        <div className="radioRowContainer">
                            <div className="radioContainer" tabIndex="0">
                                <input type="radio" id="clarityOne" name="clarity" value="clear"/>
                                <label htmlFor="clarityOne">
                                    <img src={diamond} alt="Diamond" width="75px"/>Clear</label>
                            </div>
                            <div className="radioContainer" tabIndex="0">
                                <input type="radio" id="clarityTwo" name="clarity" value="hazy"/>
                                <label htmlFor="clarityTwo">
                                    <img src={hazy} alt="Steam Icon" width="90px"/>Hazy</label>
                            </div>
                            <div className="radioContainer" tabIndex="0">
                                <input type="radio" id="clarityThree" name="clarity" value="cloudy"/>
                                <label htmlFor="clarityThree">
                                    <img src={cloud} alt="Cloud" width="90px"/>Cloudy</label>
                            </div>
                        </div>
                    </div>
                    <h4 className="formLabel" >Head Retention and Lacing:</h4>
                    <div className="formSection">
                        <div className="beerHead radioBar">
                            <input type="radio" id="headOne" name="head" value="poor"/>
                                <label htmlFor="headOne">Poor</label>
                            <input type="radio" id="headTwo" name="head" value="good"/>
                                <label htmlFor="headTwo">Good</label>
                            <input type="radio" id="headThree" name="head" value="persistent"/>
                                <label htmlFor="headThree">Persistent</label>
                        </div>
                    </div>
                </form>
                <Footer/>
            </div>
        )
    }
}

export default NewTasting;