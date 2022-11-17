nombre = prompt("enter a number ?");
n = Number(nombre);

function factorial(n) {
  if (n == 1 || n == 0)
  return 1;
  else
  return (factorial(n - 1) * n);
}


let result = "the result is : " + factorial(n);
console.log(result);