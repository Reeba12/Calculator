

function inputbtn(n){
    var input=document.getElementById("input")
    input.value += n;
}
function clearBtn(){
    var input=document.getElementById("input")
    input.value = ""
}
function calculation(){
    var input=document.getElementById("input")
    input.value=eval(input.value);
    
}

