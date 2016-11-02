var puzzlearea = document.getElementById("puzzlearea");
//var s = puzzlearea.getElementsByTagName("div");
var i=0;
var emptytilePosRow = 4;
var emptytilePosCol = 4;
var checker = true;
var checkerRow = true;



//set board
while (i < 15) {
	puzzlearea.getElementsByTagName("div")[i].className = "puzzlepiece";
	settiles(puzzlearea.getElementsByTagName("div")[i], i);
	addbackground(puzzlearea.getElementsByTagName("div")[i], i );
	setinitialcordinates(puzzlearea.getElementsByTagName("div")[i],i);
	puzzlearea.getElementsByTagName("div")[i].addEventListener("click", movetile);
	i++;
}


//shuffle on click
$(document).ready(function(){
 $("#shufflebutton").click(function(){
	n = 0;
	emptytilePosRow = 4;
	emptytilePosCol = 4;
	checker = true;
	checkerRow = true;
	//generate a random array of 15 numbers
	function randomnumbers(lowest,highest){
		var array= [];
		while(highest>= lowest) array.push(highest--)    
		array.sort(function(){return .5- Math.random()});  
		return array;
	}
	b=randomnumbers(0,14);
	//reset board
	while (n < 15){
		k=b[n];
		puzzlearea.getElementsByTagName("div")[n].className = "puzzlepiece";
		settiles(puzzlearea.getElementsByTagName("div")[n], k);
		setinitialcordinates(puzzlearea.getElementsByTagName("div")[n],k);
		puzzlearea.getElementsByTagName("div")[n].addEventListener("click", movetile);
		n++;
	}
  
 });
});

//set initial coordinates for each puzzlepiece
function setinitialcordinates(elem, indx){
	var id = indx+1;
	//set column
	if ((id % 4) == 0){
		setY(elem,4);
	}
	else {
		setY(elem, (id %4));
	}
	//set row
	if ((id% 4) == 0){
		setX(elem, (id/4));
	}
	else {
		setX(elem, (Math.ceil(id/4)));
	}
	
}
//set the tiles on the board
function settiles(e, ind){
  var i = Math.floor(ind / 4);
  var j = ind % 4;
  var x = i * (400 / 4), y = j * (400 / 4);
  e.style.top = x + "px";
  e.style.left = y + "px";
}

//add image to background
function addbackground(e, ind){
  var i = Math.floor(ind / 4);
  var j = ind % 4;
  var x = -i * (400/4) + "px";
  var y = -j * (400/ 4) + "px";
  e.style.backgroundPosition = y + " " + x;

}
//set x(row) element for puzzlepiece
function setX(elem,num){
	elem.x = num;
}

//set y(column) element for puzzlepiece
function setY(elem,num){
	
	elem.y=num;
}

//get x(row) element for puzzlepiece
function getX(elem){
	return elem.x;
}

//get y(column) element for puzzlepiece
function getY(elem){
	return elem.y;
}


//move tiles up, down,left,right
function movetile(e){
	posCol = getY(this);
	posRow = getX(this);
	//Move Down
	if (posRow + 1 == emptytilePosRow && posCol == emptytilePosCol){
		$(this).animate({
			top: "+="+"25%"
		});
		checkerRow = !checkerRow;
		emptytilePosRow-=1;
		setX(this,(getX(this)+1))
    }
   
    //Move right
  
	if (posRow == emptytilePosRow && posCol + 1 == emptytilePosCol){
		$(this).animate({
			left : "+="+"25%"
		});
		checker = !checker;
		emptytilePosCol-=1;
		setY(this,(getY(this)+1));
	}
	//Move left
  
	if (posRow == emptytilePosRow && posCol - 1 == emptytilePosCol){
		$(this).animate({
			left : "-=" + "25%"
		});
		checker = !checker;
		emptytilePosCol+=1;
		setY(this,(getY(this)-1));
   }
   
   //Move up
   if (posRow - 1 == emptytilePosRow && posCol == emptytilePosCol){
		$(this).animate({
			top: "-="+"25%"
		});
		checkerRow = !checkerRow;
		emptytilePosRow+=1;
		setX(this,(getX(this)-1))
   }
   
}
  