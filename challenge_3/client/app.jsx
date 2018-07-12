var obj = {};

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
        <div id='summary'></div>
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
    $('[type="text"]').each(function() {
      obj[$(this).attr("name")] = $(this).val();
    });
    this.setState({
      form: ++this.state.form
    });
    if (this.state.form === 3) {
      var jqxhr = $.post( "http://127.0.0.1:8080/", obj, function(data) {
        console.log(data);
        $('#summary').append(`<div>Name: ${data['name']}</div>`);
        $('#summary').append(`<div>Email: ${data['email']}</div>`);
        $('#summary').append(`<div>Password: ${data['password']}</div>`);
        $('#summary').append(`<div>Address Line 1: ${data['line_1']}</div>`);
        $('#summary').append(`<div>Address Line 2: ${data['line_2']}</div>`);
        $('#summary').append(`<div>City: ${data['city']}</div>`);
        $('#summary').append(`<div>State: ${data['state']}</div>`);
        $('#summary').append(`<div>Zip Code: ${data['zip']}</div>`);
        $('#summary').append(`<div>Credit Card Number: ${data['credit_card']}</div>`);
        $('#summary').append(`<div>Expiry Date: ${data['exp_date']}</div>`);
        $('#summary').append(`<div>CVV: ${data['cvv']}</div>`);
        $('#summary').append(`<div>Billing Zip Code: ${data['billing_zip']}</div>`);
        })
        .fail(function() {
          console.log( "error" );
        });
    }
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