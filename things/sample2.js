document.getElementById("btn").addEventListener("click", greet);

function greet() {
    console.log("clicked");
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(email === 'abc@gmail.com' && password === '123456'){
        let access= document.createElement("p");
        access.id = "access";
        let text = document.createTextNode("Access Granted");
        access.appendChild(text);
        access.style.backgroundColor = "green";
        let bod = document.querySelector("body");
        bod.appendChild(access);
        console.log("1");
    }
    else{
        let access= document.createElement("p");
        access.id = "access";
        let text = document.createTextNode("Access denied");
        access.appendChild(text);
        access.style.backgroundColor = "red";
        let bod = document.querySelector("body");
        bod.appendChild(access);
        console.log("2");
    }
}