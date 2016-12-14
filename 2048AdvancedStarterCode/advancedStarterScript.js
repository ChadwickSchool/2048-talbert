function runGame(){

	//temporary function to demonstrate interaction between html and javascript
	var board = [[2,4,8,16],[32,64,128,512],[1024,0,0,0],[0,0,0,0]];
	for(var i = 0; i < 4; i++){
		for(var j = 0; j < 4; j++){
			var boardID = "r"+i+"c"+j;
			if(board[i][j]!=0){
				document.getElementById(boardID).innerHTML = board[i][j];
			}
		}
	}

	//temporary function to demonstrate interaction between css and javascript
	//you can implement a case switch here, if you want to you can, if not don't worry about it
	//they're pretty intuitive to understand. 
	for(var i = 0; i < 4; i++){
		for(var j = 0; j < 4; j++){
			var boardID = "r"+i+"c"+j;
			if(board[i][j] == 2){
				document.getElementById(boardID).style.background = "#f0e5da";
			}
			else if(board[i][j] == 4){
				document.getElementById(boardID).style.background = "#ede2c8";
			}
			else if(board[i][j] == 8){
				document.getElementById(boardID).style.background = "#feb578";
			}
			else if(board[i][j] == 16){
				document.getElementById(boardID).style.background = "#ff9962";
			}
			else if(board[i][j] == 32){
				document.getElementById(boardID).style.background = "#ff8060";
			}
			else if(board[i][j] == 64){
				document.getElementById(boardID).style.background = "#ff613c";
			}
			else if(board[i][j] == 128){
				document.getElementById(boardID).style.background = "#efd26d";
			}
			else if(board[i][j] == 256){
				document.getElementById(boardID).style.background = "#efd15c";
			}
			else if(board[i][j] == 512){
				document.getElementById(boardID).style.background = "#efcd4a";
			}
			else if(board[i][j] == 1024){
				document.getElementById(boardID).style.background = "#f0ca36";
			}
			else if(board[i][j] == 2048){
				document.getElementById(boardID).style.background = "#ccc0b3";
			}
			else{

			}
		}
	}
}

//show students an ascii conversion tool. 
function printKey(e){
	console.log(e.keyCode);
}