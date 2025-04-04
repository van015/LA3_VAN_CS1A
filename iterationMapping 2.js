// iterationMapping
// Program that performs double-loop iteration mapping

const maxLimit = parseInt(prompt("Enter the Limit of the Double Loop:"));

for (let i = 0; i <= maxLimit; i++) {
  for (let j = 0; j <= maxLimit; j++) {
    let addedValue = i + j;
    console.log(`[${i}] [${j}] Added value is ${addedValue}`);
  }
}