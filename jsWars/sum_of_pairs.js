
// https://www.codewars.com/kata/sum-of-pairs/train/javascript

const sumPairs = (ints, s) => {
	let pair = [];
	let previousPair = [];
	let slicers = [];
    
	const sumFactory = {
		isNotRedundantComparison: 
            (num1 , num2) => num1 !== num2,
		isPossibleValue: 
            (num1, num2, sum) => num1 < sum || num1 !== num2,
		comparableBetweenSolutionSet: 
            () => (~(slicers[0] - slicers[1]) > 1),
		sumFound: 
            (num1, num2, sum, currnetIndex, endpoint) => {
            	for(let n = 1; n < endpoint; n++) {
            		if (num1 + ints[currnetIndex+n] === sum){
            			previousPair = pair;
            			pair = [];
            			pair.push(num1, ints[currnetIndex+n]);
            			slicers.push(currnetIndex, currnetIndex+n);
            			return true;
            		}
            	}
            },
		completed: (sumFn) => sumFn,
	};
    
	const isAbleToProceedSums = (num1, num2, sum) =>
		sumFactory.isNotRedundantComparison(num1, num2) && sumFactory.isPossibleValue(num1, num2, sum);
    
    
	const sumSeeker = (array, sum, start, finish) => {
		found:
		for(let i = start; i < finish; i++){
			let int1 = ints[i];
			let int2 = ints[i+1];
			if(isAbleToProceedSums(int1, int2, sum)){
				if(sumFactory.sumFound(int1, int2, sum, i, finish)) 
					break found;
			}
		}
		return sumFactory.comparableBetweenSolutionSet();
	};

	if (sumFactory.completed(sumSeeker(ints, s, 0, ints.length))){
		sumSeeker(ints, s, slicers[0]+1, slicers[1]-1);
	}
	let additionalInfo; 
	previousPair[0] === undefined
		? additionalInfo = ""
		: additionalInfo = `, [${previousPair}] was found first, but there was another pair in between`;
    
	return pair[0] === undefined
		? "no sum found"
		: `(${pair[0]}) + (${pair[1]}) = ${s}${additionalInfo}`;
};

let l1 = [1, 4, 8, 7, 3, 15];
let l2 = [1, -2, 3, 0, -6, 1];
let l3 = [20, -13, 40];
let l4 = [1, 2, 3, 4, 1, 0];
let l5 = [10, 5, 2, 3, 7, 5];
let l6 = [4, -2, 3, 3, 4];
let l7 = [0, 2, 0];
let l8 = [5, 9, 13, -3];

console.log(sumPairs(l1, 8));
console.log(sumPairs(l2, -6));
console.log(sumPairs(l3, -7));
console.log(sumPairs(l4, 2));
console.log(sumPairs(l5, 10));
console.log(sumPairs(l6, 8));
console.log(sumPairs(l7, 0));
console.log(sumPairs(l8, 10));