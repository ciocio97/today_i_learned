/* Chapter 1. What does 'better' mean ?
                -- Faster ?
                -- Less memory-intensive ?
                -- More readable ?
*/

// for loop
{
  function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {     // n operations & n assignments  -> += , ++
      total += i;                      // n comparisons  -> <=
    }                                  // 1 assignments  -> let total=0;, let i=1;
    return total;
  }

  var t1 = performance.now();
  addUpTo(1000000000);
  var t2 = performance.now();
  console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)  // 1.2553000000189058
}

// No for loop ^ Mathematical Formula
{
  function addUpTo(n) {
    return n * (n + 1) / 2;           // just 3 operations !! 
  }                                   // (1 multiplication & 1 addition & 1 division)
  
  var time1 = performance.now();
  addUpTo(1000000000);
  var time2 = performance.now();
  console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`)  // 0.00010000000474974513
}
