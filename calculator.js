const screen =document.querySelector("#display");
function valueof(input){
    screen.value += input;
}
function clearall(){
  screen.value= "";
}
function clearone(){
    let str='';
    // screen.value=str;
    str=screen.value;
    screen.value=str.slice(0,str.length-1);
    return screen.value;
    
}
function calculate(){
    screen.value = eval(screen.value);
}
