let arnArray = "UCCCCCUUGUUCCGCUAC";

let splitArn = [];

for (let i = 0; i < arnArray.length; i += 3){
  let arnToSplit = arnArray.slice(i, i+3);
  splitArn.push(arnToSplit);
}
console.log(splitArn)

function translateArn(arn){
  let prot = [];
  for(let i = 0; i < splitArn.length; i++) {
    switch(splitArn[i]){
      case "UCU" :
        case "UCC" :
        case "UCA" :
        case "UCG" :
        case "AGU" :
        case "AGC" :   
          prot.push("Sérine");
          break;
  
        case "CCU" :
        case "CCC" :
        case "CCA" :
        case "CCG" :
          prot.push("Proline");
          break;
  
        case "UUA" :
        case "UUG" : 
          prot.push("Leucine");
          break;
  
        case "UUU":
        case "UUC":
          prot.push("Phénylalanine");
          break;
  
        case "CGU":
        case "CGC":
        case "CGA":
        case "CGG":
        case "AGA":
        case "AGG":
          prot.push("Arginine");
          break;
  
        case "UAU":
        case "UAC":
          prot.push("Tyrosine"); 
          break;  
    }
  }
  return prot.join("-")
}
console.log(translateArn(splitArn))
