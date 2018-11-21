const cache =(func)=> {
	let cache_object = {};
	return (...args) => {
		let key = JSON.stringify(args);
		key in cache_object
			? null
			: cache_object[key] = func(...args);
        
		return cache_object[key];
  
	};
};
  
const complexFunction1 = (...args) => {
	complexFunction1Call++;
	let result = 0;
	args.map(arg => result=arg+result);
	return result;
};
  
const complexFunction2 = (...args) => {
	complexFunction2Call++;
	let result = 0;
	args.map(arg => result=arg-result);
	return result;
};
const complexFunction3 = (...args) => {
	complexFunction3Call++;
	let result = 0;
	args.map(arg => result=arg*result);
	return result;
};
  
let complexFunction1Call = 0;
let complexFunction2Call = 0;
let complexFunction3Call = 0;
  
const cachedFunction1 = cache(complexFunction1);
const cachedFunction2 = cache(complexFunction2);
const cachedFunction3 = cache(complexFunction3);
  
cachedFunction1(1, 2);
cachedFunction1(1, 2); //pulls from cache
cachedFunction1(1, 3);
// called three times, but complexFunction1Call === 2

cachedFunction2(3);
cachedFunction2(3); //pulls from cache
cachedFunction2(1);
// called three times, but complexFunction2Call === 2

cachedFunction3(3);
cachedFunction3(3); //pulls from cache
// called two times, but complexFunction1Call === 1

// console.log(complexFunction1Call, complexFunction2Call, complexFunction3Call);
  