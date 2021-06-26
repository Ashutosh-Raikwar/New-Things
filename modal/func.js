console.log("hello");

function run(){
    var elem = document.getElementById("model");
    if(elem.style.display == "none"){
        elem.style.display = "block";
        console.log("runned");
    }
    else{
        elem.style.display = "none";
        console.log("hidded");
    }
    
    
}