console.log('Loaded!');
//change the text of main
var element=document.getElementById('main-text');
element.innerHtml='New Value';
//console.log("${element}")
console.log('new loaded');
var image=document.getElementById('madi');

var marginLeft = 0
function moveRight(){
    marginLeft = marginLeft + 5
    image.style.marginLeft = marginLeft + 'px'
}
image.onclick = function(){
    var interval = setInterval(moveRight,100)
};