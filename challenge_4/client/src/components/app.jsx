
import React from 'react';
import ReactDOM from "react-dom";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	isPlayerOne: true
    };
    this.board;
    this.createBoard();
    this.gameOver = false;
    this.handleClick = this.handleClick.bind(this);
  }

  onWin(player) {
  	player = player === 0 ? 'O' : 'X'; 
  	console.log(player + ' Wins!');
  	this.gameOver = true;
  	$('#container').prepend(`<h1>Player ${player} Wins!</h1>`)
  }

  checkWin(arr) {
  	this.checkHoriztonal(arr);
  	this.checkVertical(arr);
  	this.checkMajorDiagonal(arr);
  	this.checkMinorDiagonal(arr);
  }

	checkHoriztonal(arr) {
		var count = 1;
		var piece = arr[2];
		var colPosition = arr[1];
		while (colPosition <= 6) {
			colPosition++;
			if ( this.board[arr[0]][colPosition] === piece) {
				count++
			} else {
				break;
			}
			if (count === 4) {
				this.onWin(piece);
			}
		}
		colPosition = arr[1];
		while (colPosition >= 0) {
			colPosition--;
			if ( this.board[arr[0]][colPosition] === piece) {
				count++
			} else {
				break;
			}
			if (count === 4) {
				this.onWin(piece);
			}
		}
	}

	checkVertical(arr) {
		var count = 1;
		var piece = arr[2];
		var rowPosition = arr[0];
		while (rowPosition <= 5) {
			rowPosition++;
			if (this.board[rowPosition]) {
				if (this.board[rowPosition][arr[1]] === piece) {
					count++
				} else {
					break;
				}
				if (count === 4) {
					this.onWin(piece);
				}
			}
		}
		rowPosition = arr[0];
		while (rowPosition >= 0) {
			rowPosition--;
			// debugger;
			if (this.board[rowPosition]) {
				if (this.board[rowPosition][arr[1]] === piece) {
					count++
				} else {
					break;
				}
				if (count === 4) {
					this.onWin(piece);
				}
			}
		}
	}

	checkMajorDiagonal(arr) {
		var count = 1;
		var piece = arr[2];
		var rowPosition = arr[0];
		var colPosition = arr[1];
		while (rowPosition <= 5 && colPosition <= 6) {
			colPosition++;
			rowPosition++;
			if (this.board[rowPosition]) {
				if (this.board[rowPosition][colPosition] === piece) {
					count++
				} else {
					break;
				}
				if (count === 4) {
					this.onWin(piece);
				}
			}
		}
		rowPosition = arr[0];
		colPosition = arr[1];
		while (rowPosition >= 0 && colPosition >= 0) {
			rowPosition--;
			colPosition--;
			if (this.board[rowPosition]) {
				if (this.board[rowPosition][colPosition] === piece) {
					count++
				} else {
					break;
				}
				if (count === 4) {
					this.onWin(piece);
				}
			}
		}
	}

		checkMinorDiagonal(arr) {
		var count = 1;
		var piece = arr[2];
		var rowPosition = arr[0];
		var colPosition = arr[1];
		while (rowPosition <= 5 && colPosition >= 0) {
			rowPosition++;
			colPosition--;
			if (this.board[rowPosition]) {
				if (this.board[rowPosition][colPosition] === piece) {
					count++
				} else {
					break;1
				}
				if (count === 4) {
					this.onWin(piece);
				}
			}
		}
		rowPosition = arr[0];
		colPosition = arr[1];
		while (rowPosition >= 0 && colPosition <= 6) {
			rowPosition--;
			colPosition++;
			if (this.board[rowPosition]) {
				if (this.board[rowPosition][colPosition] === piece) {
					count++
				} else {
					break;
				}
				if (count === 4) {
					this.onWin(piece);
				}
			}
		}
	}

  createBoard() {
  	this.board = new Array(6);
  	for (let i = 0; i < 6; i++) {
  		this.board[i] = new Array(7);
  	}
  }

	handleClick(e, data) {
		if (!this.gameOver) {
			var element = e.currentTarget.id;
			for (let i = 1; i <= 6; i++) {
				if (!$('#row' + i).find('#' + element)[0].innerHTML) {
					if(this.state.isPlayerOne) {
						$('#row' + i).find('#' + element)[0].innerHTML = 'X';
						this.setState({isPlayerOne: !this.state.isPlayerOne});
						this.board[i - 1][Number(element[3]) - 1] = 1;
						var pieceLocation = [i - 1, Number(element[3]) - 1, 1];
						this.checkWin(pieceLocation);
						break;
					} else {
						$('#row' + i).find('#' + element)[0].innerHTML = 'O';
						this.setState({isPlayerOne: !this.state.isPlayerOne});
						this.board[i - 1][Number(element[3]) - 1] = 0;
						var pieceLocation = [i - 1, Number(element[3]) - 1, 0];
						this.checkWin(pieceLocation);
						break;
					}
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