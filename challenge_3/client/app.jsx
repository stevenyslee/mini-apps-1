class User extends React.Component {
  render() {
    return (
      <div>
        <form action="#">
          Name:<br></br>
          <input type="text" name="name"></input>
          <br></br>Email:<br></br>
          <input type="text" name="email"></input>
          <br></br>Password:<br></br>
          <input type="text" name="password"></input>
          <br></br>
          <input type="button" value="Next" onClick={this.props.onClick}></input>
          <br></br>
        </form>
      </div>
    );
  }
}

class Address extends React.Component {
  render() {
    return (
      <div>
        <form>
          Address Line 1:<br></br>
          <input type="text" name="line-1"></input>
          <br></br>Address Line 2:<br></br>
          <input type="text" name="line-2"></input>
          <br></br>City:<br></br>
          <input type="text" name="city"></input>
          <br></br>State:<br></br>
          <input type="text" name="state"></input>
          <br></br>Zip Code:<br></br>
          <input type="text" name="zip"></input>
          <br></br>Phone Number:<br></br>
          <input type="text" name="phone"></input>
          <br></br>
          <input type="button" value="Next" onClick={this.props.onClick}></input>
          <br></br>
        </form>
      </div>
    );
  }
}

class Payment extends React.Component {
  render() {
    return (
      <div>
        <form>
          Credit Card Number:<br></br>
          <input type="text" name="credit"></input>
          <br></br>Expiry Date:<br></br>
          <input type="text" name="exp"></input>
          <br></br>CVV:<br></br>
          <input type="text" name="cvv"></input>
          <br></br>Billing Zip Code:<br></br>
          <input type="text" name="billing-zip"></input>
          <br></br>
          <input type="button" value="Complete Purchase" onClick={this.props.onClick}></input>
          <br></br>
        </form>
      </div>
    );
  }
}

class Purchase extends React.Component {
  render() {
    return (
      <div>
        <div>Purchase Summary</div>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      form: ++this.state.form
    });
  }

  render() {
    if (this.state.form === 0) {
      return (
        <div>
          <User onClick={this.handleClick}/>
        </div>
      ); 
    } else if (this.state.form === 1) {
      return (
        <div>
          <Address onClick={this.handleClick}/>
        </div>
      ); 
    } else if (this.state.form === 2) {
      return (
        <div>
          <Payment onClick={this.handleClick}/>
        </div>
      ); 
    } else if (this.state.form === 3) {
      return (
        <div>
          <Purchase onClick={this.handleClick}/>
        </div>
      ); 
    }
  }

}

ReactDOM.render(<App />, document.getElementById('app'));