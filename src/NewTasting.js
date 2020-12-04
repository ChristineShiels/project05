// assets and component imports
import { Component } from 'react';
import firebase from './firebase.js';
import Footer from './Footer.js';
// displays radio button icons
import RadioRow from './RadioRow.js';
// displays radio button bars
import RadioBar from './RadioBar.js';
// displays checkboxes
import Checkboxes from './Checkboxes.js';
import ColourBar from './ColourBar.js';
import TextInputs from './TextInputs.js'
// assets (is there a way to batch import these?)
import eye from './assets/eye.png';
import smell from './assets/smell.png';
import mouthfeel from './assets/mouthfeel.png';
import taste from './assets/taste.png';
import bottle from './assets/bottle.png';
import can from './assets/can.png';
import tap from './assets/tap.png';
import cloud from './assets/cloud.png';
import diamond from './assets/diamond.png';
import hazy from './assets/hazy.png';
import sweet from './assets/sweet.png';
import sour from './assets/sour.png';
import bitter from './assets/bitter.png';
import flat from './assets/flat.png';
import fizzy from './assets/fizzy.png';
import sparkling from './assets/sparkling.png';
import grain from './assets/grain.png';
import bread from './assets/bread.png';
import toasted from './assets/toast.png';
import honey from './assets/honey.png';
import nutty from './assets/nutty.png';
import caramel from './assets/caramel.png';
import chocolate from './assets/chocolate.png';
import coffee from './assets/coffee.png';
import earthy from './assets/earthy.png';
import floral from './assets/floral.png';
import spice from './assets/spice.png';
import citrus from './assets/citrus.png';
import fruit from './assets/fruit.png';
import pineapple from './assets/pineapple.png';
import smokey from './assets/smokey.png';
import funky from './assets/funky.png';
import corn from './assets/corn.png';
import berry from './assets/berry.png';
import banana from './assets/banana.png';
import hoppy from './assets/hoppy.png';
import yes from './assets/yes.png';
import no from './assets/no.png';



// create state
class NewTasting extends Component {
    constructor() {
        super();
        this.state = {
            aromas: [],
            flavours: [],
        }
    }

// add input to firebase on submit
handleAdd = (e) => {
    e.preventDefault();
    const dbRef = firebase.database().ref();
    dbRef.push(this.state)
    }


// event handler for !== checkboxes
handleChange = (e) => {
    // variables to describe event

    const target = e.target;
    const value = target.value;
    const name = target.name;
    // update state with info from click
    this.setState({
        [name]: value
    })
}

// event handler for aroma checkboxes
handleCheckAroma = (e) => {
    // variables to describe event
    const target = e.target;
    const checked = target.checked;
    const value = target.value;
    //make a copy of the aromas array so it doesn't get altered
    const copyOfAromasArray = [...this.state.aromas];
    const index = copyOfAromasArray.indexOf(value)
    // add to array if true, remove if false
    checked === true ? copyOfAromasArray.push(value) : copyOfAromasArray.splice(index,1);
    // update state with info from click
    this.setState({
        aromas: copyOfAromasArray
    })
}
// event handler for flavour checkboxes
handleCheckFlavours = (e) => {
    // variables to describe event
    const target = e.target;
    const checked = target.checked;
    const value = target.value;
    //make a copy of the aromas array so it doesn't get altered
    const copyOfFlavoursArray = [...this.state.flavours];
    const index = copyOfFlavoursArray.indexOf(value)
    // add to array if true, remove if false
    checked === true ? copyOfFlavoursArray.push(value) : copyOfFlavoursArray.splice(index,1);
    // update state with info from click
    this.setState({
        flavours: copyOfFlavoursArray
    })
}

    // items to render
    render() {
        return (
            <section className="newTasting">
                {/* title */}
                <h2>Taste your beer</h2>
                {/* start of form */}
                <form>
                    <section className="textInputs">
                        <TextInputs change={this.handleChange}/>
                        {/* Radio button icon row */}
                        <h4>What did your beer come in?</h4>
                        <div className="container" onChange={this.handleChange}>
                        <RadioRow rowId="container"
                            pictureOne={bottle}
                            pictureTwo={can}
                            pictureThree={tap}
                            valueOne="bottle"
                            valueTwo="can"
                            valueThree="tap"
                            widthOne="50px"
                            widthTwo="65px"
                            widthThree="50px"
                            change={this.handleChange}/>
                        </div>
                    </section>
                    <h5>Pour your beer into a clean glass and give it a good look:</h5>
                    <div className="heading">
                        <img src={eye} alt="Eye icon"/>
                        <h6>Appearance</h6>
                    </div>
                    <h4 className="formLabel">Colour:</h4>
                    <ColourBar/>
                    <h4 className="formLabel" >Clarity:</h4>
                    <RadioRow
                        rowId="clarity"
                        pictureOne={diamond}
                        pictureTwo={hazy}
                        pictureThree={cloud}
                        valueOne="clear"
                        valueTwo="hazy"
                        valueThree="cloudy"
                        widthOne="75px"
                        widthTwo="90px"
                        widthThree="90px"
                        change={this.handleChange}/>
                    <h4 className="formLabel" >Head Retention and Lacing:</h4>
                    <RadioBar
                        barId="head"
                        valueOne="poor"
                        valueTwo="good"
                        valueThree="persistent"
                        change={this.handleChange}/>
                    <h5>Swirl the beer in your glass and inhale deeply:</h5>
                    <div className="heading">
                        <img src={smell} alt="Nose icon"/>
                        <h6>Scent</h6>
                    </div>
                    <h4 className="formLabel" >Balance:</h4>
                    <RadioRow
                        rowId="scentBalance"
                        pictureOne={sweet}
                        pictureTwo={sour}
                        pictureThree={bitter}
                        valueOne="sweet"
                        valueTwo="sour"
                        valueThree="bitter"
                        widthOne="70px"
                        widthTwo="90px"
                        widthThree="90px"
                        change={this.handleChange}/>
                    <h4 className="formLabel" >Intensity:</h4>
                    <RadioBar
                        barId="scentIntensity"
                        valueOne="faint"
                        valueTwo="aromatic"
                        valueThree="strong"
                        change={this.handleChange}/>
                    <h4 className="formLabel" >Aromas:</h4>
                    <h6>Choose all that apply</h6>
                    <section className="aromas formSection" >
                        <Checkboxes
                            rowId="aromas"
                            pictureOne={grain}
                            pictureTwo={bread}
                            pictureThree={nutty}
                            pictureFour={chocolate}
                            pictureFive={coffee}
                            valueOne="grain"
                            valueTwo="bread"
                            valueThree="nutty"
                            valueFour="chocolate"
                            valueFive="coffee"
                            widthOne="25px"
                            widthTwo="60px"
                            widthThree="50px"
                            widthFour="40px"
                            widthFive="35px"
                            change={this.handleCheckAroma}
                            />
                        <Checkboxes
                            rowId="aromas2"
                            pictureOne={smokey}
                            pictureTwo={earthy}
                            pictureThree={funky}
                            pictureFour={toasted}
                            pictureFive={corn}
                            valueOne="smokey"
                            valueTwo="earthy"
                            valueThree="funky"
                            valueFour="toasted"
                            valueFive="corn"
                            widthOne="40px"
                            widthTwo="50px"
                            widthThree="60px"
                            widthFour="40px"
                            widthFive="25px"
                            change={this.handleCheckAroma}
                            check={this.state.aromas.nutty}
                            />
                        <Checkboxes rowId="aromas3"
                            pictureOne={citrus}
                            pictureTwo={banana}
                            pictureThree={fruit}
                            pictureFour={berry}
                            pictureFive={pineapple}
                            valueOne="citrus"
                            valueTwo="banana"
                            valueThree="fruit"
                            valueFour="berry"
                            valueFive="tropical"
                            widthOne="40px"
                            widthTwo="40px"
                            widthThree="60px"
                            widthFour="50px"
                            widthFive="30px"
                            change={this.handleCheckAroma}
                            />
                        <Checkboxes rowId="aromas4"
                            pictureOne={floral}
                            pictureTwo={spice}
                            pictureThree={hoppy}
                            pictureFour={honey}
                            pictureFive={caramel}
                            valueOne="floral"
                            valueTwo="spice"
                            valueThree="hoppy"
                            valueFour="honey"
                            valueFive="caramel"
                            widthOne="25px"
                            widthTwo="40px"
                            widthThree="35px"
                            widthFour="35px"
                            widthFive="35px"
                            change={this.handleCheckAroma}
                            />
                    </section>
                    <h5>Take your first sip and hold the beer on your tongue while you breathe out through your nose:</h5>
                    <div className="heading">
                        <img src={mouthfeel} alt="Taste icon"/>
                        <h6>Mouthfeel</h6>
                    </div>
                    <h4 className="formLabel" >Carbonation:</h4>
                    <RadioRow
                        rowId="carbonation"
                        pictureOne={flat}
                        pictureTwo={fizzy}
                        pictureThree={sparkling}
                        valueOne="flat"
                        valueTwo="fizzy"
                        valueThree="sparkling"
                        widthOne="70px"
                        widthTwo="70px"
                        widthThree="120px"
                        change={this.handleChange}/>
                    <h4 className="formLabel" >Body:</h4>
                    <RadioBar
                        barId="body"
                        valueOne="light"
                        valueTwo="medium"
                        valueThree="full"
                        change={this.handleChange}/>
                    <h5>Take another sip and swirl it around your mouth:</h5>
                    <div className="heading">
                        <img src={taste} alt="Tongue icon"/>
                        <h6>Flavour</h6>
                    </div>
                    <h4 className="formLabel" >Balance:</h4>
                    <RadioRow
                        rowId="flavourBalance"
                        pictureOne={sweet}
                        pictureTwo={sour}
                        pictureThree={bitter}
                        valueOne="sweet"
                        valueTwo="sour"
                        valueThree="bitter"
                        widthOne="70px"
                        widthTwo="90px"
                        widthThree="90px"
                        change={this.handleChange}/>
                    <h4 className="formLabel" >Intensity:</h4>
                    <RadioBar
                        barId="flavourIntensity"
                        valueOne="faint"
                        valueTwo="flavourful"
                        valueThree="strong"
                        change={this.handleChange}/>
                    <h4 className="formLabel"> Flavours:</h4>
                    <h6>Choose all that apply</h6>
                    <section className="flavours formSection" >
                        <Checkboxes
                            rowId="flavours"
                            pictureOne={grain}
                            pictureTwo={bread}
                            pictureThree={nutty}
                            pictureFour={chocolate}
                            pictureFive={coffee}
                            valueOne="grain"
                            valueTwo="bread"
                            valueThree="nutty"
                            valueFour="chocolate"
                            valueFive="coffee"
                            widthOne="25px"
                            widthTwo="60px"
                            widthThree="50px"
                            widthFour="40px"
                            widthFive="35px"
                            change={this.handleCheckFlavours}
                            />
                        <Checkboxes
                            rowId="flavours2"
                            pictureOne={smokey}
                            pictureTwo={earthy}
                            pictureThree={funky}
                            pictureFour={toasted}
                            pictureFive={corn}
                            valueOne="smokey"
                            valueTwo="earthy"
                            valueThree="funky"
                            valueFour="toasted"
                            valueFive="corn"
                            widthOne="40px"
                            widthTwo="50px"
                            widthThree="60px"
                            widthFour="40px"
                            widthFive="25px"
                            change={this.handleCheckFlavours}
                            />
                        <Checkboxes rowId="flavours3"
                            pictureOne={citrus}
                            pictureTwo={banana}
                            pictureThree={fruit}
                            pictureFour={berry}
                            pictureFive={pineapple}
                            valueOne="citrus"
                            valueTwo="banana"
                            valueThree="fruit"
                            valueFour="berry"
                            valueFive="tropical"
                            widthOne="40px"
                            widthTwo="40px"
                            widthThree="60px"
                            widthFour="50px"
                            widthFive="30px"
                            change={this.handleCheckFlavours}
                            />
                        <Checkboxes rowId="flavours4"
                            pictureOne={floral}
                            pictureTwo={spice}
                            pictureThree={hoppy}
                            pictureFour={honey}
                            pictureFive={caramel}
                            valueOne="floral"
                            valueTwo="spice"
                            valueThree="hoppy"
                            valueFour="honey"
                            valueFive="caramel"
                            widthOne="25px"
                            widthTwo="40px"
                            widthThree="35px"
                            widthFour="35px"
                            widthFive="35px"
                            change={this.handleCheckFlavours}
                            />
                    </section>
                    <h4 className="formLabel"> Would you drink it again?</h4>
                    <section className="radioRowContainer drinkAgain" onChange={this.handleChange}>
                        <div className="radioContainer">
                        <input type="radio" id="drinkAgainOne" name="drinkAgain" value="yes"/>
                        <label htmlFor="drinkAgainOne">
                            <img src={yes} alt="Thumbs Up icon" width="90px"/>Absolutely!</label>
                        </div>
                        <div className="radioContainer">
                        <input type="radio" id="drinkAgainTwo" name="drinkAgain" value="no"/>
                        <label htmlFor="drinkAgainTwo">
                            <img src={no} alt="Thumbs Down Icon" width="90px"/>No Thanks.</label>
                        </div>
                    </section>
                    <button type="submit" onClick={this.handleAdd}>Add your tasting</button>
                </form>
                <Footer/>
            </section>
        )
    }
}

export default NewTasting;