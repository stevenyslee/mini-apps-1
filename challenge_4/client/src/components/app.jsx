
import React from 'react';
import ReactDOM from "react-dom";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {isToggleOn: true};
    // this.handleClick = this.handleClick.bind(this);
  }
	handleClick(e, data) {
		// console.log('click');
		var element = e.currentTarget.id;
		var rows = $('#' + element + '.col').parent();
		for (let i = 1; i <= rows.length; i++) {
			console.log($('#row' + i).find('#' + element));
		}
	}

	render() {
		return (
				<div id='container'>
					<div class='row' id='row1'>
						<div class='col' id='col1' onClick={this.handleClick}></div>
						<div class='col' id='col2'></div>
						<div class='col' id='col3'></div>
						<div class='col' id='col4'></div>
						<div class='col' id='col5'></div>
						<div class='col' id='col6'></div>
						<div class='col' id='col7'></div>
					</div>
					<div class='row' id='row2'>
						<div class='col' id='col1'></div>
						<div class='col' id='col2'></div>
						<div class='col' id='col3'></div>
						<div class='col' id='col4'></div>
						<div class='col' id='col5'></div>
						<div class='col' id='col6'></div>
						<div class='col' id='col7'></div>
					</div>
					<div class='row' id='row3'>
						<div class='col' id='col1'></div>
						<div class='col' id='col2'></div>
						<div class='col' id='col3'></div>
						<div class='col' id='col4'></div>
						<div class='col' id='col5'></div>
						<div class='col' id='col6'></div>
						<div class='col' id='col7'></div>
					</div>
					<div class='row' id='row4'>
						<div class='col' id='col1'></div>
						<div class='col' id='col2'></div>
						<div class='col' id='col3'></div>
						<div class='col' id='col4'></div>
						<div class='col' id='col5'></div>
						<div class='col' id='col6'></div>
						<div class='col' id='col7'></div>
					</div>
					<div class='row' id='row5'>
						<div class='col' id='col1'></div>
						<div class='col' id='col2'></div>
						<div class='col' id='col3'></div>
						<div class='col' id='col4'></div>
						<div class='col' id='col5'></div>
						<div class='col' id='col6'></div>
						<div class='col' id='col7'></div>
					</div>
					<div class='row' id='row6'>
						<div class='col' id='col1'></div>
						<div class='col' id='col2'></div>
						<div class='col' id='col3'></div>
						<div class='col' id='col4'></div>
						<div class='col' id='col5'></div>
						<div class='col' id='col6'></div>
						<div class='col' id='col7'></div>
					</div>
				</div>
			);
	}
}