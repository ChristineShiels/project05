import { Component } from 'react';
import Footer from './Footer.js';
import RadioRow from './RadioRow.js';
import RadioBar from './RadioBar.js';
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
                        {/* Radio button icon row */}
                        <h4>What did your beer come in?</h4>
                        <RadioRow rowId="container"
                            pictureOne={bottle}
                            pictureTwo={can}
                            pictureThree={tap}
                            valueOne="bottle"
                            valueTwo="can"
                            valueThree="tap"
                            widthOne="20px"
                            widthTwo="35px"
                            widthThree="25px"/>
                    </div>
                    <h5>Pour your beer into a clean glass and give it a good look:</h5>
                    <div className="heading">
                        <img src={eye} alt="Eye icon"/>
                        <h6>Appearance</h6>
                    </div>
                    {/* since this form element is different than the rest, I didn't make a seperate component for it */}
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
                    <RadioRow rowId="clarity"
                            pictureOne={diamond}
                            pictureTwo={hazy}
                            pictureThree={cloud}
                            valueOne="clear"
                            valueTwo="hazy"
                            valueThree="cloudy"
                            widthOne="75px"
                            widthTwo="90px"
                            widthThree="90px"/>
                    </div>
                    <h4 className="formLabel" >Head Retention and Lacing:</h4>
                    <div className="beerHead formSection">
                        <RadioBar barId="head"
                            valueOne="poor"
                            valueTwo="good"
                            valueThree="persistent"/>
                    </div>
                </form>
                <Footer/>
            </div>
        )
    }
}

export default NewTasting;