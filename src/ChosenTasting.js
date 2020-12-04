// component to render info from chosen tasting
import { Component } from 'react';
import eye from './assets/eye.png';
import smell from './assets/smell.png';
import mouthfeel from './assets/mouthfeel.png';
import taste from './assets/taste.png';

class ChosenTasting extends Component {
    render() {
        return (
            <div className="chosenRating">
                <h2>{this.props.tasting.beerName}</h2>
                <h4>A {this.props.tasting.style} by {this.props.tasting.brewery} Brewery</h4>
                <p>Poured from a {this.props.tasting.container}</p>
                <div className="ratingContainer">
                    <div className="rowContainer row1">
                        <img className="tastingImg" src={eye} alt="Eye icon"/>
                        <p>{this.props.tasting.beerName} is {this.props.tasting.colour} in colour, {this.props.tasting.clarity}, with {this.props.tasting.head} head retention and lacing.</p>
                        <img className="tastingImg nose" src={smell} alt="Nose icon"/>
                        <p>The {this.props.tasting.scentIntensity}, {this.props.tasting.scentBalance} scent of {this.props.tasting.beerName} gives off the following aromas:</p>{
                            this.props.tasting.aromas.map((aroma, index) => (
                                <ul>
                                    <li key={aroma.id}>
                                    <p className="aromaFlavours">{aroma}</p>
                                    </li>
                                </ul>
                            ))
                        }
                    </div>
                    <div className="rowContainer row2">
                        <img className="tastingImg" src={mouthfeel} alt="Mouth icon"/>
                        <p>{this.props.tasting.beerName} is a {this.props.tasting.carbonation}, {this.props.tasting.body}-bodied {this.props.tasting.style}.</p>
                        <img className="tastingImg" src={taste} alt="Tongue icon"/>
                        <p>The {this.props.tasting.flavourIntensity}, {this.props.tasting.flavourBalance} taste of {this.props.tasting.beerName} contains the following flavour notes:</p>{
                            this.props.tasting.flavours.map((flavour, index) => (
                                <ul>
                                    <li key={flavour.id}>
                                    <p className="aromaFlavours">{flavour}</p>
                                    </li>
                                </ul>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default ChosenTasting;