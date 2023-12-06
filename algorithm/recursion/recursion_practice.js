{
  /* power */

  // power(2,0) // 1
  // power(2,2) // 4
  // power(2,4) // 16

  // my code
  function power(num, count){
    if(count === 0) return 1;
    return num * power(num, count - 1);
  }

  // solution
  function power(base, exponent){
    if(exponent === 0) return 1;
    return base * power(base, exponent - 1);
  }
  // power 제곱
  // base 밑
  // exponent 지수
}

{
  /* factorial */

  // factorial(1)  // 1
  // factorial(2)  // 2
  // factorial(4)  // 24
  // factorial(7)  // 5040

  // my code
  function factorial(num){
    if(num <= 1) return 1;
    return num * factorial(num - 1);
  }

  // solution
  function factorial(x){
    if(x < 0) return 0;
    if(x <= 1) return 1;
    return x * factorial(x - 1);
  }
}

{
  /* productOfArray */

  // productOfArray([1,2,3])     // 6
  // productOfArray([1,2,3,10])  // 60

  // my code
  function productOfArray(arr){
    let result = 1;
    result = result * arr[0] * productOfArray(arr.slice(1));
    return result;
  }

  // solution
  function productOfArray(arr){
    if(arr.length === 0) return 1;
    return arr[0] * productOfArray(arr.slice(1));
  }
  // product 곱
}

{
  /* recursiveRange */

  // recursiveRange(6)   // 21
  // recursiveRange(10)  // 55

  // my code
  function recursiveRange(num){
    if(num === 0) return 0;
    return num + recursiveRange(num - 1);
  }

  // solution
  function recursiveRange(x){
    if(x === 0) return 0;
    return x + recursiveRange(x - 1);
  }
}

{
  /* fib */

  // fib(4)   // 3
  // fib(10)  // 55
  // fib(28)  // 317811
  // fib(35)  // 9227465

  // my code
  function fib(num){
    if(num <= 1) return num;
    return fib(num - 1) + fib(num - 2);
  }

  // solution
  function fib(n){
    if(n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
  }
}

                  
                                   
                                