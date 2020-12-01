import './App.css';
import { Component } from 'react';
import firebase from './firebase.js';
import LandingPage from './LandingPage.js';
import MyTastings from './MyTastings.js';
import NewTasting from './NewTasting.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
        landingPage: true,
        myTastings: false,
        newTasting: false,
    }

}

displayMyTastings = () => {
    this.setState({
        myTastings: !this.state.myTastings,
        landingPage: !this.state.landingPage
    })
}

displayNewTasting = () => {
  this.setState({
      newTasting: !this.state.newTasting,
      landingPage: !this.state.landingPage
  })
}




  render() {
      return (
        <div className="wrapper" >

          {this.state.landingPage ? <LandingPage displayMyTastings={() => {this.displayMyTastings()}} displayNewTasting={() => {this.displayNewTasting()}}/> : null}
          {this.state.myTastings ? <MyTastings/> : null}
          {this.state.newTasting ? <NewTasting/> : null}
          
        </div>
      )
  }
}


export default App;
