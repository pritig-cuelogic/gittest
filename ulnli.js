/*function clickLi(text){
	alert(text);

}*/

window.onload = function() {
    var myLi = document.getElementById('ultag').addEventListener("click",function(e) {
       
        if(e.target && e.target.nodeName == "LI") {
            alert(e.target.innerHTML );
        }
    });
};


