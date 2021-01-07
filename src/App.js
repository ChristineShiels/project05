import './App.css';
import { Component } from 'react';
import LandingPage from './LandingPage.js';
import MyTastings from './MyTastings.js';
import NewTasting from './NewTasting.js';
import BackArrow from './BackArrow.js';


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

  displayMyNewTasting = () => {
    this.setState({
        myTastings: !this.state.myTastings,
        newTasting: !this.state.newTasting
    })
}

  displayNewTasting = () => {
    this.setState({
      newTasting: !this.state.newTasting,
      landingPage: !this.state.landingPage
    })
  }

  displayLandingPage = () => {
    if (this.state.myTastings === true) {
      this.setState({
        myTastings: !this.state.myTastings,
        landingPage: !this.state.landingPage
    })
    }else if (this.state.newTasting === true) {
        this.setState({
          newTasting: !this.state.newTasting,
          landingPage: !this.state.landingPage
      })
    }
  }






  render() {
      return (
        <main className="wrapper" >
          <BackArrow back={this.displayLandingPage}/>
          <h1>tApp</h1>
          {this.state.landingPage ? <LandingPage displayMyTastings={() => {this.displayMyTastings()}} displayNewTasting={() => {this.displayNewTasting()}}/> : null}
          {this.state.myTastings ? <MyTastings/> : null}
          {this.state.newTasting ? <NewTasting myTastings={() => {this.displayMyNewTasting()}}/> : null}
        </main>
      )
  }
}


export default App;
