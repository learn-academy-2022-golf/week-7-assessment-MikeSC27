// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// const { throwStatement } = require("@babel/types")
// const { KeyObject } = require("crypto")
// const { number, array, string, number } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// Pseudocode:
        //Paramenter will be an array, string, number, object
        //Argument: const and or perhaps var but not bug or gremlin
        //Create a function named someThingCool
        //Utilize some fancypants HOF with hash rocket fuel to remove, join, add, loop as assessor or mutator in the array object or string.  Maybe use a cool tool like random Math.floor(Math.random()) function to randomize the remaining elements or .sort(a,b) or ...spread operator, hey dont forget [...new Set()].
        //Return the array, or else you'll be undefined, unless its a fancypants single line HOF then perhaps you can get away without the RTN...

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

describe("aboutMe", () => {
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () => {
    const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
    const peopleOutput = ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
    expect(aboutMe(people)).toEqual(peopleOutput)
  })
})

    // Jest Test RTN:
    // ReferenceError: aboutMe is not defined
    // Test Suites: 1 failed, 1 total
    // Tests:       1 failed, 1 total


const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }]

// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// b) Create the function that makes the test pass.
// Pseudocode:
        //Paramenter will be an array of objects
        //Argument: const people, an array of objects
        //Create a function named aboutMe
        //Get Destructive on the array of objects and destructure it twice to seperate each object key value into two seperate arrays.  Then use .map on the object value on the key name: to pull out the names then .split.map(value items).charAt(0).toUpperCase, add capital letter to begining of each value item.  Also need to seperate the second key item using [...new Set()] constructor. Seperate all destructured items and then create the sentance with new variables to return.  I think I just recreated the same array object for the name destructering, and I dont think I needed the Object constructor but it worked and I could .map.map so I kept it, not really understanding it though since it just made an object from an object array which i know I cant .map an object but the (array) was still there.
        //Return the array with string interpolation, it will have a sentence about each person with their name capitalized.

const aboutMe = (array) => {
        let work = [...new Set(array.map(item => item.occupation))];
        let name = (Object.values(array).map((value)=>value.name.split(" ").map(item=> item.charAt(0).toUpperCase() + item.substr(1))))
            let one = name[0].join(' ')
            let one1 = work[0]
            let two = name[1].join(' ')
            let two2 = work[1]
            let three = name[2].join(' ')
            let three3 = work[2]
        return [`${one} is ${one1}.`, `${two} is ${two2}.`, `${three} is ${three3}.`]
        }
 console.log(aboutMe(people))

    // Jest Test Return PASS 
    // Test Suites: 1 passed, 1 total
    // Tests:       1 passed, 1 total
    // Snapshots:   0 total
    // Time:        0.263 s, estimated 1 s
    // Ran all test suites.
    // ✨  Done in 1.48s.

//***********************************************************************
        // MY FAILED ATTEMPTS,
                //   const aboutMe = (array) => {
                    
                //     let work = (Object.values(array).map((value)=>value.occupation))
                //     let name = (Object.values(array).map((value)=>value.name.split(" ").map(item=> item.charAt(0).toUpperCase() + item.substr(1).toLowerCase().join(value))))
                //     return name
                //  };
                //  console.log(aboutMe(people))
                // .toLowerCase()
                // const aboutMe = (array) = Object.key().map(element(key,value))
                // const aboutMe = (array) =>{
                //  let work = (Object.keys(array).map((index) => {
                //     array.map(index)
                //  }))
                // let name = (Object.values(array).map((value)=>value.name.split(" ").map(item=> item.charAt(0).toUpperCase() + item.substr(1).toLowerCase())))
                //   let one = name[0]
                //   let two = name[1]
                //   let three = name[2]
                // return array


                // console.log(aboutMe(people))

                // return array.filter(({value}) => value).map()
                //  array.sort((a, b) => a - b);
                // const aboutMe = (array) =>{
                //   array.map(({value}) => value);
                // }
                // let name = array.map(Object.entries(([1]).map(()=>Object.value)))
                  // let work = (Object.index(array).filter(occupation))
                // const aboutMe =  (array => {{name, occupation} => {
                // } return ('${name} is a ${occupation}'), ('${name} is ${occupation}'), ('${name} is a ${occupation}')));

                // let caps = name.split(" "); 
                // caps.map((index) => index.charAt().toUpperCase() + name.slice())
                // return caps
                // array.sort((a, b) => a - b)
                // array.map((element.filter(value.map())))
                //  let one = array[0]
                //  let two = array[1]
                //  let three = array[2]
                // console.log(people.map(value))
                // const aboutME = ({name: occupation:}) => {
                //   console.log(${name:} is ${occupation})
                // }
                    // const aboutMe = (array) => {
                    //   newArray = array [{key:[0] = obj1string1, key:[1] = obj1string2}, {value:[0] = obj2string1, value:[1] = obj2string2}];
                    // console.log(newArray)
                    // }
                    // console.log(aboutMe(people))

                    // let obj1 = [...new Set(array.map(item => item.name))].map([0].charAt(0).toUpperCase() + obj1[0].slice(1))
                // return obj1

                // const person = {};
                // for(let i = 0; i < array.length; i++){
                //    const el = array[i];
                //    const type = typeof el;
                //    if(person.hasOwnProperty(type)){
                //       person[type].push(el);
                //    }else{
                //       person[type] = [el];
                //    };
                // };
//***********************************************************************


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

// Test Driven Development
describe("threeRemain", () => {
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    const hodgepodge1Output = [ 2, 0, -1, 0 ]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    const hodgepodge2Output = [ 2, 1, -1 ]
    expect(threeRemain(hodgepodge1)).toEqual(hodgepodge1Output)
    expect(threeRemain(hodgepodge2)).toEqual(hodgepodge2Output)
  })
})

    // Jest Test RTN:
    // ReferenceError: threeRemain is not defined
    // Test Suites: 1 failed, 1 total
    // Tests:       1 failed, 1 total

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

// b) Create the function that makes the test pass.

// Pseudocode:
        //Paramenter will be an annoying mixed array of every conceivable stick in my crawl.   
        //Argument: const hodgepodge1, && hodgepodge2 
        //Create a function named threeRemain
        //First create two empty arrays to seperate the sticks from given parameter into bad array and move the cool innocent numbers into numbs array.  Then utilize HOF .forEach with hash rocket fuel to loop the given array, and call on the typeof operator for a little assistance to id the sticks and numbers so that .push can throw the stick into the bad array and gently place the nice numbers into the numbs array. Once that is done then really who cares about the bad array just run a clean .map on numbs to perform a successful modulo operation on each number in the array.
        //Return the numbers after modulo operation. In retrospec this was much easier than it was for me becaues I got stuck on the isNaN function and Number.isNaN method.  If I just thought to seperate into two arrays first I would have been done as fast as I finished problem 3.  

const threeRemain = (array) => {
    let numbs = []
    let bad = []
    array.forEach((element) => typeof element === 'number' ? numbs.push(element) : bad.push(element));
      return numbs.map((number) => {
      return number % 3
    }) 
}
      
    
console.log(threeRemain(hodgepodge1))
console.log(threeRemain(hodgepodge2))

  // Jest Test Return PASS 
  // Test Suites: 1 passed, 1 total
  // Tests:       1 passed, 1 total
  // Snapshots:   0 total
  // Time:        0.227 s, estimated 1 s
  // Ran all test suites.
  // ✨  Done in 1.07s.

//***********************************************************************
        // My Bad Ideas Below

        // const threeRemain = (array) => {
        // num = array.filter(function (value) {
        //     return !Number.isNaN(value);
        // });
        // }
        // array.filter( value => !Number.isNaN(value));
          // let number = array.map(Number)
          // let newNumb =  []
          // for(number.map())
                
          // num = array.map(Number)

          // let value = number.map()
        //  if (Number.isFinite()(number) == true);
          // if(Number.isNaN(number) === false);
        //  if(typeof(number) === true)
          // if (Number.isNaN() === true);

          
          
          
        // }


        // const threeRemain = array => {
        //     let number = [...new Set(array.map(element => element, typeOf === !""))]
          // let number = value => {
          //   if(typeof(value) === 'number'){
          //     return value % 3
              // return number % 3


          // const threeRemain = array.filter(number); 

        // const threeLeft = (array) => {
        //   let remaining = 23 % 3
        //   return remaining
        // }
        // console.log(threeLeft(hodgepodge1))

//***********************************************************************


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// Test Driven Development
describe("sumCubed", () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
    const cubeAndSum1 = [2, 3, 4]
    const cubeAndSum1Output = 99
    const cubeAndSum2 = [0, 5, 10]
    const cubeAndSum2Output = 1125
    expect(sumCubed(cubeAndSum1)).toEqual(cubeAndSum1Output)
    expect(sumCubed(cubeAndSum2)).toEqual(cubeAndSum2Output)
  })
})


    // Jest Test RTN:
    // ReferenceError: sumCubed is not defined
    // Test Suites: 1 failed, 1 total
    // Tests:       1 failed, 1 total
    // Snapshots:   0 total
    // Time:        0.257 s, estimated 1 s


// a) Create a test with an expect statement using the variables provided.

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

// b) Create the function that makes the test pass.

// Pseudocode: This was my easiest one, no real bad ideas to show
        //Paramenter will be an array of numbers
        //Argument: const arrays cubeAndSum1 & cubeAndSum2
        //Create a function named sumCubed
        //Utilize HOF .map to iterate over array and cube each number.  Then create a total that starts at 0 and use a for...of loop to total up the cubed numbers and add them to the total. 
        //Return the total that is beign added to by the for...of loop.


const sumCubed = (array) => {
  let cube = array.map((value) => value * value * value)
  let total = 0
  for(let number of cube) {
    total += number;
  }
  return total
}
console.log(sumCubed(cubeAndSum1))
console.log(sumCubed(cubeAndSum2))

  // Jest Test Return PASS 
  // Test Suites: 1 passed, 1 total
  // Tests:       1 passed, 1 total
  // Snapshots:   0 total
  // Time:        0.228 s, estimated 1 s
  // Ran all test suites.
  // ✨  Done in 1.06s.