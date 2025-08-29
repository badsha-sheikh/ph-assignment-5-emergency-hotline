//Heart icon click increase heart point
let heartPointInnerText  = 0;
const icons = document.getElementsByClassName("icon");
for (const icon of icons){
   icon.addEventListener("click", function(){
    heartPointInnerText++;
    const heartPoint = document.getElementById("heart-point");
    heartPoint.innerText = heartPointInnerText ;
    
    })
     
}
// Call Button 
//function to get button by id
function getCallButton(id){
   let button =  document.getElementById(id)
   return button
};
// function to get all name
function getName(){
    let names = document.getElementsByClassName("service-name")
    for (let name of names){
        let nameText = name.innerText 
        
    }
}
getName()
//card 1
let nationalCallButton = getCallButton("call-button-national");
nationalCallButton.addEventListener("click",function(){
    console.log("clikced")
     const serviceName = document.getElementById("service-name-national").innerText;
 const serviceNumber = document.getElementById("service-number-national").innerText;
 const alertMessage = ["Calling" + " " + serviceName +  " " + serviceNumber ];
     let availableCoin = parseInt(document.getElementById("available-coin").innerText);
   
 if( availableCoin >= 20){
    alert(alertMessage);
   availableCoin = availableCoin - 20;
document.getElementById("available-coin").innerText = availableCoin;
 }else {
     alert ("Not enough coins to make a call!")
}
})

 




//card 2
 getCallButton("call-button-police")
 .addEventListener("click",function(){
    console.log("clikced")
     const serviceName = document.getElementById("service-name-police").innerText;
 const serviceNumber = document.getElementById("service-number-police").innerText;
 const alertMessage = ["Calling" + " " + serviceName +  " " + serviceNumber ];
     let availableCoin = parseInt(document.getElementById("available-coin").innerText);
   
 if( availableCoin >= 20){
    alert(alertMessage);
   availableCoin = availableCoin - 20;
document.getElementById("available-coin").innerText = availableCoin;
 }else {
     alert ("Not enough coins to make a call!")
}
})
//card 3
getCallButton("call-button-fire")
.addEventListener("click",function(){
    console.log("clikced")
     const serviceName = document.getElementById("service-name-fire").innerText;
 const serviceNumber = document.getElementById("service-number-fire").innerText;
 const alertMessage = ["Calling" + " " + serviceName +  " " + serviceNumber ];
     let availableCoin = parseInt(document.getElementById("available-coin").innerText);
   
 if( availableCoin >= 20){
    alert(alertMessage);
   availableCoin = availableCoin - 20;
document.getElementById("available-coin").innerText = availableCoin;
 }else {
     alert ("Not enough coins to make a call!")
}
})
//card 4
 getCallButton("call-button-ambulance")
.addEventListener("click",function(){
    console.log("clikced")
     const serviceName = document.getElementById("service-name-ambulance").innerText;
 const serviceNumber = document.getElementById("service-number-ambulance").innerText;
 const alertMessage = ["Calling" + " " + serviceName +  " " + serviceNumber ];
     let availableCoin = parseInt(document.getElementById("available-coin").innerText);
   
 if( availableCoin >= 20){
    alert(alertMessage);
   availableCoin = availableCoin - 20;
document.getElementById("available-coin").innerText = availableCoin;
 }else {
     alert ("Not enough coins to make a call!")
}
})
//card 5
 getCallButton("call-button-women-child")
.addEventListener("click",function(){
    console.log("clikced")
     const serviceName = document.getElementById("service-name-women-child").innerText;
 const serviceNumber = document.getElementById("service-number-women-child").innerText;
 const alertMessage = ["Calling" + " " + serviceName +  " " + serviceNumber ];
     let availableCoin = parseInt(document.getElementById("available-coin").innerText);
   
 if( availableCoin >= 20){
    alert(alertMessage);
   availableCoin = availableCoin - 20;
document.getElementById("available-coin").innerText = availableCoin;
 }else {
     alert ("Not enough coins to make a call!")
}
})
//card 6
 getCallButton("call-button-corruption")
.addEventListener("click",function(){
    console.log("clikced")
     const serviceName = document.getElementById("service-name-corruption").innerText;
 const serviceNumber = document.getElementById("service-number-corruption").innerText;
 const alertMessage = ["Calling" + " " + serviceName +  " " + serviceNumber ];
     let availableCoin = parseInt(document.getElementById("available-coin").innerText);
   
 if( availableCoin >= 20){
    alert(alertMessage);
   availableCoin = availableCoin - 20;
document.getElementById("available-coin").innerText = availableCoin;
 }else {
     alert ("Not enough coins to make a call!")
}
})
//card 7
 getCallButton("call-button-electricity")
.addEventListener("click",function(){
    console.log("clikced")
     const serviceName = document.getElementById("service-name-electricity").innerText;
 const serviceNumber = document.getElementById("service-number-electricity").innerText;
 const alertMessage = ["Calling" + " " + serviceName +  " " + serviceNumber ];
     let availableCoin = parseInt(document.getElementById("available-coin").innerText);
   
 if( availableCoin >= 20){
    alert(alertMessage);
   availableCoin = availableCoin - 20;
document.getElementById("available-coin").innerText = availableCoin;
 }else {
     alert ("Not enough coins to make a call!")
}
})
//card 8
getCallButton("call-button-brac")
.addEventListener("click",function(){
    console.log("clikced")
     const serviceName = document.getElementById("service-name-brac").innerText;
 const serviceNumber = document.getElementById("service-number-brac").innerText;
 const alertMessage = ["Calling" + " " + serviceName +  " " + serviceNumber ];
     let availableCoin = parseInt(document.getElementById("available-coin").innerText);
   
 if( availableCoin >= 20){
    alert(alertMessage);
   availableCoin = availableCoin - 20;
document.getElementById("available-coin").innerText = availableCoin;
 }else {
     alert ("Not enough coins to make a call!")
}
})
//card 9
 getCallButton("call-button-railway")
.addEventListener("click",function(){
    console.log("clikced")
     const serviceName = document.getElementById("service-name-railway").innerText;
 const serviceNumber = document.getElementById("service-number-railway").innerText;
 const alertMessage = ["Calling" + " " + serviceName +  " " + serviceNumber ];
     let availableCoin = parseInt(document.getElementById("available-coin").innerText);
   
 if( availableCoin >= 20){
    alert(alertMessage);
   availableCoin = availableCoin - 20;
document.getElementById("available-coin").innerText = availableCoin;
 }else {
     alert ("Not enough coins to make a call!")
}
})


//Call History 
let callHistory = document.getElementById("call-history")






























// function getServiceName () {
//  let serviceNames = document.getElementsByClassName("service-name");
//     for (const name of serviceNames){
//         console.log(name.innerText)
//     }
// }

// const callButtons = document.getElementsByClassName("call");

// for(const callButton of callButtons){
//     callButton.addEventListener("click",function(){
   
//     let serviceNumbers = document.getElementsByClassName("service-number");
//     for(const number of serviceNumbers){
//         console.log(number.innerText)
//     }
//     // const serviceName = document.getElementById("service-name").innerText;
//     // const serviceNumber = document.getElementById("service-number").innerText;
//     // const alertMessage = ["Calling" + " " + serviceName +  " " + serviceNumber ];
//     let availableCoin = parseInt(document.getElementById("available-coin").innerText);
   
//     // if( availableCoin >= 20){
//     //     alert("alertMessage");
//     //     availableCoin = availableCoin - 20;
//     //     document.getElementById("available-coin").innerText = availableCoin;
//     // }else {
//     //     alert ("Not enough coins to make a call!")
//     // }

    
//     })
// }