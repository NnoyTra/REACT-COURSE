import React, {Component} from "react";

class Hotel extends Component {
    render() {
        const hotel = this.props.myHotel;
        return (
            <div>
                <h4>{hotel.id}-{hotel.name}</h4>
            </div>
        );
    }
}
export default Hotel;