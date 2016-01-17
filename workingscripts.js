
var tryToWin = false;
var turnCount = 1;
var board = [];
var boardCount = 0; //insures board is only set one time;
var spanArray = ["square-zero", "square-one", "square-two", "square-three", "square-four","square-five","square-six","square-seven","square-eight" ];
var idArray = ["zero", "one", "two","three","four","five","six","seven","eight"];
var winningArray = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

function checkWin(loopcountl, loopcountm, incrementValuei, incrementValuelm, someArray){

	// Check Rows and Columns
	var l = loopcountl;
	var m = loopcountm;
	for (a = 0; a < 3; a++){
		var countX=0;
		var countO=0;
		for(i = l; i < m ; i+=incrementValuei){
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
		l+=incrementValuelm;
		m+=incrementValuelm;
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


// function canComputerWin(){
// 	var l = 0;
// 	var m = 3;
// 	for (a = 0; a < 3; a++){
// 		var countO=0;
// 		for(i = l; i < m ; i++){
// 			if(board[i]==='O'){
// 				countO++;
// 			}else if(board[i] === 'O'){
// 				var blankSpace = i;
// 			}
// 		}
// 		if((countX===2) && (board[blankSpace]==='Z')){
// 			board[blankSpace]='O';
// 			var spanValue = spanArray[blankSpace];
// 			document.getElementById(spanValue).innerHTML = "O";
// 			document.getElementById(idArray[blankSpace]).onclick = null;
// 			return true;	
// 			break;
// 		}
// 		l+=3;
// 		m+=3;


// 	var l = 0;
// 	var m = 7;
// 	for (a = 0; a < 3; a++){
// 		var countO=0;
// 		for(i = l; i < m ; i+=3){
// 			if(board[i]==='O'){
// 				countO++;
// 			}else if(board[i] === 'Z'){
// 				var blankSpace = i;
// 			}
// 		}

// 		if((countO===2) && (board[blankSpace]==='Z')){
// 			if(limitComputerTurn===false){
// 				board[blankSpace]='O';
// 				var spanValue = spanArray[blankSpace];
// 				document.getElementById(spanValue).innerHTML = "O";
// 				document.getElementById(idArray[blankSpace]).onclick = null;
// 				return true;
// 				break;
// 			}
// 		}
// 		l+=1;
// 		m+=1;
// 	}
// 	return false;

// }




function computerBlock(){


	//Code for Computer to block player's move

	var countComputerReturn = 0;
	var limitComputerTurn = false;
	var l = 0;
	var m = 3;
	for (a = 0; a < 3; a++){
		var countX=0;
		for(i = l; i < m ; i++){
			if(board[i]==='X'){
				countX++;
			}else if(board[i] === 'Z'){
				var blankSpace = i;
			}
		}
		if((countX===2) && (board[blankSpace]==='Z')){
			board[blankSpace]='O';
			var spanValue = spanArray[blankSpace];
			document.getElementById(spanValue).innerHTML = "O";
			document.getElementById(idArray[blankSpace]).onclick = null;
			limitComputerTurn = true;
	
			break;
		}
		l+=3;
		m+=3;

	}

	if(limitComputerTurn === false){
		var l = 0;
		var m = 7;
		for (a = 0; a < 3; a++){
			var countX=0;
			for(i = l; i < m ; i+=3){
				if(board[i]==='X'){
					countX++;
				}else if(board[i] === 'Z'){
					var blankSpace = i;
				}
			}

			if((countX===2) && (board[blankSpace]==='Z')){
				if(limitComputerTurn===false){
					board[blankSpace]='O';
					var spanValue = spanArray[blankSpace];
					document.getElementById(spanValue).innerHTML = "O";
					document.getElementById(idArray[blankSpace]).onclick = null;
					limitComputerTurn=true;
					break;
				}
			}
			l+=1;
			m+=1;
		}
	}

	if(limitComputerTurn === false){
		if(board[4]!='O'){
			for (a = 0; a < 3; a++){
				var countX=0;
				for(i = 0; i < 9 ; i+=4){
					if(board[i]==='X'){
						countX++;
					}else if(board[i] === 'Z'){
						var blankSpace = i;
					}
				}
				if((countX===2) && (board[blankSpace]==='Z')){
					if(limitComputerTurn===false){
						board[blankSpace]='O';
						var spanValue = spanArray[blankSpace];
						document.getElementById(spanValue).innerHTML = "O";
						document.getElementById(idArray[blankSpace]).onclick = null;
						limitComputerTurn=true;
						break;
					}
				}
			}
		}
	}


	if(limitComputerTurn === false){
		if(board[4]!='O'){
			for (a = 0; a < 3; a++){
				var countX=0;
				for(i = 2; i < 7 ; i+=2){
					if(board[i]==='X'){
						countX++;
					}else if(board[i] === 'Z'){
						var blankSpace = i;
					}
				}
				if((countX===2) && (board[blankSpace]==='Z')){
					if(limitComputerTurn===false){
						board[blankSpace]='O';
						var spanValue = spanArray[blankSpace];
						document.getElementById(spanValue).innerHTML = "O";
						document.getElementById(idArray[blankSpace]).onclick = null;
						limitComputerTurn=true;
						break;
					}
				}
			}
		}
	}

//Computer trying to block a move where player has spaces in the corners
	// if((board[0]==="X")&&(board[8]==="Z"))||((board[2]==="X")&&b(board[6]==="Z"))){
	//		if(board[0]==="X"){
	//			board[8]="O";
	//
	//		document.getElementById(spanArray[6]).innerHTML="O";
	// 		spaceEmpty = true;
	// 		limitComputerTurn = true;
	// 		document.getElementById(idArray[6]).onclick = null;

	//}
	// 	if(board[6]==="Z"){
	// 		board[6]="O";
	// 		document.getElementById(spanArray[6]).innerHTML="O";
	// 		spaceEmpty = true;
	// 		limitComputerTurn = true;
	// 		document.getElementById(idArray[6]).onclick = null;
	// 	}else if(board[2]==="Z"){
	// 		board[2]="O";
	// 		document.getElementById(spanArray[6]).innerHTML="O";
	// 		spaceEmpty = true;
	// 		limitComputerTurn = true;
	// 		document.getElementById(idArray[6]).onclick = null;
	// 	}
	// }

	// if((board[2]==="X")&&(board[6]==="X")){
	// 	if(board[6]==="Z"){
	// 		board[8]="O";
	// 		document.getElementById(spanArray[6]).innerHTML="O";
	// 		spaceEmpty = true;
	// 		limitComputerTurn = true;
	// 		document.getElementById(idArray[6]).onclick = null;
	// 	}else if(board[0]==="Z"){
	// 		board[0]="O";
	// 		document.getElementById(spanArray[6]).innerHTML="O";
	// 		spaceEmpty = true;
	// 		limitComputerTurn = true;
	// 		document.getElementById(idArray[6]).onclick = null;
	// 	}
	// }
	console.log("At the end of the page limitcomputerturnis " + limitComputerTurn);
	return limitComputerTurn;
	
}


function computerWin(){

	var limitComputerTurn = false;
	if(board[4]==="Z"){
		board[4]="O";
		document.getElementById(spanArray[4]).innerHTML = "O";
		document.getElementById(idArray[4]).onclick = null;
		limitComputerTurn = true;
	}


	if(limitComputerTurn === false){
		var blankSpace;
		var l = 0;
		var m = 3;
		for (a = 0; a < 3; a++){
			var countZ=0;
			var countO=0;
			for(i = l; i < m ; i++){
				if(board[i]==='O'){
					countO++;
					("Ocount is " + countO);
				}
				if((board[i]==='Z')||(board[i]==='O')){
					countZ++;
					if(board[i]=='Z'){
						blankSpace = i;
					}
				}
			}

			if((countZ===3) && (countO > 0)){
				board[blankSpace]='O';
				var spanValue = spanArray[blankSpace];
				document.getElementById(spanValue).innerHTML = "O";
				document.getElementById(idArray[blankSpace]).onclick = null;
				limitComputerTurn = true;
				break;
			}
		l+=3;
		m+=3;
		}
	}
	if(limitComputerTurn === false){
		var l = 0;
		var m = 7;
		for (a = 0; a < 3; a++){
			var countZ=0;
			var countO=0;
			for(i = l; i < m ; i+=3){
				if(board[i]==='O'){
					countO++;
					("Ocount is " + countO);
				}
				if((board[i]==='Z')||(board[i]==='O')){
					countZ++;
					if(board[i]=='Z'){
						blankSpace = i;
					}
				}
			}

			if((countZ===3) && (countO > 0)){
				board[blankSpace]='O';
				var spanValue = spanArray[blankSpace];
				document.getElementById(spanValue).innerHTML = "O";
				document.getElementById(idArray[blankSpace]).onclick = null;
				limitComputerTurn = true;
				break;
			}
		l+=1;
		m+=1;
		}
	}
	console.log("limitcomputer turn is " + limitComputerTurn);
	if(limitComputerTurn === false){
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
	}


}




function disableButtons(){
	for(i=0;i<9;i++){
		if(board[i]='Z'){
			document.getElementById(idArray[i]).onclick = "";
		}
	}

}




function seeWhoWon(someArray){
	var checkForWin
	checkForWin = checkWin(0, 7, 3, 1, board);
	if((checkForWin!= "X Wins") && (checkForWin != "O Wins")){
		checkForWin = checkWin(0, 3, 1, 3, board);
	}
	if(checkForWin==="X Wins"){
		document.getElementById("winner-message").innerHTML = "You Win";
		disableButtons();
		return(true);
	}else if(checkForWin==="O Wins"){
		document.getElementById("winner-message").innerHTML = "You Lose";
		return(true);
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
		var tryToWin2 = computerBlock();
		if(tryToWin2 != true){
			computerWin();
		}
		turnCount++;
		checkWin(0, 3, 1, 3, board);
		checkWin(0, 7, 3, 1, board);
		seeWhoWon(board);
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

	// for(i=0; i<9;i++){
	// 	document.getElementById(idArray[i]).onclick = function(){playGame(i, idArray[i])};
	// }
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

