console.log(process.argv.splice(2)
  .map(n => Number(n)) // Convert strings to numbers
  .reduce((a, b) => a + b) // Sum the array
);
