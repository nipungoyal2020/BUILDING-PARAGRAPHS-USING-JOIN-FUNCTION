function get2(){

document.getElementById("get paragraph 2").innerHTML = inputs.join(" .");

}

function get1(){
    
document.getElementById("get paragraph 1").innerHTML = inputs.join(" .");
    
    }

var inputs = []

for(var i = 1 ; i <= 6 ; i++)

{

inputs.push(document.getElementById("box" + i).value);

}