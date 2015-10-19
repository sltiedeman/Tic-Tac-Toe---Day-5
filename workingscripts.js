

var turnCount = 1;
var board = [];
var boardCount = 0; //insures board is only set one time;
var spanArray = ["square-zero", "square-one", "square-two", "square-three", "square-four","square-five","square-six","square-seven","square-eight" ];
var idArray = ["zero", "one", "two","three","four","five","six","seven","eight"];

function checkWin(someArray){
	// Check Rows
	var l = 0;
	var m = 3;
	for (a = 0; a < 3; a++){
		var countX=0;
		var countO=0;
		for(i = l; i < m ; i++){
			if(someArray[i]==='X'){
				countX++;
			}
			if(someArray[i]==='O'){
				countO++;
			}
		if(countX===3){
			return("X Wins");
		}else if(countO===3){
			return("O Wins");
			}
		}
		l+=3;
		m+=3;
	}

	// Check Columns
	l = 0;
	m = 7;
	for(a=0; a<3;a++){
		var countX=0;
		var countO=0;
		for(i = l; i < m;i+=3){
			if(someArray[i]==='X'){
				countX++;
			}
			if(someArray[i]==='O'){
				countO++;
			}
		if(countX===3){
			return("X Wins");
		}else if(countO===3){
			return("O Wins");
			}
		}
		l++;
		m++;


	}



	// // //Check Diagonal heading down from top left to bottom right
	var countX=0;
	var countO=0;
	for(i = 0; i < 9 ; i+=4){
		if(someArray[i]==='X'){
			countX++;
		}else if(someArray[i]==='O'){
			countO++;
		}
	}
	if(countX===3){
		return("X Wins");
	}else if(countO===3){
		return("O Wins");
	}

	// // //Check diagonal heading down from top right to bottom left
	var countX=0;
	var countO=0;
	for(i = 2; i < 7 ; i+=2){
		if(someArray[i]==='X'){
			countX++;
		}else if(someArray[i]==='O'){
			countO++;
		}
	}
	if(countX===3){
		return("X Wins");
	}else if(countO===3){
		return("O Wins");
	}

 }

function setBoard(){
	for(i=0;i<9;i++){
		board[i] = "Z";
	}
}

function computerTurn(){
	var spaceEmpty = false;
	while(spaceEmpty === false){
		var checkSpace = Math.floor(Math.random()*9);
		if(board[checkSpace]==='Z'){
			board[checkSpace] = 'O';
			var spanValue = spanArray[checkSpace];
			document.getElementById(spanValue).innerHTML = "O";
			spaceEmpty = true;
		}
	}

	var getId = idArray[checkSpace];
	document.getElementById(getId).onclick = null;
	// document.getElementById(checkSpace).id;
	// checkWin(board);
}


function disableButtons(){
	for(i=0;i<9;i++){
		if(board[i]='Z'){
			document.getElementById(idArray[i]).onclick = "";
			console.log(idArray[i]);
		}
	}

}




function seeWhoWon(someArray){
	var checkForWin = checkWin(board);
	var winner = true;
	if(checkForWin==="X Wins"){
		document.getElementById("winner-message").innerHTML = "You Win";
		winner = true;
		console.log("winner is " + winner);
		disableButtons();
		return(winner);
	}else if(checkForWin==="O Wins"){
		document.getElementById("winner-message").innerHTML = "Computer Wins";
		winner = true;
		return(winner);
	}

}

function playGame(number, id){
	// set the board for the first and only time
	if (boardCount===0){
		setBoard();
	 	boardCount++;
	 }
	// var playerSquare = document.getElementById(id);
	if(board[number]==="Z"){
		var playerSquare = "square-" + id;
		document.getElementById(playerSquare).innerHTML = 'X';
		document.getElementById(id).onclick = "";
		board[number]="X";
	}
	
	var newWinner = seeWhoWon(board);
	turnCount++;

	if((turnCount < 9)&&(newWinner != true)){
		computerTurn();
		turnCount++;
		checkWin(board);
		seeWhoWon(board);
		console.log("new winner is" + newWinner + "turn Count " + turnCount);

	}
	if((turnCount === 10)&&(newWinner != true)){
		document.getElementById("winner-message").innerHTML = "The game is a tie.";
	}		
}


 function boardReset(){
	for(i=0;i<9;i++){
		var getId = idArray[i];
		var getSpanArray=spanArray[i];
		document.getElementById(getSpanArray).innerHTML = "";
	}
	document.getElementById("winner-message").innerHTML = "";
	document.getElementById("zero").onclick = function(){playGame(0, "zero")};
	document.getElementById("one").onclick = function(){playGame(1, "one")};
	document.getElementById("two").onclick = function(){playGame(2, "two")};
	document.getElementById("three").onclick = function(){playGame(3, "three")};
	document.getElementById("four").onclick = function(){playGame(4, "four")};
	document.getElementById("five").onclick = function(){playGame(5, "five")};
	document.getElementById("six").onclick = function(){playGame(6, "six")};
	document.getElementById("seven").onclick = function(){playGame(7, "seven")};
	document.getElementById("eight").onclick = function(){playGame(8, "eight")};
	turnCount = 1;
	board = [];
	boardCount = 0;
	setBoard();
	// document.getElementById(getId).onclick = function(){playGame(i, getId)};

 }

