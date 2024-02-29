let userInput = prompt("parle-moi");

if (userInput.endsWith("?")){
  console.log("Ouais Ouais ...");
} else if (userInput === userInput.toUpperCase() && userInput.length > 0){
  console.log("Pwa, calme-toi ...");
} else if (userInput.includes("Fortnite")){
  console.log("on s'fait une partie soum-soum?");
} else if (userInput == ""){
  console.log("t'es en PLS ?");
} else {
  console.log("balek");
}