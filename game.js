
var gray="#EEEEEE";
var red="#FF0000";
var green="#00FF00";
var yellow="#FFFF00";
var board=[];
var collec=[];
var squ;
var timer; 
var count=[0,0,0,0,0,0,0,0,0,0];
function getColor(){
	var m=Math.floor(Math.random()*100)%3;
	switch(m){
		case 0:return red;
		case 1:return green;
		case 2:return yellow;
	}
}
function getP(color,type,x,y){
		var coll=[];
		switch(type){
			case 0:
			var m=new block(color,x,y);
			coll.push(m);
			m=new block(color,x,y-1);
			coll.push(m);
			m=new block(color,x,y+1);
			coll.push(m);
			break;
			case 1:
			var m=new block(color,x,y);
			coll.push(m);
			m=new block(color,x,y+1);
			coll.push(m);
			m=new block(color,x-1,y);
			coll.push(m);
			m=new block(color,x-1,y+1);
			coll.push(m);
			break;
			case 2:
			var m=new block(color,x,y);
			coll.push(m);
			m=new block(color,x,y-1);
			coll.push(m);
			m=new block(color,x,y+1);
			coll.push(m);
			m=new block(color,x-1,y-1);
			coll.push(m);
			break;
			case 3:
			var m=new block(color,x,y);
			coll.push(m);
			m=new block(color,x,y-1);
			coll.push(m);
			m=new block(color,x,y+1);
			coll.push(m);
			m=new block(color,x-1,y);
			coll.push(m);
			break;
		}
		return coll;
}
function squa(x,y,type){
	this.type=type;
	this.content=getP(getColor(),type,x,y);
}
function block(color,x,y){
	this.color=color;
	this.x=x;
	this.y=y;
	this.sameWith=function(blocks){
		for(var i=0;i<blocks.length;i++){
			if(this.x+1==blocks[i].x&&this.y==blocks[i].y)
				return true;
			else
				continue;
		}
		return false;
	}
}
window.onload=function(){
	board=document.getElementsByTagName("td");
	var m=Math.floor(Math.random()*100)%4;
	squ=new squa(-1,2,m);
	timer=setInterval(draw,500);
	document.onkeydown=function(event){
            var e = event || window.event || arguments.callee.caller.arguments[0];
            if(e && e.keyCode==37){ // left
                if(squ.content.length>0){
                	if(canMove(squ)){
                		for(var i=0;i<squ.content.length;i++){
							squ.content[i].y--;
					    }
                	}
                }
            }
            if(e && e.keyCode==39){ // right
                 if(squ.content.length>0){
                	if(canMove(squ)){
                		for(var i=0;i<squ.content.length;i++){
							squ.content[i].y++;
					    }
                	}
                }
            }            
             
        }; 
}
function draw(){
	logic();
	for(var i=0;i<board.length;i++){
		board[i].style.backgroundColor=gray;
	}
	for(var i=0;i<collec.length;i++){
		var x=collec[i].x;
		var y=collec[i].y;
		var color=collec[i].color;
		if(x>=0&&x<=9){
			board[x*6+y].style.backgroundColor=color;
		}
	}
	for(var i=0;i<squ.content.length;i++){
		var x=squ.content[i].x;
		var y=squ.content[i].y;
		var color=squ.content[i].color;
		if(x>=0&&x<=9)
			board[x*6+y].style.backgroundColor=color;
	}

}
function logic(){
	if(canDown(squ)){
		for(var i=0;i<squ.content.length;i++){
			squ.content[i].x++;
		}
	}else{
		for(var i=0;i<squ.content.length;i++){
			if(squ.content[i].x<0)
				clearInterval(timer);
		}
		for(var i=0;i<squ.content.length;i++){
			collec.push(squ.content[i]);
		}
		getGrade();
		count=[0,0,0,0,0,0,0,0,0,0];
		var m=Math.floor(Math.random()*100)%4;
		squ=new squa(-1,2,m);
	}
}
function canDown(squ){
	for(var i=0;i<squ.content.length;i++){
		if(squ.content[i].x+1>9)
			return false;
		else if(squ.content[i].sameWith(collec))
			return false;
		else
			continue;
	}
	return true;
} 
function canMove(squ){
	for(var i=0;i<squ.content.length;i++){
		if(squ.content[i].y-1<0||squ.content[i].y+1>5)
			return false;
		else
			continue;
	}
	return true;
}
function getGrade(){
	for(var i=0;i<collec.length;i++){
		count[collec[i].x]++;
	}
	for(var i=0;i<count.length;i++){
		if(count[i]==6){
			for(var j=0;j<collec.length;j++){
				if(collec[j].x==i){
					collec.splice(j,1);
					j--;
				}else if(collec[j].x<i){
					collec[j].x++;
				}
			}
		}
	}
}
