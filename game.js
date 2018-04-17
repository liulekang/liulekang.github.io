
var gray="#EEEEEE";
var red="#FF0000";
var green="#00FF00";
var yellow="#FFFF00";
var board=[];
var collec=[];
var timer; 
function squa(color,x,y,type){
	this.color=color;
	this.x=x;
	this.y=y;
	this.type=type;
}
function block(color,x,y){
	this.color=color;
	this.x=x;
	this.y=y;
}
window.onload=function(){
	setClipboard("sdasdas");
	alert("wancheng");
	board=document.getElementsByTagName("td");
	var q=new block(red,0,3);
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
function setClipboard(maintext) {

   if (window.clipboardData) {
   	alert("11111");

      return (window.clipboardData.setData("Text", maintext));

   }

   else if (window.netscape) {
   		alert("2222222");

      netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');

      var clip = Components.classes['@mozilla.org/widget/clipboard;1'].createInstance(Components.interfaces.nsIClipboard);

      if (!clip) return;

      var trans = Components.classes['@mozilla.org/widget/transferable;1'].createInstance(Components.interfaces.nsITransferable);

      if (!trans) return;

      trans.addDataFlavor('text/unicode');

      var str = new Object();

      var len = new Object();

      var str = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);

      var copytext=maintext;

      str.data=copytext;

      trans.setTransferData("text/unicode",str,copytext.length*2);

      var clipid=Components.interfaces.nsIClipboard;

      if (!clip) return false;

      clip.setData(trans,null,clipid.kGlobalClipboard);

      return true;

   }else{
   	alert("333333");
   }

   return false;

}


