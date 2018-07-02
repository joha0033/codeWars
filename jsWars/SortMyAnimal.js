let animals = [ 
        { name: 'Cat', legs: 4 },
        { name: 'Snake', legs: 0 },
        { name: 'Dog', legs: 4 },
        { name: 'Pig', legs: 4 },
        { name: 'Human', legs: 2 },
        { name: 'Bird', legs: 2 } 
    ]

let expectedOutput = [
        { name: 'Snake', legs: 0 }, 
        { name: 'Bird', legs: 2 }, 
        { name: 'Human', legs: 2 }, 
        { name: 'Cat', legs: 4 }, 
        { name: 'Dog', legs: 4 }, 
        { name: 'Pig', legs: 4 },
    ]

let order = [
        {key: "legs", direction: "descending"},
        {key: "name", direction: "descending"}
    ];

// we have key and direction

const sortAnimalsOrdered = (animals, order) => {
    let priorKey = null;
    order.forEach((detail, index, array) => {
        let key = detail.key
        animals.sort((a, b) => {
            if(!priorKey){
                return detail.direction === 'descending' ? 
                    a[key] - b[key] || a[key] > b[key] :
                    b[key] - a[key] || b[key] > a[key]
            }

            if(priorKey && a[priorKey]===b[priorKey]){
                return detail.direction === 'descending' ? 
                    a[key] - b[key] || a[key] > b[key] :
                    b[key] - a[key] || b[key] > a[key]
            }
        })
        priorKey = key
    })
    return animals 
}


 const sortAnimal = (animals) => !animals ? null : animals.sort((a, b) => {
         let keys = Object.keys(a) 
         return a[keys[1]] - b[keys[1]] || a[keys[0]] > b[keys[0]]
     })



function arraysEqual(x, y) {
    
    let pass = true

    x.map((object, index) => {

        let outputValues = Object.values(object)

        let expected = Object.values(expectedOutput[index])
        
        return outputValues.map((element, index) => element !== expected[index] ? pass = false :null)

    })
    return pass
}


const assert = (outcome, description) => outcome ? 
    console.log('pass:', description) : console.log('fail:', description)

let result = arraysEqual(sortAnimal(animals), expectedOutput)

assert(result, 'checking if array of objects is sorted correctly')

result = arraysEqual(sortAnimalsOrdered(animals, order), expectedOutput)

assert(result, 'checking if array of objects is sorted by order object correctly')
