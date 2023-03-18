let myDom = "document";
let name = "Doky";

const myDog = {
    name : "Doky"
};
const myCat  ={
    name : "Chachita" 
};

console.log (myDog.name);
console.log (myCat.name);



class Mouse {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}/*
    function Mouse(name, age) {
        this.name = name;
        this.age = age;
    }
   */
    
    const myMouse = new Mouse ("Mickey", 5);
    const myMouse2 = new Mouse ("Mini", 4);

    console.log (myMouse);
    console.log (myMouse2);
    
    class Button {
        constructor (parentID, text) {
            this.parentID = parentID;
            this.text = text;
        }
            render() {
          let myApp = document.getElementById(this.parentID);
          const myButtonHTML = myApp.innerHTML + "<button>" + this.text + "</button>";
          myApp.innerHTML = myButtonHTML;
    }
}
    let myButon = new Button ("app", "Contraseña");
    

    class Input {
        constructor(parentID, type) {
            this.parentID = parentID;
            this.type = type;
        }
    
        render() {
            let myApp = document.getElementById(this.parentID);
    
            const myInputHTML = myApp.innerHTML + "<input type="+ this.type + ">";
    
            myApp.innerHTML = myInputHTML;  
           
        }   
    }
    
    let myInput = new Input("footer", "checkbox");
    myInput.render();
    
    let myInput2 = new Input("footer", "date");
    myInput2.render();
    
    let myInput3 = new Input("footer", "password");
    myInput3.render();
    
    let mySuperArrayofStrings = ["Login" , "Signup" , "Reset" ];
    