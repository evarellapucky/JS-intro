let stage = prompt("combien d'étages ?")

for(let i = 0; i <= stage; i++){
  console.log(" ".repeat(stage - i) + "#".repeat(i))
}