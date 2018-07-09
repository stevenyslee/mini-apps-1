document.addEventListener("DOMContentLoaded", function(event) { 
	var moveCounter = 0;
	var winner;


	// Select square on board
	var makeMove = function(){
		if(!this.innerHTML && !winner) {
			if (moveCounter % 2 === 0) {
				this.innerHTML = 'X';
				moveCounter++;
			} else {
				this.innerHTML = 'O';
				moveCounter++;
			}
			checkVerticals();
			checkHorizontals();
			checkDiagonals();
			if (winner) {
				document.getElementById('winner').innerHTML = 'The winner is : ' + winner;			
			} else if(!winner && moveCounter === 9) {
				document.getElementById('winner').innerHTML = 'Draw!';			
			}
		}
	};

	// Win game checks
	var checkVerticals = function() {
		var columns = [].slice.call(document.getElementsByClassName("col"));
		columns.forEach(function (element) {
			if (element.childNodes[1].innerHTML && element.childNodes[3].innerHTML && element.childNodes[5].innerHTML) {
				if (element.childNodes[1].innerHTML === element.childNodes[3].innerHTML && element.childNodes[3].innerHTML === element.childNodes[5].innerHTML) {
					winner = element.childNodes[1].innerHTML;
				}
			}
		});
	};

	var checkHorizontals = function() {
		for (let i = 1; i < 4; i++) {
			var row = [].slice.call(document.getElementsByClassName("row-" + i));
			if (row[0].innerHTML && row[1].innerHTML && row[2].innerHTML) {
				if (row[0].innerHTML === row[1].innerHTML && row[1].innerHTML === row[2].innerHTML) {
					winner = row[0].innerHTML;
				}
			}
		}
	};

	var checkDiagonals = function() {
		for (let i = 1; i < 3; i++) {
			var diagonal = document.getElementsByClassName("d" + i);
			if (diagonal[0].innerHTML && diagonal[1].innerHTML && diagonal[2].innerHTML) {
				if (diagonal[0].innerHTML === diagonal[1].innerHTML && diagonal[1].innerHTML === diagonal[2].innerHTML) {
					winner = diagonal[0].innerHTML;
				}
			}
		}
	};

	// Restart Game
	var restartGame = function() {
		var squares = [].slice.call(document.getElementsByClassName('square'));
		squares.forEach(function (element) {
	  	element.innerHTML = '';
		});
		document.getElementById('winner').innerHTML = '';
		winner = '';
		moveCounter = 0;
	}

	// Add event listen to all squares
	var squares = [].slice.call(document.getElementsByClassName("square"));
	squares.forEach(function (element) {
	  element.addEventListener('click', makeMove);
	});

	document.getElementById('restart').addEventListener('click', restartGame);

});