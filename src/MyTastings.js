import { Component } from 'react';
import poster from './assets/beerPoster.jpg'

class MyTastings extends Component {
    constructor(){
        super()
        this.state = {
            beers: [
                {
                    name: "Dark Matter",
                    brewery: "Hoyne",
                    style: "Dark Ale",
                    container: "bottle",
                    colour: 8,
                    clarity: 4,
                    head: 4,
                    scentIntensity: 6,
                    scentOverall: "sweet",
                    body: 7,
                    carbonation: 3,
                    finishLength: 4,
                    finishIntensity: 3,
                    finishOverall: "bitter",
                    freshness: 7,
                    drinkAgain: "yes",
                },
                {
                    name: "Park Life",
                    brewery: "Bomber",
                    style: "Passionfruit Ale",
                    container: "can",
                    colour: 2,
                    clarity: 4,
                    head: 2,
                    scentIntensity: 8,
                    scentOverall: "sweet",
                    body: 5,
                    carbonation: 7,
                    finishLength: 4,
                    finishIntensity: 4,
                    finishOverall: "sweet",
                    freshness: 7,
                    drinkAgain: "no",
                }

            ],
            rating: []
        }

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


    render() {
        console.log(this.state.rating);
        return (
            <div className="wrapper myTastings">
                <h2>My Tastings</h2>
                <div className="listContainer">
                    <div className="likedContainer">
                        <h3>Liked:</h3>
                        <ul className="likedList">

                            {
                                this.state.beers.map((beer, index) => (
                                    this.state.beers[index].drinkAgain === "yes"
                                    ?
                                        (<li tabIndex="0" onClick={ () => {this.viewRating(index)}}>
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

                        {
                            this.state.beers.map((beer, index) => (
                                this.state.beers[index].drinkAgain === "no"
                                ?
                                    (<li tabIndex="0" onClick={ () => {this.viewRating(index)}}>
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
                <footer>
                    <p>Made by Christine Shiels for <a href="www.JunoCollege.com">Juno College</a></p>
                </footer>
            </div>
        )
    }
}

export default MyTastings;