import React, { Component } from 'react'
import Sell from '../../containers/sell';
import OrderSell from '../../containers/orderSell';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMarket: false
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (event.target.name === 'isMarket') {
      this.setState({ [event.target.name]: !this.state.isMarket });
    } else {
      this.setState({ [event.target.name]: event.target.value });
    }
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading"><h4 className="panel-title">Sell Air</h4></div>
        <div className="panel-body">
          <div className="form-group">
            <label>
              <input checked={this.state.isMarket} onChange={this.handleChange} name="isMarket" type="checkbox" />
              &nbsp;
              Sell for the market price
            </label>
          </div>
          {this.state.isMarket ?
            <OrderSell />
            :
            <Sell />
          }
        </div>
      </div>
    );
  }
}

export default Main
