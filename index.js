const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let inputEl1 = document.getElementById("input-el1")
let inputEl2 = document.getElementById("input-el2")
let password = []
    
    
clearFields()
function generatePassword(){
    for(let z = 0; z < 15; z++){
        let randomCharacter = " " 
        for(let i = 0; i < characters.length; i++){
            let randomNumber = Math.floor(Math.random() * characters.length)
            randomCharacter = characters[randomNumber]
            
        }
        password.push(randomCharacter)
    
    
    }

}    
    
function renderPassword(){
    clearFields()
    password = []
    generatePassword()
    for(let v = 0; v < password.length; v++){
        inputEl1.value += password[v]
    }
    password = []
    generatePassword()
    for(let v = 0; v < password.length; v++){
        inputEl2.value += password[v]
    }
}
 
function clearFields(){
    inputEl1.value = "";
    inputEl2.value = "";
}   


    
