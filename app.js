var x = document.getElementById("box");
function calculator(x){
    box.value+=x;
    if(x==="c"){
        box.value='';
    }
}

function result(){
    x=box.value;
    x=eval(x);
    box.value=x;
    if(box.value== Infinity) {
        box.value="Can't divide by zero"
    }
}

