function addTextToScreen(btnValue){
  const inputSelector = document.getElementById("input-div");
  inputSelector.innerHTML = inputSelector.innerHTML + btnValue;
}

function answer(){
  const inputSelector = document.getElementById("input-div");
  const outputSelector = document.getElementById("output-div");

  let finalAnswer = eval(inputSelector.innerHTML);

  outputSelector.innerHTML = finalAnswer;
}

function clearAll(){
  const inputSelector = document.getElementById("input-div");
  const outputSelector = document.getElementById("output-div");

  inputSelector.innerHTML = "";
  outputSelector.innerHTML = 0;
}

function removeValue(){
  const inputSelector = document.getElementById("input-div");

  let tempAnswer = inputSelector.innerHTML.slice(0, -1);

  inputSelector.innerHTML = tempAnswer;
}