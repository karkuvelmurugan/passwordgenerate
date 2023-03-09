
/*get the number of characters*/
function charLength() {

    let charLength = document.getElementById('length').value;
    document.getElementById('result').innerHTML = charLength;
    return charLength;

}

document.getElementById('length').addEventListener('change', charLength)

// // get uppercase letters
function uppercase() {
const  upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
password ="";


for(let i = 0; i<charLength ; i++){
    password =password+ upper_case.charAt(Math.floor(math.random()*charLength));
 }
return password
}
const newPassword = uppercase();
  console.log(newPassword);

// document.getElementById("uppercase").value = upper_case[uppercase]


// const lower_case ="abcdefghijklmnopqrstuvwxyz";
// const numbers= "0123456789";
// const symbols = "!@#$%^&*()";




// function uppercase(){

//     let u_case =document.getElementById(uppercase).value 

// }

// function generatePassword() {
//     var length = 8,
//         charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
//         retVal = "";
//    
//     return retVal;
// }

// 
