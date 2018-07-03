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

 const order3 = [
    { key: 'city', direction: 'ascending' },
    { key: 'phone', direction: 'descending' }
]


 const expectedOutput3 =  [
    { name: 'benjamin', job: 'sales director', phone: 160453349, salary: 25597, city: 'amsterdam', age: 32 }, 
    { name: 'xander', job: 'sales manager', phone: 129839289, salary: 76459, city: 'amsterdam', age: 62 }, 
    { name: 'robert', job: 'developer', phone: 114939445, salary: 23231, city: 'amsterdam', age: 38 }, 
    { name: 'quincy', job: 'janitor', phone: 100950135, salary: 40415, city: 'amsterdam', age: 94 }, 
    { name: 'oscar', job: 'developer', phone: 127882685, salary: 59269, city: 'bonn', age: 37 }, 
    { name: 'quincy', job: 'sales director', phone: 119390729, salary: 11572, city: 'bonn', age: 67 }, 
    { name: 'benjamin', job: 'sales manager', phone: 114906661, salary: 77173, city: 'bonn', age: 88 }, 
    { name: 'elisabeth', job: 'sales manager', phone: 195312430, salary: 56867, city: 'copenhagen', age: 31 }, 
    { name: 'carl', job: 'janitor', phone: 185315448, salary: 1868, city: 'copenhagen', age: 42 }, 
    { name: 'carl', job: 'actor', phone: 166147534, salary: 82083, city: 'copenhagen', age: 42 }, 
    { name: 'xander', job: 'developer', phone: 150845443, salary: 54988, city: 'copenhagen', age: 50 },
    { name: 'christian', job: 'trainee', phone: 144425577, salary: 6279, city: 'copenhagen', age: 68 }, 
    { name: 'elisabeth', job: 'sales manager', phone: 125097010, salary: 61980, city: 'copenhagen', age: 98 }, 
    { name: 'elisabeth', job: 'sales director', phone: 166576630, salary: 97097, city: 'glasgow', age: 69 }, 
    { name: 'buffy', job: 'floor manager', phone: 143848118, salary: 33828, city: 'glasgow', age: 67 }, 
    { name: 'angela', job: 'sales manager', phone: 139904834, salary: 51000, city: 'glasgow', age: 58 }, 
    { name: 'benjamin', job: 'developer', phone: 136649444, salary: 69097, city: 'glasgow', age: 92 }, 
    { name: 'benjamin', job: 'janitor', phone: 118347382, salary: 64865, city: 'glasgow', age: 85 }, 
    { name: 'buffy', job: 'actor', phone: 106279780, salary: 29779, city: 'helsinki', age: 79 }, 
    { name: 'gisela', job: 'sales manager', phone: 119001480, salary: 64526, city: 'london', age: 49 }, 
    { name: 'oscar', job: 'developer', phone: 188577223, salary: 10265, city: 'stockholm', age: 24 }, 
    { name: 'angela', job: 'carpenter', phone: 184263717, salary: 35803, city: 'stockholm', age: 31 }, 
    { name: 'robert', job: 'carpenter', phone: 182266458, salary: 32430, city: 'stockholm', age: 47 }, 
    { name: 'andrew', job: 'sales director', phone: 168153252, salary: 54315, city: 'stockholm', age: 43 }, 
    { name: 'andrew', job: 'actor', phone: 163667094, salary: 5005, city: 'stockholm', age: 96 }, 
    { name: 'buffy', job: 'actor', phone: 148302662, salary: 20851, city: 'stockholm', age: 35 }, 
    { name: 'elisabeth', job: 'trainee', phone: 126854318, salary: 73323, city: 'stockholm', age: 50 }
]

 const records3 = [
    { name: 'oscar', job: 'developer', phone: 188577223, salary: 10265, city: 'stockholm', age: 24 }, 
    { name: 'angela', job: 'carpenter', phone: 184263717, salary: 35803, city: 'stockholm', age: 31 }, 
    { name: 'robert', job: 'carpenter', phone: 182266458, salary: 32430, city: 'stockholm', age: 47 }, 
    { name: 'andrew', job: 'sales director', phone: 168153252, salary: 54315, city: 'stockholm', age: 43 }, 
    { name: 'andrew', job: 'actor', phone: 163667094, salary: 5005, city: 'stockholm', age: 96 }, 
    { name: 'buffy', job: 'actor', phone: 148302662, salary: 20851, city: 'stockholm', age: 35 }, 
    { name: 'benjamin', job: 'sales director', phone: 160453349, salary: 25597, city: 'amsterdam', age: 32 },
    { name: 'elisabeth', job: 'sales manager', phone: 195312430, salary: 56867, city: 'copenhagen', age: 31 }, 
    { name: 'quincy', job: 'sales director', phone: 119390729, salary: 11572, city: 'bonn', age: 67 }, 
    { name: 'quincy', job: 'janitor', phone: 100950135, salary: 40415, city: 'amsterdam', age: 94 }, 
    { name: 'xander', job: 'sales manager', phone: 129839289, salary: 76459, city: 'amsterdam', age: 62 }, 
    { name: 'xander', job: 'developer', phone: 150845443, salary: 54988, city: 'copenhagen', age: 50 }, 
    { name: 'elisabeth', job: 'sales manager', phone: 125097010, salary: 61980, city: 'copenhagen', age: 98 }, 
    { name: 'carl', job: 'actor', phone: 166147534, salary: 82083, city: 'copenhagen', age: 42 }, 
    { name: 'angela', job: 'sales manager', phone: 139904834, salary: 51000, city: 'glasgow', age: 58 }, 
    { name: 'elisabeth', job: 'trainee', phone: 126854318, salary: 73323, city: 'stockholm', age: 50 }, 
    { name: 'buffy', job: 'floor manager', phone: 143848118, salary: 33828, city: 'glasgow', age: 67 }, 
    { name: 'gisela', job: 'sales manager', phone: 119001480, salary: 64526, city: 'london', age: 49 }, 
    { name: 'benjamin', job: 'sales manager', phone: 114906661, salary: 77173, city: 'bonn', age: 88 }, 
    { name: 'oscar', job: 'developer', phone: 127882685, salary: 59269, city: 'bonn', age: 37 }, 
    { name: 'robert', job: 'developer', phone: 114939445, salary: 23231, city: 'amsterdam', age: 38 }, 
    { name: 'carl', job: 'janitor', phone: 185315448, salary: 1868, city: 'copenhagen', age: 42 }, 
    { name: 'benjamin', job: 'janitor', phone: 118347382, salary: 64865, city: 'glasgow', age: 85 }, 
    { name: 'elisabeth', job: 'sales director', phone: 166576630, salary: 97097, city: 'glasgow', age: 69 },
    { name: 'benjamin', job: 'developer', phone: 136649444, salary: 69097, city: 'glasgow', age: 92 }, 
    { name: 'buffy', job: 'actor', phone: 106279780, salary: 29779, city: 'helsinki', age: 79 }, 
    { name: 'christian', job: 'trainee', phone: 144425577, salary: 6279, city: 'copenhagen', age: 68 }
]

export const data = { 
    records,
    records2, 
    records3, 
    expectedOutput,
    expectedOutput2,
    expectedOutput3, 
    order, 
    order2, 
    order3 
    }
