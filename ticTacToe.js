window.onload = function() {
  // YOUR CODE GOES HERE

	var myBoard = document.getElementById('board');
	var clicks = 0;
	var myButton = document.getElementById('myButton');
	var clearScore = document.getElementById('clearSc');
	var box1 = document.getElementById('box1');
	var box2 = document.getElementById('box2');
	var box3 = document.getElementById('box3');
	var box4 = document.getElementById('box4');
	var box5 = document.getElementById('box5');
	var box6 = document.getElementById('box6');
	var box7 = document.getElementById('box7');
	var box8 = document.getElementById('box8');
	var box9 = document.getElementById('box9');
	var xWins = 0;
	var oWins = 0;
	var scoreX = document.getElementById('x');
	var scoreO = document.getElementById('o');
	var head = document.getElementById('header');
	var boxes = document.getElementsByTagName('li');

	var turnClick = function() {
		if (event.target.value == 'o') {
				alert("That spot is taken!");
				clicks--;
		} else if (clicks % 2 === 0) {
			event.target.style.backgroundImage = 'url(img/x.png)';
			event.target.value = 'x';
			header.innerHTML = "Now it's O's turn!";
		} else if (event.target.value == 'x') {
				alert("That spot is taken!");
				clicks--;
		} else {
			event.target.style.backgroundImage = 'url(img/o.png)';
			event.target.value = 'o';
			header.innerHTML = "Now it's X's turn!";
		}
	};

	var scoreBoard = function() {
		scoreX.innerHTML = "X: " + ' ' + xWins;
		scoreO.innerHTML = "O: " + ' ' + oWins;
	};

	//Reset board
	var myReset = function() {
		box1.style.backgroundImage = 'initial';
		box1.value = "";
		box2.style.backgroundImage = 'initial';
		box2.value = "";
		box3.style.backgroundImage = 'initial';
		box3.value = "";
		box4.style.backgroundImage = 'initial';
		box4.value = "";
		box5.style.backgroundImage = 'initial';
		box5.value = "";
		box6.style.backgroundImage = 'initial';
		box6.value = "";
		box7.style.backgroundImage = 'initial';
		box7.value = "";
		box8.style.backgroundImage = 'initial';
		box8.value = "";
		box9.style.backgroundImage = 'initial';
		box9.value = "";
		clicks = 0;
	};

	clearScore = function() {
		myReset();
		xWins = 0;
		oWins = 0;
		scoreX.innerHTML = 'X: ' + ' ' + '0';
		scoreO.innerHTML = 'O: ' + ' ' + '0';
	};


//Start Button
	startGame = function() {
		myReset();
		clearScore();
		document.getElementById('header').innerHTML = "Let's Play Tic Tac Toe! X goes first!";
		for (var i = 0; i < boxes.length; i++) {
			boxes[i].onclick = function(event) {
			if (clicks % 2 === 0) {
						turnClick();
					if (
						box1.value == 'x' && box2.value == 'x' && box3.value == 'x' ||
						box4.value == 'x' && box5.value == 'x' && box6.value == 'x' ||
						box7.value == 'x' && box8.value == 'x' && box9.value == 'x' ||
						box1.value == 'x' && box4.value == 'x' && box7.value == 'x' ||
						box2.value == 'x' && box5.value == 'x' && box8.value == 'x' ||
						box3.value == 'x' && box6.value == 'x' && box9.value == 'x' ||
						box1.value == 'x' && box5.value == 'x' && box9.value == 'x' ||
						box3.value == 'x' && box5.value == 'x' && box7.value == 'x') {
						xWins++;
						scoreBoard();
						alert("X wins!\nX has " + xWins + " wins\nO has " + oWins + " wins.");
						header.innerHTML = "New Game. X goes first again!";
						myReset();
						return;
							} else if (clicks === 8) {
								alert("The game was a stalemate! Try Again!");
								header.innerHTML = "Tie Game! X always goes first.";
								myReset();
								return;
							}
				} else if (clicks % 2  === 1) {
						turnClick();
					} if (
						box1.value == 'o' && box2.value == 'o' && box3.value == 'o' ||
						box4.value == 'o' && box5.value == 'o' && box6.value == 'o' ||
						box7.value == 'o' && box8.value == 'o' && box9.value == 'o' ||
						box1.value == 'o' && box4.value == 'o' && box7.value == 'o' ||
						box2.value == 'o' && box5.value == 'o' && box8.value == 'o' ||
						box3.value == 'o' && box6.value == 'o' && box9.value == 'o' ||
						box1.value == 'o' && box5.value == 'o' && box9.value == 'o' ||
						box3.value == 'o' && box5.value == 'o' && box7.value == 'o') {
						oWins++;
						scoreBoard();
						alert("O wins!\nX has " + xWins + " wins\nO has " + oWins + " wins.");
						header.innerHTML = "New Game. X always goes first!";
						myReset();
						return;
							} else if (clicks === 8) {
								alert("The game was a stalemate! Try Again!");
								header.innerHTML = "Tie Game! X always goes first.";
								myReset();
								return;
						}
			clicks++;
				};
		}
	};
};