const Mongo = {
	"isValid" : (s) => s.length === 24 && /^[0-9a-f]{24}$/.test(s)
		? true
		: false,
        
	"getTimestamp" : (s) => Mongo.isValid(s)
		? new Date(parseInt(s.slice(0, 8), 16) * 1000)
		: false
};

const test1 = Mongo.isValid("507f1f77bcf86cd799439011"); // true
const test2 = Mongo.isValid("507f1f77bcf86cz799439011"); // false
const test3 = Mongo.getTimestamp("507f1f77bcf86cd799439011"); // 2012-10-17T21:13:27.000Z
const test4 = Mongo.getTimestamp("507f1f77bcf86cz799439011"); // false
/*eslint-disable */
console.log(test1, test2, test3, test4);
/*eslint-enable */