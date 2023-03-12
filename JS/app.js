let myDom = "Document";
let name = "Doky";

const myDog = {
    name : "Doky"
};
const myCat  ={
    name : "Chachita" 
};

console.log(myDog.name);
console.log(myCat.name);

class Mouse {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    }
    function Mouse(name, age) {
        this.name = name;
        this.age = age;
    }
    

    const myMouse = new Mouse ("Mickey", 5);

class button {
    constructor(parentID, text) {
        this.parentID = parentID;
        this.text = text;
    }
    }

    function button(parentID, text) {
        this.parentID = parentID;
        this.text = text;
    }
    render() {
        let myApp = document.getElementById(this.parentID);
        let myApp = document.getElementById(this.text);

        myApp.innerHTML = "haz click"; // VAmos a escribir el html para que se 
        // dibuje un boton con el texto de this.text
    }
