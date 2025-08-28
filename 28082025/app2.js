// var logico = false && false;
// console.log(logico);

// var logico = true || true;
// console.log(logico);

// var logico = 20 == 10;
// console.log(logico);

var logico = 20 == 10 || 8>3;
console.log(logico);

// OR (||)
console.log("=== OR (||) ===");
console.log("20 == 10 || 8 > 3  =>", 20 == 10 || 8 > 3);   // false || true  => true
console.log("20 == 10 || 8 < 3  =>", 20 == 10 || 8 < 3);   // false || false => false
console.log("20 > 10  || 8 > 3  =>", 20 > 10  || 8 > 3);   // true  || true  => true
console.log("20 > 10  || 8 < 3  =>", 20 > 10  || 8 < 3);   // true  || false => true

// AND (&&)
console.log("\n=== AND (&&) ===");
console.log("20 == 10 && 8 > 3  =>", 20 == 10 && 8 > 3);   // false && true  => false
console.log("20 == 10 && 8 < 3  =>", 20 == 10 && 8 < 3);   // false && false => false
console.log("20 > 10  && 8 > 3  =>", 20 > 10  && 8 > 3);   // true  && true  => true
console.log("20 > 10  && 8 < 3  =>", 20 > 10  && 8 < 3);   // true  && false => false