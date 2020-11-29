import { Component } from 'react';

class LandingPage extends Component {
    render() {
        return (
            <div className="wrapper landingPage">
                <h1>tApp</h1>
                <h2>Beer tasting notes in your pocket</h2>
                <button>Taste a new beer</button>
                <button>Review your notes</button>
                <img src="./jockeysDrinking.jpeg" alt="Female jockeys enjoying a celebratory beer circa 1977"/>
                <footer>
                    <p>Made by Christine Shiels for <a href="www.JunoCollege.com">Juno College</a></p>
                </footer>
            </div>
        )
    }
}
export default LandingPage;