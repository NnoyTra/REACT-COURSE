import React, { Component } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './COMPONENTS/Footer';
import Navbar from './COMPONENTS/Navbar';
import HotelList from './COMPONENTS/HotelList';
import ReservationsList from './COMPONENTS/ReservationsList';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HotelForm from "./COMPONENTS/HotelForm";
import AboutUs from "./COMPONENTS/AboutUs";
import Home from "./COMPONENTS/Home";
//import { Provider } from "react-redux";
//import { store } from "./store";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Route exact path='/home' component={Home} />
            <Route exact path='/hotels' component={HotelList} />
            <Route exact path='/reservations' component={ReservationsList} />
            <Route exact path='/hotelform' component={HotelForm} />
            <Route exact path='/aboutus' component={AboutUs} />
          </div>
          <div className="fixed-bottom">
            <Footer />
          </div>
          
        </div>
      </Router>
    );
  }
}

export default App;
