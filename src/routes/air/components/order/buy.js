import React, { Component } from 'react'
import Buy from '../../containers/buy';
import OrderBuy from '../../containers/orderBuy';

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
        <div className="panel-heading"><h4 className="panel-title">Buy Air</h4></div>
        <div className="panel-body">
          <div className="form-group">
            <label>
              <input checked={this.state.isMarket} onChange={this.handleChange} name="isMarket" type="checkbox" />
              &nbsp;
              Buy for the market price
            </label>
          </div>
          {this.state.isMarket ?
            <OrderBuy />
            :
            <Buy />
          }
        </div>
      </div>
    );
  }
}

export default Main
