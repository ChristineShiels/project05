// imports
import { Component } from 'react';
import Footer from './Footer.js';
import poster from './assets/beerPoster.jpg';
import firebase from './firebase.js';
import { createKeydownFromClick } from 'keydown-from-click';

// class
class MyTastings extends Component {
    constructor(){
        super()
        // define states
        this.state = {
            beers: [],
            rating: []
        }
}

componentDidMount() {
    // reference database
    const dbRef = firebase.database().ref();
    // get data from database
    dbRef.on('value', (data) => {
        // put it in an object
        const firebaseDataObject = data.val();
        console.log("firebase Object", firebaseDataObject);

        // make a new array
        let beerArray = [];
        // use for in loop to extract key and value of object
        for (let beerKey in firebaseDataObject.beers) {
            const beerObject = firebaseDataObject.beers[beerKey];
            // format it and push into a new array
            const formattedObject = {
                id: beerKey,
                name: beerObject.name,
                brewery: beerObject.brewery,
                style: beerObject.style,
                container: beerObject.container,
                colour: beerObject.colour,
                clarity: beerObject.clarity,
                head: beerObject.head,
                scentIntensity: beerObject.scentIntensity,
                scentOverall: beerObject.scentOverall,
                body: beerObject.body,
                carbonation: beerObject.carbonation,
                finishLength: beerObject.finishLength,
                finishIntensity: beerObject.finishIntensity,
                finishOverall: beerObject.finishOverall,
                freshness: beerObject.freshness,
                drinkAgain: beerObject.drinkAgain,
            };
            beerArray.push(formattedObject)
        }
        // set state to current database
        this.setState({
        beers: beerArray
        })
    })
}

//show the ratings for the selected beer
viewRating = (beerIndex) => {
    console.log(beerIndex);
    //make a copy of the beers array so it doesn't get altered
    const copyOfBeerArray = [...this.state.beers];
    //filter through the array copy - store selected rating in a variable
    const selectedRating = copyOfBeerArray.filter((beer, index) => {
      //return only the rating for the clicked beer
        return beerIndex === index
    })
    //update the state to display on page
    this.setState({
        rating: selectedRating
    })
}

keydownHandler = createKeydownFromClick(this.viewRating);

// handleKeyDown = (e) => {
//     if (e.key === "Enter") {
//         console.log(e);
//         // this.viewRating(index)           
//     }
// }


    render() {
        return (
            <div className="wrapper myTastings">
                <h2>My Tastings</h2>
                <div className="listContainer">
                    <div className="likedContainer">
                        <h3>Liked:</h3>
                        <ul className="likedList">
                            {/* show beers you would drink again */}
                            {
                                this.state.beers.map((beer, index) => (
                                    this.state.beers[index].drinkAgain === "yes"
                                    ?
                                        // make li focussable (sp?) and add onClick function to display rating of clicked beer
                                        (<li key={beer.id} tabIndex="0" role="button" onKeyDown={this.viewRating} onClick={ () => {this.viewRating(index)}}>
                                        <p>{beer.name}</p>
                                        </li>)
                                    :
                                        null
                                ))
                            }

                        </ul>
                    </div>
                    <div className="dislikedContainer">
                        <h3>Disliked:</h3>
                        <ul className="dislikedList">
                        {/* show beers you wouldn't drink again */}
                        {
                            this.state.beers.map((beer, index) => (
                                this.state.beers[index].drinkAgain === "no"
                                ?
                                    // make li focussable (sp?) and add onClick function to display rating of clicked beer
                                    (<li key={beer.id} tabIndex="0" role="button" onClick={ () => {this.viewRating(index)}}>
                                    <p>{beer.name}</p>
                                    </li>)
                                :
                                    null
                            ))
                        }
                        </ul>
                    </div>
                </div>

                {
                    // show previous rating on page
                    this.state.rating.map((rating) => {
                        return(
                            <div className="chosenRating">
                                <h2>{rating.name}</h2>
                                <h4>A {rating.style} by {rating.brewery} Brewery</h4>
                                <p>Poured from a {rating.container}</p>
                                <div className="ratingContainer">
                                    <div className="rowContainer">
                                        👁
                                        <p>Colour: {rating.colour}</p>
                                        <p>Clarity: {rating.clarity}</p>
                                        <p>Head Retention / Lacing: {rating.head}</p>
                                        👃
                                        <p>Intensity: {rating.scentIntensity}</p>
                                        <p>Overall Impresseion: {rating.scentOverall}</p>
                                    </div>
                                    <div className="rowContainer">
                                        👄
                                        <p>Body: {rating.body}</p>
                                        <p>Carbonation: {rating.carbonation}</p>
                                        🔚
                                        <p>Length: {rating.finishLength}</p>
                                        <p>Intensity: {rating.finishIntensity}</p>
                                        <p>Overall Impression: {rating.finishOverall}</p>
                                        <p>Freshness: {rating.freshness}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

                <img src={poster} alt="Advertisment for Van Nostrand's Owl-Musty Beer circa 1906"/>
                <Footer/>
            </div>
        )
    }
}

export default MyTastings;