
import React from 'react';
import ReactDOM from "react-dom";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	isPlayerOne: true
    };
    this.handleClick = this.handleClick.bind(this);
  }
	handleClick(e, data) {
		var element = e.currentTarget.id;
		// var rows = $('#' + element + '.col').parent();
		for (let i = 1; i <= 6; i++) {
			if (!$('#row' + i).find('#' + element)[0].innerHTML) {
				if(this.state.isPlayerOne) {
					$('#row' + i).find('#' + element)[0].innerHTML = 'X';
					this.setState({isPlayerOne: !this.state.isPlayerOne});
					break;
				} else {
					$('#row' + i).find('#' + element)[0].innerHTML = 'O';
					this.setState({isPlayerOne: !this.state.isPlayerOne});
					break;
				}
			}
		}
	}

	render() {
		return (
				<div id='container'>
					<div class='row' id='row1'>
						<div class='col' id='col1' onClick={this.handleClick}></div>
						<div class='col' id='col2' onClick={this.handleClick}></div>
						<div class='col' id='col3' onClick={this.handleClick}></div>
						<div class='col' id='col4' onClick={this.handleClick}></div>
						<div class='col' id='col5' onClick={this.handleClick}></div>
						<div class='col' id='col6' onClick={this.handleClick}></div>
						<div class='col' id='col7' onClick={this.handleClick}></div>
					</div>
					<div class='row' id='row2'>
						<div class='col' id='col1' onClick={this.handleClick}></div>
						<div class='col' id='col2' onClick={this.handleClick}></div>
						<div class='col' id='col3' onClick={this.handleClick}></div>
						<div class='col' id='col4' onClick={this.handleClick}></div>
						<div class='col' id='col5' onClick={this.handleClick}></div>
						<div class='col' id='col6' onClick={this.handleClick}></div>
						<div class='col' id='col7' onClick={this.handleClick}></div>
					</div>
					<div class='row' id='row3'>
						<div class='col' id='col1' onClick={this.handleClick}></div>
						<div class='col' id='col2' onClick={this.handleClick}></div>
						<div class='col' id='col3' onClick={this.handleClick}></div>
						<div class='col' id='col4' onClick={this.handleClick}></div>
						<div class='col' id='col5' onClick={this.handleClick}></div>
						<div class='col' id='col6' onClick={this.handleClick}></div>
						<div class='col' id='col7' onClick={this.handleClick}></div>
					</div>
					<div class='row' id='row4'>
						<div class='col' id='col1' onClick={this.handleClick}></div>
						<div class='col' id='col2' onClick={this.handleClick}></div>
						<div class='col' id='col3' onClick={this.handleClick}></div>
						<div class='col' id='col4' onClick={this.handleClick}></div>
						<div class='col' id='col5' onClick={this.handleClick}></div>
						<div class='col' id='col6' onClick={this.handleClick}></div>
						<div class='col' id='col7' onClick={this.handleClick}></div>
					</div>
					<div class='row' id='row5'>
						<div class='col' id='col1' onClick={this.handleClick}></div>
						<div class='col' id='col2' onClick={this.handleClick}></div>
						<div class='col' id='col3' onClick={this.handleClick}></div>
						<div class='col' id='col4' onClick={this.handleClick}></div>
						<div class='col' id='col5' onClick={this.handleClick}></div>
						<div class='col' id='col6' onClick={this.handleClick}></div>
						<div class='col' id='col7' onClick={this.handleClick}></div>
					</div>
					<div class='row' id='row6'>
						<div class='col' id='col1' onClick={this.handleClick}></div>
						<div class='col' id='col2' onClick={this.handleClick}></div>
						<div class='col' id='col3' onClick={this.handleClick}></div>
						<div class='col' id='col4' onClick={this.handleClick}></div>
						<div class='col' id='col5' onClick={this.handleClick}></div>
						<div class='col' id='col6' onClick={this.handleClick}></div>
						<div class='col' id='col7' onClick={this.handleClick}></div>
					</div>
				</div>
			);
	}
}