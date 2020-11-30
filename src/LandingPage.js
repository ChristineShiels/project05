import { Component } from 'react';
import jockeys from './assets/jockeysDrinking.jpeg';
import Footer from './Footer.js';

class LandingPage extends Component {


    render() {
        return (
            <div className="landingPage">
                <h1>tApp</h1>
                <h2>Beer tasting notes in your pocket</h2>
                {/* button to render tasting form on click */}
                <button onClick={this.props.displayNewTasting}>Taste a new beer</button>
                {/* button to render previous tastings on click */}
                <button onClick={this.props.displayMyTastings}>Review your notes</button>

                <img src={jockeys} alt="Female jockeys enjoying a celebratory beer circa 1977"/>
                <Footer/>
            </div>
        )
    }
}
export default LandingPage;