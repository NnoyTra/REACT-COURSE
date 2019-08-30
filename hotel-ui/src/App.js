import React, { Component } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './COMPONENTS/Footer';
import Navbar from './COMPONENTS/Navbar';
import HotelList from './COMPONENTS/HotelList';
import ReservationsList from './COMPONENTS/ReservationsList';
import { BrowserRouter as Router, Route } from "react-router-dom";
//import { Provider } from "react-redux";
//import { store } from "./store";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
            <Route exact path='/hotels' component={HotelList} />
            <Route exact path='/reservations' component={ReservationsList} />
          <Footer />
          
        </div>
      </Router>
    );
  }
}

export default App;
