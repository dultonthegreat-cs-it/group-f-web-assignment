//color change  0      1     2        3       4      5         6
let colors =["white","red","yellow","blue","green","purple","orange"];
let cChange=0;
function changeColor(){
    let heading=
    document.getElementById("contactTitle");
    heading.style.color=
    colors[cChange];cChange++;
    if(cChange>=colors.length){
        cChange=0;
    }
}
    changeColor();
setInterval(changeColor,2000);