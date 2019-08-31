import React, { Component } from 'react';

class HotelForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hotelId: '',
            name:''
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    render() {
        return (
                    <div className="hotel-form">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="hotelId">Hotel Id</label>
                                <input type="text" className="form-control" name="hotelId" id="hotelId" placeholder="Hotel Id" value={this.state.hotelId} onChange={this.onChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" name="name" id="name" aria-describedby="emailHelp" placeholder="Name" value={this.state.name} onChange={this.onChange}/>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                );
    }

    onSubmit(e){
        
        e.preventDefault();
        const HotelRequest = {
            hotelId: this.state.hotelId,
            name: this.state.name
        } 
        console.log(HotelRequest);
        this.setState(
            {
                hotelId:'',
                name:''
            }
        );
    }
    onChange(e){
        this.setState({[e.target.name] : e.target.value});
    }
}
                
export default HotelForm;