//Heart icon click increase heart point
let heartPointInnerText = 0;
const icons = document.getElementsByClassName("icon");
for (const icon of icons) {
  icon.addEventListener("click", function () {
    heartPointInnerText++;
    const heartPoint = document.getElementById("heart-point");
    heartPoint.innerText = heartPointInnerText;
  });
}
// Call Button
//function to get button by id
function getCallButton(id) {
  let button = document.getElementById(id);
  return button;
}

let callHistory = [];

//card 1
getCallButton("call-button-national").addEventListener("click", function () {
  const serviceName = document.getElementById(
    "service-name-national"
  ).innerText;
  const serviceNumber = document.getElementById(
    "service-number-national"
  ).innerText;
  const alertMessage = ["Calling" + " " + serviceName + " " + serviceNumber];
  let availableCoin = parseInt(
    document.getElementById("available-coin").innerText
  );

  if (availableCoin >= 20) {
    alert(alertMessage);
    availableCoin = availableCoin - 20;
    document.getElementById("available-coin").innerText = availableCoin;

 const data = {
    name: serviceName,
    number: serviceNumber,
    date: new Date().toLocaleTimeString(),
  };

  callHistory.push(data);

  let addedCallHistory = document.getElementById("added-call-history");

  const div = document.createElement("div");
  div.innerHTML = `
    <div class="rounded-lg bg-[#FAFAFA] flex items-center justify-between p-2 mt-3" id="added-call-history">
            <div>
                <h1 class="font-bold">${data.name}</h1>
                <p class="text-gray-400 font-semibold">${data.number}</p>
            </div>
            <div>
                <h1 class="font-semibold">${data.date}</h1>
            </div>
        </div>
    `;

  addedCallHistory.appendChild(div);

  } else {
    alert("Not enough coins to make a call!");
  }
 
});

//card 2
getCallButton("call-button-police").addEventListener("click", function () {
  const serviceName = document.getElementById("service-name-police").innerText;
  const serviceNumber = document.getElementById(
    "service-number-police"
  ).innerText;
  const alertMessage = ["Calling" + " " + serviceName + " " + serviceNumber];
  let availableCoin = parseInt(
    document.getElementById("available-coin").innerText
  );

  if (availableCoin >= 20) {
    alert(alertMessage);
    availableCoin = availableCoin - 20;
    document.getElementById("available-coin").innerText = availableCoin;
 const data = {
    name: serviceName,
    number: serviceNumber,
    date: new Date().toLocaleTimeString(),
  };
  callHistory.push(data);

  let addedCallHistory = document.getElementById("added-call-history");

  const div = document.createElement("div");
  div.innerHTML = `
    <div class="rounded-lg bg-[#FAFAFA] flex items-center justify-between p-2 mt-3" id="added-call-history">
            <div>
                <h1 class="font-bold">${data.name}</h1>
                <p class="text-gray-400 font-semibold">${data.number}</p>
            </div>
            <div>
                <h1 class="font-semibold">${data.date}</h1>
            </div>
        </div>
    `;

  addedCallHistory.appendChild(div);
  } else {
    alert("Not enough coins to make a call!");
  }
 
});
//card 3
getCallButton("call-button-fire").addEventListener("click", function () {
  const serviceName = document.getElementById("service-name-fire").innerText;
  const serviceNumber = document.getElementById(
    "service-number-fire"
  ).innerText;
  const alertMessage = ["Calling" + " " + serviceName + " " + serviceNumber];
  let availableCoin = parseInt(
    document.getElementById("available-coin").innerText
  );

  if (availableCoin >= 20) {
    alert(alertMessage);
    availableCoin = availableCoin - 20;
    document.getElementById("available-coin").innerText = availableCoin;
      const data = {
    name: serviceName,
    number: serviceNumber,
    date: new Date().toLocaleTimeString(),
  };
  callHistory.push(data);

  let addedCallHistory = document.getElementById("added-call-history");

  const div = document.createElement("div");
  div.innerHTML = `
    <div class="rounded-lg bg-[#FAFAFA] flex items-center justify-between p-2 mt-3" id="added-call-history">
            <div>
                <h1 class="font-bold">${data.name}</h1>
                <p class="text-gray-400 font-semibold">${data.number}</p>
            </div>
            <div>
                <h1 class="font-semibold">${data.date}</h1>
            </div>
        </div>
    `;

  addedCallHistory.appendChild(div);
  } else {
    alert("Not enough coins to make a call!");
  }

});
//card 4
getCallButton("call-button-ambulance").addEventListener("click", function () {
  const serviceName = document.getElementById(
    "service-name-ambulance"
  ).innerText;
  const serviceNumber = document.getElementById(
    "service-number-ambulance"
  ).innerText;
  const alertMessage = ["Calling" + " " + serviceName + " " + serviceNumber];
  let availableCoin = parseInt(
    document.getElementById("available-coin").innerText
  );

  if (availableCoin >= 20) {
    alert(alertMessage);
    availableCoin = availableCoin - 20;
    document.getElementById("available-coin").innerText = availableCoin;
    const data = {
    name: serviceName,
    number: serviceNumber,
    date: new Date().toLocaleTimeString(),
  };
  callHistory.push(data);

  let addedCallHistory = document.getElementById("added-call-history");

  const div = document.createElement("div");
  div.innerHTML = `
    <div class="rounded-lg bg-[#FAFAFA] flex items-center justify-between p-2 mt-3" id="added-call-history">
            <div>
                <h1 class="font-bold">${data.name}</h1>
                <p class="text-gray-400 font-semibold">${data.number}</p>
            </div>
            <div>
                <h1 class="font-semibold">${data.date}</h1>
            </div>
        </div>
    `;

  addedCallHistory.appendChild(div);
  } else {
    alert("Not enough coins to make a call!");
  }
  
});
//card 5
getCallButton("call-button-women-child").addEventListener("click", function () {
  const serviceName = document.getElementById(
    "service-name-women-child"
  ).innerText;
  const serviceNumber = document.getElementById(
    "service-number-women-child"
  ).innerText;
  const alertMessage = ["Calling" + " " + serviceName + " " + serviceNumber];
  let availableCoin = parseInt(
    document.getElementById("available-coin").innerText
  );

  if (availableCoin >= 20) {
    alert(alertMessage);
    availableCoin = availableCoin - 20;
    document.getElementById("available-coin").innerText = availableCoin;
    const data = {
    name: serviceName,
    number: serviceNumber,
    date: new Date().toLocaleTimeString(),
  };
  callHistory.push(data);

  let addedCallHistory = document.getElementById("added-call-history");

  const div = document.createElement("div");
  div.innerHTML = `
    <div class="rounded-lg bg-[#FAFAFA] flex items-center justify-between p-2 mt-3" id="added-call-history">
            <div>
                <h1 class="font-bold">${data.name}</h1>
                <p class="text-gray-400 font-semibold">${data.number}</p>
            </div>
            <div>
                <h1 class="font-semibold">${data.date}</h1>
            </div>
        </div>
    `;

  addedCallHistory.appendChild(div);
  } else {
    alert("Not enough coins to make a call!");
  }
  
});
//card 6
getCallButton("call-button-corruption").addEventListener("click", function () {
  const serviceName = document.getElementById(
    "service-name-corruption"
  ).innerText;
  const serviceNumber = document.getElementById(
    "service-number-corruption"
  ).innerText;
  const alertMessage = ["Calling" + " " + serviceName + " " + serviceNumber];
  let availableCoin = parseInt(
    document.getElementById("available-coin").innerText
  );

  if (availableCoin >= 20) {
    alert(alertMessage);
    availableCoin = availableCoin - 20;
    document.getElementById("available-coin").innerText = availableCoin;
    const data = {
    name: serviceName,
    number: serviceNumber,
    date: new Date().toLocaleTimeString(),
  };
  callHistory.push(data);

  let addedCallHistory = document.getElementById("added-call-history");

  const div = document.createElement("div");
  div.innerHTML = `
    <div class="rounded-lg bg-[#FAFAFA] flex items-center justify-between p-2 mt-3" id="added-call-history">
            <div>
                <h1 class="font-bold">${data.name}</h1>
                <p class="text-gray-400 font-semibold">${data.number}</p>
            </div>
            <div>
                <h1 class="font-semibold">${data.date}</h1>
            </div>
        </div>
    `;

  addedCallHistory.appendChild(div);
  } else {
    alert("Not enough coins to make a call!");
  }
  
});
//card 7
getCallButton("call-button-electricity").addEventListener("click", function () {
  const serviceName = document.getElementById(
    "service-name-electricity"
  ).innerText;
  const serviceNumber = document.getElementById(
    "service-number-electricity"
  ).innerText;
  const alertMessage = ["Calling" + " " + serviceName + " " + serviceNumber];
  let availableCoin = parseInt(
    document.getElementById("available-coin").innerText
  );

  if (availableCoin >= 20) {
    alert(alertMessage);
    availableCoin = availableCoin - 20;
    document.getElementById("available-coin").innerText = availableCoin;
     const data = {
    name: serviceName,
    number: serviceNumber,
    date: new Date().toLocaleTimeString(),
  };
  callHistory.push(data);

  let addedCallHistory = document.getElementById("added-call-history");

  const div = document.createElement("div");
  div.innerHTML = `
    <div class="rounded-lg bg-[#FAFAFA] flex items-center justify-between p-2 mt-3" id="added-call-history">
            <div>
                <h1 class="font-bold">${data.name}</h1>
                <p class="text-gray-400 font-semibold">${data.number}</p>
            </div>
            <div>
                <h1 class="font-semibold">${data.date}</h1>
            </div>
        </div>
    `;

  addedCallHistory.appendChild(div);
  } else {
    alert("Not enough coins to make a call!");
  }
 
});
//card 8
getCallButton("call-button-brac").addEventListener("click", function () {
  const serviceName = document.getElementById("service-name-brac").innerText;
  const serviceNumber = document.getElementById(
    "service-number-brac"
  ).innerText;
  const alertMessage = ["Calling" + " " + serviceName + " " + serviceNumber];
  let availableCoin = parseInt(
    document.getElementById("available-coin").innerText
  );

  if (availableCoin >= 20) {
    alert(alertMessage);
    availableCoin = availableCoin - 20;
    document.getElementById("available-coin").innerText = availableCoin;
      const data = {
    name: serviceName,
    number: serviceNumber,
    date: new Date().toLocaleTimeString(),
  };
  callHistory.push(data);

  let addedCallHistory = document.getElementById("added-call-history");

  const div = document.createElement("div");
  div.innerHTML = `
    <div class="rounded-lg bg-[#FAFAFA] flex items-center justify-between p-2 mt-3" id="added-call-history">
            <div>
                <h1 class="font-bold">${data.name}</h1>
                <p class="text-gray-400 font-semibold">${data.number}</p>
            </div>
            <div>
                <h1 class="font-semibold">${data.date}</h1>
            </div>
        </div>
    `;

  addedCallHistory.appendChild(div);
  } else {
    alert("Not enough coins to make a call!");
  }

});
//card 9
getCallButton("call-button-railway").addEventListener("click", function () {
  const serviceName = document.getElementById("service-name-railway").innerText;
  const serviceNumber = document.getElementById(
    "service-number-railway"
  ).innerText;
  const alertMessage = ["Calling" + " " + serviceName + " " + serviceNumber];
  let availableCoin = parseInt(
    document.getElementById("available-coin").innerText
  );

  if (availableCoin >= 20) {
    alert(alertMessage);
    availableCoin = availableCoin - 20;
    document.getElementById("available-coin").innerText = availableCoin;
    const data = {
    name: serviceName,
    number: serviceNumber,
    date: new Date().toLocaleTimeString(),
  };
  callHistory.push(data);

  let addedCallHistory = document.getElementById("added-call-history");

  const div = document.createElement("div");
  div.innerHTML = `
    <div class="rounded-lg bg-[#FAFAFA] flex items-center justify-between p-2 mt-3" id="added-call-history">
            <div>
                <h1 class="font-bold">${data.name}</h1>
                <p class="text-gray-400 font-semibold">${data.number}</p>
            </div>
            <div>
                <h1 class="font-semibold">${data.date}</h1>
            </div>
        </div>
    `;

  addedCallHistory.appendChild(div);
  } else {
    alert("Not enough coins to make a call!");
  }
  
});

//clear History
const clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", function () {
  document.getElementById("added-call-history").innerHTML = "";
  callHistory = [];
});
//Challenge part copy item
const copyButtons = document.getElementsByClassName("copy");
let copyCount = document.getElementById("copy-count");
let count = 0;

for (let i = 0; i < copyButtons.length; i++) {
  let button = copyButtons[i];
  button.addEventListener("click", function () {
    let card = button.parentNode.parentNode;
    let numberOfCard = card.querySelector(".service-number");
    let number = numberOfCard.innerText;
    navigator.clipboard.writeText(number);

    count = count + 1;
    copyCount.innerText = count;
    alert("Copied Number is" + " :" + " " + number);
  });
}
