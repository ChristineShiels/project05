import { Component } from 'react';
import jockeys from './assets/jockeysDrinking.jpeg'

class LandingPage extends Component {


    render() {
        return (
            <div className="landingPage">
                <h1>tApp</h1>
                <h2>Beer tasting notes in your pocket</h2>

                <button onClick={this.props.displayNewTasting}>Taste a new beer</button>

                <button onClick={this.props.displayMyTastings}>Review your notes</button>

                <img src={jockeys} alt="Female jockeys enjoying a celebratory beer circa 1977"/>
                <footer>
                <p>Made by Christine Shiels for <a href="www.JunoCollege.com">Juno College</a></p>
                </footer>
            </div>
        )
    }
}
export default LandingPage;