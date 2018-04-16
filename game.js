
var gray="#EEEEEE";
var red="#FF0000";
var green="#00FF00";
var yellow="#FFFF00";
var board=[];
var collec=[];
var timer; 
function block(color,x,y){
	this.color=color;
	this.x=x;
	this.y=y;
}
window.onload=function(){
	board=document.getElementsByTagName("td");
	var q=new block(yellow,0,3);
	collec.push(q);
	timer=setInterval(draw,300);
}
function draw(){
	logic();
	for(var i=0;i<board.length;i++){
		board[i].style.backgroundColor=gray;
	}
	for(var i=0;i<collec.length;i++){
		board[collec[i].x*6+collec[i].y].style.backgroundColor=collec[i].color;
	}

}
function logic(){
	collec[0].x++;
	if(collec[0].x>8)
		clearInterval(timer);
}
