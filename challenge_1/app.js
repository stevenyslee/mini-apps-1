document.addEventListener("DOMContentLoaded", function(event) { 
	var moveCounter = 0;

	var makeMove = function(){
		if(!this.innerHTML) {
			if (moveCounter % 2 === 0) {
				this.innerHTML = 'X';
				moveCounter++;
			} else {
				this.innerHTML = 'O';
				moveCounter++;
			}
		}

	};

	var checkHorizontal = function() {

	};

	var checkDiagonal = function() {

	};

	var checkVertical = function() {

	};


	// Add event listen to all squares
	var squares = [].slice.call(document.getElementsByClassName("square"));
	squares.forEach(function (element){
	  element.addEventListener('click', makeMove);
	});

});