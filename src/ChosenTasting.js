// component to render previosly made tastings on page
import { Component } from 'react';

class ChosenTasting extends Component {
    render() {
        return (
            <div className="chosenRating">
                <h2>{this.props.tasting.name}</h2>
                <h4>A {this.props.tasting.style} by {this.props.tasting.brewery} Brewery</h4>
                <p>Poured from a {this.props.tasting.container}</p>
                <div className="ratingContainer">
                    <div className="rowContainer row1">
                        👁
                        <p>Colour: {this.props.tasting.colour}</p>
                        <p>Clarity: {this.props.tasting.clarity}</p>
                        <p>Head Retention / Lacing: {this.props.tasting.head}</p>
                        👃
                        <p>Intensity: {this.props.tasting.scentIntensity}</p>
                        <p>Overall Impresseion: {this.props.tasting.scentOverall}</p>
                    </div>
                    <div className="rowContainer row2">
                        👄
                        <p>Body: {this.props.tasting.body}</p>
                        <p>Carbonation: {this.props.tasting.carbonation}</p>
                        🔚
                        <p>Length: {this.props.tasting.finishLength}</p>
                        <p>Intensity: {this.props.tasting.finishIntensity}</p>
                        <p>Overall Impression: {this.props.tasting.finishOverall}</p>
                        <p>Freshness: {this.props.tasting.freshness}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ChosenTasting;