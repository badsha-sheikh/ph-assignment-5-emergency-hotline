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
const callButtons = document.getElementsByClassName("call");
for(const callButton of callButtons){
    callButton.addEventListener("click",function(){
    const serviceName = document.getElementById("service-name").innerText;
    const serviceNumber = document.getElementById("service-number").innerText;
    console.log(serviceName,serviceNumber)
    })
}