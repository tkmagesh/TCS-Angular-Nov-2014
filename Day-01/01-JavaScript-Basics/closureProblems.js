function getPrimeFinder(){
 var cache = {};
 function checkPrime(n){
    if (n<=3) return true;
    for(var i=2;i<=(n/2);i++)
       if (n % i === 0) return false;
    return true;
 }
 function isPrime(n){
   if (typeof cache[n] !== "undefined"){
       console.log("from cache..!");
       return cache[n];
   }
   console.log("Juz processed..");
   cache[n] = checkPrime(n);
   return cache[n];
 }
 return isPrime;
}

function add(x,y){
	return x +y;
}

function subtract(x,y){
	return x - y;
}

function memoize(fn){
	var cache = {};
	return function(){
		var key = JSON.stringify(arguments);
		if (typeof cache[key] !== "undefined"){
			console.log("from cache");
			return cache[key];
		}
		console.log("juz processed");
		cache[key] = fn.apply(this,[].slice.call(arguments,0));
		return cache[key];
	}
}

var memorizedAdd = memoize(add);
memorizedAdd(10,20);
memorizedAdd(100,200);
memorizedAdd(10,20);