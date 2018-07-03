const records = [ 
    { name: 'Cat', legs: 4 },
    { name: 'Snake', legs: 0 },
    { name: 'Dog', legs: 4 },
    { name: 'Pig', legs: 4 },
    { name: 'Human', legs: 2 },
    { name: 'Bird', legs: 2 } 
]

 const order = [
    {key: "legs", direction: "ascending"},
    {key: "name", direction: "ascending"},
];

 const expectedOutput = [
    { name: 'Snake', legs: 0 }, 
    { name: 'Bird', legs: 2 }, 
    { name: 'Human', legs: 2 }, 
    { name: 'Cat', legs: 4 }, 
    { name: 'Dog', legs: 4 }, 
    { name: 'Pig', legs: 4 }
]

 const records2 = [
    {name:"christian", age:40, job:"developer"},
    {name:"andrew", age:48, job:"developer"},
    {name:"elisabeth", age:31, job:"floor manager"},
    {name:"oscar", age:61, job:"floor manager"},
    {name:"gisela", age:51, job:"area manager"},
    {name:"buffy", age:27, job:"trainee"},
    {name:"carl", age:23, job:"trainee"},
    {name:"boomer",age:27,job:"trainer"},
    {name:"cunning",age:27,job:"trainer"}
];

 const order2 = [
    {key: "job", direction: "ascending"},
    {key: "age", direction: "descending"},
    {key: "name", direction: "descending"}
];

 const expectedOutput2 = [
    {name:"gisela",age:51,job:"area manager"},
    {name:"andrew",age:48,job:"developer"},
    {name:"christian",age:40,job:"developer"},
    {name:"oscar",age:61,job:"floor manager"},
    {name:"elisabeth",age:31,job:"floor manager"},
    {name:"buffy",age:27,job:"trainee"},
    {name:"carl",age:23,job:"trainee"},
    {name:"cunning",age:27,job:"trainer"},
    {name:"boomer",age:27,job:"trainer"}
]

const sortOrdered = (records, order) => {
    let priorKey = null;

    order.forEach((detail) => {
        
        let key = detail.key
        
        records.sort((a, b) => {
            if(!priorKey){
                return detail.direction === 'ascending' ? 
                    a[key] - b[key] || a[key] > b[key] :
                    b[key] - a[key] || b[key] > a[key]
            }

            if(priorKey && a[priorKey]===b[priorKey]){
                return detail.direction === 'ascending' ? 
                    a[key] - b[key] || a[key] > b[key] :
                    b[key] - a[key] || b[key] > a[key]
            }
        })
        priorKey = key
    })
    return records 
}


 const sortAnimal = (records) => !records ? null : records.sort((a, b) => {
         let keys = Object.keys(a) 
         return a[keys[1]] - b[keys[1]] || a[keys[0]] > b[keys[0]]
     })



const arraysEqual = (x, y) => {
    let pass = true

    x.map((object, index) => {
        let outputValues = Object.values(object)
        
        let expected = Object.values(y[index])
        
        return outputValues.map((element, index) => element !== expected[index] ? pass = false :null)
    })
    return pass
}



const assert = (outcome, description) => outcome ? 
    console.log('pass:', description) : console.log('fail:', description)

// TESTING FUNCTION WITHOUT ORDER OBJECT
let dataToTest = sortAnimal(records)

let result = arraysEqual(dataToTest, expectedOutput)

assert(result, 'checking if array of objects is sorted correctly')

// TESTING FUNCTION WITH ORDER OBJECT
let dataToTest1 = sortOrdered(records, order)

result1 = arraysEqual(dataToTest1, expectedOutput)

assert(result1, 'checking if array of objects is sorted by order object correctly')


// TESTING FUNCTION WITH ORDER OBJECT
let dataToTest2 = sortOrdered(records2, order2)

let result2 = arraysEqual(dataToTest2, expectedOutput2)

assert(result2, 'checking if array of objects is sorted by order object correctly')






