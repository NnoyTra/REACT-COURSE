import React, {Component} from "react";
import Hotel from './Hotel'

class HotelList extends Component {

      

    render() {
        const hotelList = [{id:1, name: 'TROPICOCO'},{id:2, name: 'PALMA REAL'},{id:3, name: 'MANZANA DE GOMEZ'}];
        
       return (
            <div>
                <h4>Hotel List</h4>
                {
                    hotelList.map((hotel)=>(
                        <Hotel  key={hotel.id} myHotel={hotel}/>
                    ))
                }
            </div>
        );
    }
}
export default HotelList;